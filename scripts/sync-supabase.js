const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; 

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncImages() {
  console.log('Starting Supabase Storage sync...');

  // 1. Ensure bucket exists (This is usually done in UI but let's check)
  // Note: For simplicity, assume bucket 'products' is created and PUBLIC.
  
  const productsDir = path.join(process.cwd(), 'public', 'products');
  if (!fs.existsSync(productsDir)) {
    console.error('public/products directory not found. Please run the download command first.');
    return;
  }

  const files = fs.readdirSync(productsDir);
  console.log(`Found ${files.length} local images.`);

  for (const file of files) {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath);
    const fileName = file;

    console.log(`Uploading ${fileName}...`);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('products')
      .upload(fileName, fileContent, {
        contentType: 'image/webp',
        upsert: true
      });

    if (uploadError) {
      console.error(`Error uploading ${fileName}:`, uploadError.message);
      continue;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('products')
      .getPublicUrl(fileName);

    console.log(`Uploaded! Public URL: ${publicUrl}`);

    // Update the database
    // We search for products that have this filename in their image_url
    const { data: products, error: fetchError } = await supabase
      .from('products')
      .select('id, image_url')
      .like('image_url', `%${fileName}%`);

    if (products && products.length > 0) {
      for (const product of products) {
        console.log(`Updating product ${product.id} image_url...`);
        await supabase
          .from('products')
          .update({ image_url: publicUrl })
          .eq('id', product.id);
      }
    }
  }

  console.log('Sync complete!');
}

syncImages();
