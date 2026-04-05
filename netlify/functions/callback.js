const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body;
    const params = new URLSearchParams(body);
    const data = Object.fromEntries(params.entries());

    const { 
      res_sig: receivedSignature, 
      random_nr: randomNr,
      platform_order_id: orderId, 
      total_order_value: totalAmount,
      status,
      currency = '0'
    } = data;

    const apiSecret = process.env.SHOPIER_API_SECRET;

    if (!apiSecret) {
      console.error('SHOPIER_API_SECRET is missing');
      return { statusCode: 500, body: 'Configuration error' };
    }

    // 1. Verify signature
    // Data string order: random_nr + platform_order_id + total_order_value + currency
    const dataString = `${randomNr}${orderId}${totalAmount}`;
    const hmac = crypto.createHmac('sha256', apiSecret);
    hmac.update(dataString, 'utf8');
    const expectedSignature = hmac.digest('base64');

    if (receivedSignature !== expectedSignature) {
      console.error(`Invalid signature for order ${orderId}. Expected: ${expectedSignature}, Received: ${receivedSignature}`);
      return { statusCode: 403, body: 'Invalid signature' };
    }
    
    if (status === 'success') {
      const { error: updateError } = await supabase
        .from('orders')
        .update({ status: 'completed' })
        .eq('shopier_order_id', orderId);

      if (updateError) {
        console.error(`Order ${orderId} update failed:`, updateError);
        return { statusCode: 500, body: 'Database update failed' };
      }
      
      console.log(`Order ${orderId} marked as completed.`);
      return { statusCode: 200, body: 'OK' };
    }

    return { statusCode: 400, body: 'Payment status not success' };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
