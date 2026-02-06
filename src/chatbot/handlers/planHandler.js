// planHandler.js
const chargebee = require("../../integrations/chargebee");

async function handlePlanChange(userId, action, planType) {
  try {
    if (action === "upgrade") {
      const result = await chargebee.upgradePlan(userId, planType);
      return `Your subscription has been upgraded to ${planType}.`;
    } else if (action === "downgrade") {
      const result = await chargebee.downgradePlan(userId, planType);
      return `Your subscription has been downgraded to ${planType}.`;
    } else {
      return "Please specify whether you want to upgrade or downgrade.";
    }
  } catch (err) {
    console.error("Plan change error:", err);
    return "Sorry, I couldn’t update your plan. Please try again later.";
  }
}

module.exports = { handlePlanChange };
