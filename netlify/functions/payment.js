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
    const { cart, customer } = JSON.parse(event.body);
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const formattedAmount = totalAmount.toFixed(2);
    const orderId = Date.now().toString(); // Use numeric ID for both Supabase and Shopier
    
    // Shopier Auth
    const apiKey = process.env.SHOPIER_API_KEY;
    const apiSecret = process.env.SHOPIER_API_SECRET;

    // 1. Create order in Supabase
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: customer.name,
        customer_email: customer.email,
        total_price: totalAmount,
        status: 'pending',
        items: cart,
        shopier_order_id: orderId
      })
      .select()
      .single();

    if (orderError) throw orderError;

    const currency = '0'; // 0 for TL
    const randomNr = Math.floor(Math.random() * 1000000).toString();
    const callbackUrl = `${process.env.URL || 'https://incekbeytepecicek.com'}/.netlify/functions/callback`;
    
    // In Shopier Standard API, the signature is: random_nr + order_id + formatted_amount + currency
    const dataToSign = `${randomNr}${orderId}${formattedAmount}${currency}`;
    const hmac = crypto.createHmac('sha256', apiSecret);
    hmac.update(dataToSign);
    const signature = hmac.digest('base64');

    // Prepare fields for POST
    const fields = {
      api_key: apiKey,
      order_id: orderId,
      amount: formattedAmount,
      currency: currency,
      random_nr: randomNr,
      signature: signature,
      callback_url: callbackUrl,
      customer_email: customer.email,
      customer_name: customer.name,
      customer_phone: customer.phone,
      customer_address: customer.address,
      website_index: '1',
      product_name: 'Çiçek Siparişi',
      product_type: '0'
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        fields: fields,
        orderId: orderId,
        message: 'Order created successfully'
      }),
    };
  } catch (error) {
    console.error('Payment preparation error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
