// seedData.js
require("dotenv").config();
const chargebee = require("../src/integrations/chargebee");
const stripe = require("../src/integrations/stripe");

async function seedDemoData() {
  try {
    // Create demo customers in Stripe
    const customer1 = await stripe.createCustomer("demo_user1@example.com");
    const customer2 = await stripe.createCustomer("demo_user2@example.com");

    console.log("Stripe customers created:", customer1.id, customer2.id);

    // Create demo subscriptions in Chargebee
    const sub1 = await chargebee.createSubscription(customer1.id, "Basic");
    const sub2 = await chargebee.createSubscription(customer2.id, "Pro");

    console.log("Chargebee subscriptions created:", sub1.id, sub2.id);

    console.log("✅ Demo data seeded successfully.");
  } catch (err) {
    console.error("❌ Error seeding demo data:", err);
  }
}

seedDemoData();
