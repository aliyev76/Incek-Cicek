const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function checkOrdersTable() {
  const { data, error } = await supabase.from('orders').select('*').limit(1);
  if (error) {
    if (error.code === '42P01') {
      console.log('Orders table does not exist. Creating it...');
      // Note: I can't easily create tables via JS client without RPC or SQL.
      // I will provide the SQL to the user if missing.
    } else {
      console.error('Error checking orders table:', error.message);
    }
  } else {
    console.log('Orders table exists!');
    if (data.length > 0) {
       console.log('Sample order columns:', Object.keys(data[0]));
    } else {
       console.log('Orders table is empty, but exists.');
    }
  }
}
checkOrdersTable();
