import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ error: 'No signature' });
  }

  let event: Stripe.Event;

  try {
    // Weryfikacja webhooką - potwierdza że przyszedł naprawdę ze Stripe
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      endpointSecret
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Obsługa różnych eventów ze Stripe
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object as Stripe.PaymentIntent;
        await handlePaymentSuccess(paymentIntentSucceeded);
        break;

      case 'payment_intent.payment_failed':
        const paymentIntentFailed = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailed(paymentIntentFailed);
        break;

      case 'payment_intent.canceled':
        const paymentIntentCanceled = event.data.object as Stripe.PaymentIntent;
        await handlePaymentCanceled(paymentIntentCanceled);
        break;

      case 'payment_intent.created':
        const paymentIntentCreated = event.data.object as Stripe.PaymentIntent;
        await handlePaymentCreated(paymentIntentCreated);
        break;

      case 'payment_intent.processing':
        const paymentIntentProcessing = event.data.object as Stripe.PaymentIntent;
        await handlePaymentProcessing(paymentIntentProcessing);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}

// Płatność udana - zamówienie opłacone
async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log('💰 Payment succeeded:', paymentIntent.id);
  
  const orderId = paymentIntent.metadata.orderId;
  
  if (!orderId) {
    console.error('No orderId in payment metadata');
    return;
  }

  // TODO: Podłączyć Supabase - zaktualizować status zamówienia
  // await supabase
  //   .from('orders')
  //   .update({ 
  //     status: 'paid',
  //     stripePaymentIntentId: paymentIntent.id,
  //     paidAt: new Date().toISOString()
  //   })
  //   .eq('id', orderId);

  // TODO: Wysłać email z potwierdzeniem do klienta
  // await sendOrderConfirmationEmail(orderId);
}

// Płatność nieudana
async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log('❌ Payment failed:', paymentIntent.id);
  
  const orderId = paymentIntent.metadata.orderId;
  
  if (!orderId) {
    console.error('No orderId in payment metadata');
    return;
  }

  // TODO: Podłączyć Supabase - zaktualizować status zamówienia
  // await supabase
  //   .from('orders')
  //   .update({ 
  //     status: 'failed',
  //     stripePaymentIntentId: paymentIntent.id,
  //     failureReason: paymentIntent.last_payment_error?.message
  //   })
  //   .eq('id', orderId);

  // TODO: Wysłać email z informacją o nieudanej płatności
  // await sendPaymentFailedEmail(orderId);
}

// Płatność anulowana
async function handlePaymentCanceled(paymentIntent: Stripe.PaymentIntent) {
  console.log('🚫 Payment canceled:', paymentIntent.id);
  
  const orderId = paymentIntent.metadata.orderId;
  
  if (!orderId) {
    console.error('No orderId in payment metadata');
    return;
  }

  // TODO: Podłączyć Supabase
  // await supabase
  //   .from('orders')
  //   .update({ 
  //     status: 'cancelled',
  //     stripePaymentIntentId: paymentIntent.id
  //   })
  //   .eq('id', orderId);
}

// Płatność utworzona (nowe zamówienie)
async function handlePaymentCreated(paymentIntent: Stripe.PaymentIntent) {
  console.log('🆕 Payment created:', paymentIntent.id);
  
  const orderId = paymentIntent.metadata.orderId;
  
  if (!orderId) {
    console.error('No orderId in payment metadata');
    return;
  }

  // TODO: Podłączyć Supabase
  // await supabase
  //   .from('orders')
  //   .update({ 
  //     status: 'pending',
  //     stripePaymentIntentId: paymentIntent.id
  //   })
  //   .eq('id', orderId);
}

// Płatność w trakcie przetwarzania
async function handlePaymentProcessing(paymentIntent: Stripe.PaymentIntent) {
  console.log('⏳ Payment processing:', paymentIntent.id);
  
  const orderId = paymentIntent.metadata.orderId;
  
  if (!orderId) {
    console.error('No orderId in payment metadata');
    return;
  }

  // TODO: Podłączyć Supabase
  // await supabase
  //   .from('orders')
  //   .update({ 
  //     status: 'processing',
  //     stripePaymentIntentId: paymentIntent.id
  //   })
  //   .eq('id', orderId);
}
