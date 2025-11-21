import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, orderId, customerEmail, customerName } = req.body;

    if (!amount || !orderId) {
      return res.status(400).json({ error: 'Amount and orderId are required' });
    }

    // Tworzenie PaymentIntent w Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Kwota w groszach (np. 22900 = 229 zł)
      currency: 'pln',
      metadata: {
        orderId: orderId,
      },
      description: `Zamówienie #${orderId}`,
      receipt_email: customerEmail,
      // Automatyczne potwierdzanie płatności
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
}
