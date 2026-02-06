// stripe.test.js
const stripe = require("../src/integrations/stripe");

describe("Stripe Integration", () => {
  test("Fetch invoice", async () => {
    const invoice = await stripe.getInvoice("user123", "inv_001");
    expect(invoice).toBeDefined();
  });

  test("Update payment method", async () => {
    const cardInfo = { number: "4242424242424242", exp_month: 12, exp_year: 2026, cvc: "123" };
    const result = await stripe.updatePaymentMethod("user123", cardInfo);
    expect(result).toHaveProperty("id");
  });

  test("Process refund", async () => {
    const refund = await stripe.processRefund("user123", "pi_001");
    expect(refund).toHaveProperty("id");
  });
});
