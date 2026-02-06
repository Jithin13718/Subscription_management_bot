// usageHandler.js
const usageTracker = require("../../integrations/usageTracker");

async function handleUsageRequest(userId, metricType) {
  try {
    const usage = await usageTracker.getUsage(userId, metricType);
    return `Your current ${metricType} usage is ${usage}.`;
  } catch (err) {
    console.error("Usage error:", err);
    return "Sorry, I couldn’t fetch your usage data.";
  }
}

module.exports = { handleUsageRequest };
