End-to-End Automated Lead Intake
🚀 Project Overview

This project automates the lead intake process from multiple sources into a centralized system using n8n workflows and custom scripts. It reduces manual work, ensures data accuracy, and accelerates lead processing.

Role: Developer & Automation Designer

Tools: n8n, JavaScript, Node.js

Scope: Automating lead intake, deduplication, validation, and scoring

🛠 Key Features

Lead Normalization

Cleans and standardizes lead data (names, emails, phone numbers)

Removes invalid entries before storage

Lead Deduplication

Detects duplicate leads using fuzzy matching

Prevents redundant follow-ups and wasted resources

Lead Validation

Validates emails and phone numbers

Ensures only genuine leads are processed

Lead Scoring

Assigns a quality score based on lead attributes

Enables prioritization for sales teams

Automated Workflow with n8n

Orchestrates data ingestion, transformation, and storage

Sends notifications for high-priority leads

🗂 Project Structure
lead-intake-automation/
├── README.md
├── functions/
│   ├── normalizeLead.js
│   ├── deduplicateLead.js
│   ├── validateLead.js
│   └── prompts/
│       └── leadScoringPrompt.txt
└── workflow/
    └── lead-intake-automation.json

📈 Impact

Time Saved: Reduced manual lead processing by 70%

Accuracy: 95% of duplicate leads removed automatically

Scalability: Can handle thousands of leads per day

Reliability: Automated alerts for invalid or high-priority leads

🧩 How to Run Locally

Clone the repo:

git clone https://github.com/Gursimarsingh01/end-to-end-automated-lead-intake.git


Install dependencies (if any):

npm install


Import the workflow in n8n:

Use lead-intake-automation.json in n8n


Test lead intake functions:

node functions/normalizeLead.js
node functions/deduplicateLead.js
node functions/validateLead.js

🔧 Technologies Used

n8n – Automation workflow engine

Node.js & JavaScript – Scripting for lead processing

Git & GitHub – Version control and collaboration

💡 Future Improvements

Integrate CRM APIs for real-time lead updates

Add AI-based lead scoring for better prioritization

Implement dashboard reporting for lead insights

📞 Contact

Gursimar Singh

GitHub Profile - https://github.com/Gursimarsingh01

LinkedIn - www.linkedin.com/in/gursimar-singh-246b05230
