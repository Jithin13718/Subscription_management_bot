// config.js
const fs = require("fs");
const path = require("path");

function loadConfig(env = process.env.NODE_ENV || "development") {
  const configPath = path.join(__dirname, "..", "config", `${env}.json`);
  try {
    const rawData = fs.readFileSync(configPath);
    const config = JSON.parse(rawData);
    return config;
  } catch (err) {
    console.error(`Error loading config for ${env}:`, err);
    return {};
  }
}

module.exports = { loadConfig };

// Example usage:
// const { loadConfig } = require("./utils/config");
// const config = loadConfig();
// console.log("Loaded config:", config);
