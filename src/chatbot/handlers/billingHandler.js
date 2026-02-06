// billingHandler.js
const stripe = require("../../integrations/stripe");

async function handleBillingInquiry(userId, inquiryType, payload) {
  try {
    switch (inquiryType) {
      case "invoice":
        const invoice = await stripe.getInvoice(userId, payload.invoiceId);
        return `Here is your invoice: ${JSON.stringify(invoice)}`;
      case "payment_update":
        await stripe.updatePaymentMethod(userId, payload.cardInfo);
        return "Your payment method has been updated successfully.";
      case "refund":
        await stripe.processRefund(userId, payload.paymentId);
        return "Your refund request has been processed.";
      default:
        return "I can help with invoices, payment updates, or refunds. Please specify.";
    }
  } catch (err) {
    console.error("Billing error:", err);
    return "Sorry, I couldn’t process your billing request.";
  }
}

module.exports = { handleBillingInquiry };
