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
    const orderId = `ORD-${Date.now()}`;

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

    // Shopier requires specific fields. This is a simplified version of the logic.
    // In a real implementation, you'd follow their specific PHP-to-JS port for signature.
    
    // Example signature logic: order_id + total_amount + callback_url + secret
    // Shopier specific data structure
    const callbackUrl = `${process.env.URL || 'http://localhost:8888'}/.netlify/functions/callback`;
    
    // In a production app, you'd use a more specific Shopier logic.
    // For this clone, we'll ensure the payload is richer.
    const signatureData = `${orderId}${totalAmount}${callbackUrl}${customer.email}`;
    const hmac = crypto.createHmac('sha256', apiSecret);
    hmac.update(signatureData);
    const signature = hmac.digest('base64');

    // Return the payment URL simulation
    const paymentUrl = `https://www.shopier.com/ShowProduct/api_pay.php?api_key=${apiKey}&order_id=${orderId}&amount=${totalAmount}&signature=${encodeURIComponent(signature)}&email=${encodeURIComponent(customer.email)}`;

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: paymentUrl,
        orderId: orderId,
        message: 'Order created successfully'
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
