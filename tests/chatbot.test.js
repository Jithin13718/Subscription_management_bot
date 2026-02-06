// chatbot.test.js
const { handlePlanChange } = require("../src/chatbot/handlers/planHandler");
const { handleBillingInquiry } = require("../src/chatbot/handlers/billingHandler");
const { handleUsageRequest } = require("../src/chatbot/handlers/usageHandler");
const { handleCancellation } = require("../src/chatbot/handlers/retentionHandler");

describe("Chatbot Handlers", () => {
  test("Plan change handler upgrades plan", async () => {
    const response = await handlePlanChange("user123", "upgrade", "Pro");
    expect(response).toContain("upgraded");
  });

  test("Billing handler fetches invoice", async () => {
    const response = await handleBillingInquiry("user123", "invoice", { invoiceId: "inv_001" });
    expect(response).toContain("invoice");
  });

  test("Usage handler returns usage data", async () => {
    const response = await handleUsageRequest("user123", "api_calls");
    expect(response).toContain("usage");
  });

  test("Retention handler offers retention for high churn risk", async () => {
    const response = await handleCancellation("user123", "Too expensive");
    expect(response).toMatch(/pause|discount|cancel/i);
  });
});
