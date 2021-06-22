const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map(item => {
    const { gender, collections, style, name, color, image, price, amount } =
      item;

    //  const imgUrl = `/assets/products/${gender}/${collections}/${style}/${name}/${color}/small/${image}`;

    return {
      quantity: amount,
      price_data: {
        currency: 'usd',
        unit_amount: price * 1000,
        product_data: {
          name: name,
          images: [item.image],
        },
      },
    };
  });

  const imgUrl = items.map(item => {
    const { gender, collections, style, name, color, image } = item;

    const imgUrl = `/assets/products/${gender}/${collections}/${style}/${name}/${color}/small/${image}`;

    return imgUrl;
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1J5CQeEeaSFzesK6yqpdntQ7'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/pages/success-checkout`,
    cancel_url: `${process.env.HOST}/pages/checkout`,
    metadata: {
      email,
      images: JSON.stringify(imgUrl),
    },
  });

  res.status(200).json({ id: session.id });
};
