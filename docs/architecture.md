# System Architecture - Subscription Service Chatbot

## Overview
The Subscription Service Chatbot manages account operations such as billing, plan changes, usage tracking, and churn reduction. It integrates with Stripe and Chargebee for billing and subscription lifecycle management.

## Layers
1. **Frontend (Chat UI)**
   - Web/mobile chatbot interface
   - Supports natural language queries

2. **Backend (Node.js/Express)**
   - Chatbot logic
   - Integrations with Stripe, Chargebee
   - ML model endpoints (Python)

3. **ML Services**
   - Churn prediction model
   - ScaleDown compression for documentation

4. **Database**
   - Stores user profiles, usage metrics, churn scores
   - Lightweight caching for frequent queries

## Data Flow
1. User → Chatbot → Intent classification  
2. Intent → Handler → API call (Stripe/Chargebee)  
3. Response → Chatbot → User  
4. Churn risk → ML model → Retention strategy
