# Subscription_management_bot
# Subscription Service Chatbot

## Overview
An AI-powered chatbot for subscription account management. Integrates with **Stripe** and **Chargebee**, compresses documentation with **ScaleDown**, and predicts churn with an ML model.

## Features
- Plan upgrades/downgrades
- Billing inquiries (invoices, refunds, payment updates)
- Usage tracking
- Cancellation retention (pause, discounts, feature reminders)
- Feature explanations (compressed docs)

## Tech Stack
- **Backend:** Node.js (Express)
- **Integrations:** Stripe, Chargebee
- **ML Models:** Python (scikit-learn)
- **Utilities:** Winston logger, NodeCache
- **Testing:** Jest (Node), Pytest (Python)

## Setup

### Prerequisites
- Node.js v18+
- Python 3.10+
- Stripe & Chargebee accounts

### Installation
```bash
# Install Node dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt
