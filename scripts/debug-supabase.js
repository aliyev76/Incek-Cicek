const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkResources() {
  console.log('Checking Supabase resources...');

  // 1. Check Buckets
  const { data: buckets, error: bError } = await supabase.storage.listBuckets();
  if (bError) {
    console.error('Error listing buckets:', bError.message);
  } else {
    console.log('Buckets:', buckets.map(b => `${b.name} (Public: ${b.public})`));
  }

  // 2. Check Files in 'products'
  const { data: files, error: fError } = await supabase.storage.from('products').list('', { limit: 5 });
  if (fError) {
    console.error('Error listing files in "products":', fError.message);
  } else {
    console.log('Sample files in "products":', files.map(f => f.name));
  }

  // 3. Check DB records
  const { data: products, error: pError } = await supabase.from('products').select('image_url').limit(3);
  if (pError) {
    console.error('Error fetching DB records:', pError.message);
  } else {
    console.log('DB image_urls (top 3):', products.map(p => p.image_url));
  }
}

checkResources();
