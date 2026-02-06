// usageTracker.js
// Simulated usage tracker — replace with DB or metrics API

const usageData = {
  "user123": { api_calls: 1200, storage: "5GB", minutes: 300 },
  "user456": { api_calls: 800, storage: "2GB", minutes: 150 }
};

/**
 * Get usage metrics
 */
async function getUsage(userId, metricType) {
  try {
    const userUsage = usageData[userId] || {};
    return userUsage[metricType] || "No data available";
  } catch (err) {
    console.error("UsageTracker getUsage error:", err);
    throw err;
  }
}

/**
 * Log usage event
 */
async function logUsage(userId, metricType, value) {
  try {
    if (!usageData[userId]) usageData[userId] = {};
    usageData[userId][metricType] = value;
    return usageData[userId];
  } catch (err) {
    console.error("UsageTracker logUsage error:", err);
    throw err;
  }
}

module.exports = { getUsage, logUsage };
