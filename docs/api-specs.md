# API Specifications

## Stripe Integration
- **GET /billing/invoices** → Fetch invoices
- **POST /billing/payment-method** → Update payment method
- **POST /billing/refund** → Process refunds

## Chargebee Integration
- **GET /plans** → Retrieve subscription plans
- **POST /plans/upgrade** → Upgrade subscription
- **POST /plans/downgrade** → Downgrade subscription
- **POST /plans/cancel** → Cancel subscription

## Usage Tracking
- **GET /usage** → Retrieve usage metrics (API calls, storage, minutes)
- **POST /usage/log** → Log new usage event

## Churn Model
- **POST /churn/predict** → Predict churn risk
- **POST /churn/train** → Train model with new data
