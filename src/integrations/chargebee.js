// chargebee.js
const chargebee = require("chargebee");

chargebee.configure({
  site: process.env.CHARGEBEE_SITE,
  api_key: process.env.CHARGEBEE_API_KEY
});

/**
 * Upgrade plan
 */
async function upgradePlan(userId, planType) {
  try {
    const result = await chargebee.subscription.update(userId, {
      plan_id: planType
    }).request();
    return result.subscription;
  } catch (err) {
    console.error("Chargebee upgradePlan error:", err);
    throw err;
  }
}

/**
 * Downgrade plan
 */
async function downgradePlan(userId, planType) {
  try {
    const result = await chargebee.subscription.update(userId, {
      plan_id: planType
    }).request();
    return result.subscription;
  } catch (err) {
    console.error("Chargebee downgradePlan error:", err);
    throw err;
  }
}

/**
 * Cancel subscription
 */
async function cancelSubscription(userId) {
  try {
    const result = await chargebee.subscription.cancel(userId).request();
    return result.subscription;
  } catch (err) {
    console.error("Chargebee cancelSubscription error:", err);
    throw err;
  }
}

module.exports = { upgradePlan, downgradePlan, cancelSubscription };
