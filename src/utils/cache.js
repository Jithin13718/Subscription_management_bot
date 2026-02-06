// cache.js
const NodeCache = require("node-cache");

// Default TTL = 300 seconds (5 minutes)
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

function setCache(key, value, ttl = 300) {
  cache.set(key, value, ttl);
}

function getCache(key) {
  return cache.get(key);
}

function deleteCache(key) {
  cache.del(key);
}

function clearCache() {
  cache.flushAll();
}

module.exports = { setCache, getCache, deleteCache, clearCache };

// Example usage:
// const { setCache, getCache } = require("./utils/cache");
// setCache("user123_plan", "Pro");
// console.log(getCache("user123_plan"));
