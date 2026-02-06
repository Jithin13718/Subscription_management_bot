// retentionHandler.js
const churnModel = require("../../models/churnModel");

async function handleCancellation(userId, reason) {
  try {
    const riskScore = await churnModel.predict(userId);

    if (riskScore > 0.7) {
      return "We noticed you might benefit from pausing your subscription or receiving a discount. Would you like to explore these options?";
    } else {
      return "I can cancel your subscription. Please confirm you want to proceed.";
    }
  } catch (err) {
    console.error("Retention error:", err);
    return "Sorry, I couldn’t process your cancellation request.";
  }
}

module.exports = { handleCancellation };
