const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function checkColumns() {
  const { data, error } = await supabase.from('orders').select('*').limit(1);
  if (error) {
     console.error(error.message);
  } else {
     // If empty, let's try to get schema via an empty select or just assuming it might need creation.
     // In Supabase, if a table is empty, we can't easily see columns via basic SELECT.
     // I'll provide the SQL to ensure the table is CORRECT.
     console.log('Orders table exists. Providing creation SQL just in case.');
  }
}
checkColumns();
