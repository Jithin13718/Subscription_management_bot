// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const { loadConfig } = require("./utils/config");

// Handlers
const { handlePlanChange } = require("./chatbot/handlers/planHandler");
const { handleBillingInquiry } = require("./chatbot/handlers/billingHandler");
const { handleUsageRequest } = require("./chatbot/handlers/usageHandler");
const { handleCancellation } = require("./chatbot/handlers/retentionHandler");

// Load environment-specific config
const config = loadConfig();

const app = express();
app.use(bodyParser.json());

// --- Middleware for logging requests ---
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// --- Chatbot Endpoint ---
app.post("/chatbot", async (req, res) => {
  const { userId, intent, payload } = req.body;

  try {
    let response;

    switch (intent) {
      case "plan_changes":
        response = await handlePlanChange(userId, payload.action, payload.planType);
        break;

      case "billing_inquiries":
        response = await handleBillingInquiry(userId, payload.type, payload);
        break;

      case "usage_tracking":
        response = await handleUsageRequest(userId, payload.metricType);
        break;

      case "cancellations":
        response = await handleCancellation(userId, payload.reason);
        break;

      default:
        response = "Sorry, I didn’t understand that request.";
    }

    res.json({ reply: response });
  } catch (err) {
    logger.error("Chatbot error: " + err.message);
    res.status(500).json({ reply: "Internal server error." });
  }
});

// --- Health Check Endpoint ---
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "subscription-chatbot" });
});

// --- Start Server ---
const PORT = process.env.PORT || config.port || 3000;
app.listen(PORT, () => {
  logger.info(`Chatbot server running on port ${PORT}`);
});
