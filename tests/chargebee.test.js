// chargebee.test.js
const chargebee = require("../src/integrations/chargebee");

describe("Chargebee Integration", () => {
  test("Upgrade plan", async () => {
    const result = await chargebee.upgradePlan("user123", "Pro");
    expect(result).toHaveProperty("plan_id", "Pro");
  });

  test("Downgrade plan", async () => {
    const result = await chargebee.downgradePlan("user123", "Basic");
    expect(result).toHaveProperty("plan_id", "Basic");
  });

  test("Cancel subscription", async () => {
    const result = await chargebee.cancelSubscription("user123");
    expect(result).toHaveProperty("status", "cancelled");
  });
});
