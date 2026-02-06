// stripe.js
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Fetch invoice by userId or invoiceId
 */
async function getInvoice(userId, invoiceId) {
  try {
    const invoices = await stripe.invoices.list({ customer: userId, limit: 1 });
    return invoices.data[0] || null;
  } catch (err) {
    console.error("Stripe getInvoice error:", err);
    throw err;
  }
}

/**
 * Update payment method
 */
async function updatePaymentMethod(userId, cardInfo) {
  try {
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: cardInfo
    });
    await stripe.paymentMethods.attach(paymentMethod.id, { customer: userId });
    await stripe.customers.update(userId, {
      invoice_settings: { default_payment_method: paymentMethod.id }
    });
    return paymentMethod;
  } catch (err) {
    console.error("Stripe updatePaymentMethod error:", err);
    throw err;
  }
}

/**
 * Process refund
 */
async function processRefund(userId, paymentId) {
  try {
    const refund = await stripe.refunds.create({ payment_intent: paymentId });
    return refund;
  } catch (err) {
    console.error("Stripe refund error:", err);
    throw err;
  }
}

module.exports = { getInvoice, updatePaymentMethod, processRefund };
