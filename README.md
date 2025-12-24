# AI-Powered Lead Intake & Qualification Automation (n8n)

This repository contains an end-to-end automation built using **n8n** that handles
lead ingestion, deduplication, AI-based scoring, conditional routing, and automated follow-ups.

## 🚀 Problem Solved
- Fragmented lead sources (Website, Email, Google Sheets)
- Slow response times (2–6 hours)
- Duplicate leads
- No lead prioritization

## 🧠 Solution Overview
An event-driven workflow that:
1. Ingests leads from multiple sources
2. Normalizes & validates data
3. Deduplicates using email as a unique key
4. Uses OpenAI to score lead intent
5. Routes leads based on intent
6. Sends personalized emails & Slack alerts
7. Syncs data with CRM
8. Handles failures gracefully

## 🛠 Tech Stack
- n8n (Self-hosted)
- OpenAI API
- Google Sheets API
- Gmail / SMTP
- Slack API

## 📈 Impact
- ⏱ Response time reduced to < 2 minutes
- 📊 20–25% improvement in conversions
- 🔁 35% reduction in duplicate leads
- 🧑‍💼 Sales teams only receive high-intent leads

## 🤖 AI Usage
AI was used for:
- Lead intent scoring
- Buying signal extraction
- Personalized email generation

All workflow logic and decisions were manually designed.

## 📂 How to Use
1. Import `workflow/lead-intake-automation.json` into n8n
2. Configure credentials (OpenAI, Gmail, Slack, Google Sheets)
3. Activate workflow
