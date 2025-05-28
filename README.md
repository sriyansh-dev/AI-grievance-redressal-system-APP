UNDER DEVELOPMENT

AI-Powered Citizen Grievance Redressal System (CGRS)
Overview
The AI-Powered Citizen Grievance Redressal System (CGRS) is an innovative solution developed for the IBM Hackathon Prarambh 2025, aimed at transforming public service delivery in the context of the 'AI City in Lucknow' initiative. This system leverages artificial intelligence to address inefficiencies in traditional grievance redressal mechanisms by automating complaint classification, prioritization, and routing. It enhances speed, accuracy, scalability, and transparency, contributing to improved citizen services across urban, rural, and disaster-prone areas.
This project is designed to handle real-world scenarios such as disaster response, infrastructure maintenance, healthcare alerts, and welfare scheme monitoring, with a focus on accessibility, multilingual support, and data privacy.
Features

Citizen-Facing Interface: A web and mobile-friendly portal with a multilingual chatbot for lodging and tracking grievances.
AI-Driven Backend:
Classification and prioritization of complaints using NLP and machine learning models.
Fake-report detection to filter spam or malicious submissions.
Automated routing to relevant government departments.


Real-Time Dashboard: Enables authorities to monitor, respond, and analyze grievances.
Security & Privacy: End-to-end encryption and compliance with data protection regulations.
Multilingual Support: Processes complaints in diverse languages using advanced NLP models.
Scalability: Built to handle small-town to nationwide deployments via cloud infrastructure.

Problem Statement
The CGRS addresses the AI-Powered Citizen Grievance Redressal System use case from the IBM Hackathon Prarambh 2025. Traditional grievance systems suffer from delays, manual errors, and lack of transparency, leading to citizen distrust and inefficient governance. This system aims to:

Reduce resolution times from weeks to days or hours.
Improve accuracy in complaint categorization and routing.
Enhance accessibility for rural and multilingual communities.
Build trust through transparent tracking and audit trails.

For detailed problem statement, see: AI-Powered Citizen Grievance Redressal System.
Tech Stack

Frontend: React.js, Rasa for chatbot, Tailwind CSS for styling.
Backend: Python with FastAPI, Django for API and server logic.
AI/ML: Hugging Face Transformers (BERT for NLP), TensorFlow for classification and anomaly detection.
Database: PostgreSQL for structured data, MongoDB for unstructured complaint data.
Cloud: AWS (S3, Lambda, EC2) or GCP for scalable deployment.
Real-Time: WebSockets for dashboard updates, MQTT for notifications.
Security: AES-256 encryption, Role-Based Access Control (RBAC).

Installation
Prerequisites

Python 3.8+
Node.js 16+
Docker (optional for containerized deployment)
AWS/GCP account for cloud deployment
IBM SkillBuild account (IBM SkillBuild) for hackathon compliance

Setup Instructions

Clone the Repository:
git clone https://github.com/your-team/cgrs-prarambh-2025.git
cd cgrs-prarambh-2025


Install Backend Dependencies:
pip install -r requirements.txt

Key dependencies include:

fastapi
transformers
tensorflow
psycopg2 (PostgreSQL)
pymongo (MongoDB)


Install Frontend Dependencies:
cd frontend
npm install


Configure Environment Variables:Create a .env file in the root directory:
DATABASE_URL=postgresql://user:password@localhost:5432/cgrs
MONGODB_URL=mongodb://localhost:27017/cgrs
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
RASA_MODEL_PATH=/path/to/rasa/model


Run Database Migrations:
python manage.py migrate


Start the Backend Server:
uvicorn main:app --reload


Start the Frontend:
cd frontend
npm start


Train and Run Rasa Chatbot:
rasa train
rasa run --enable-api --cors "*"


Optional: Deploy to Cloud:

Use AWS Elastic Beanstalk or GCP App Engine.
Configure Docker for containerized deployment:docker-compose up --build





Usage

Citizen Interface:

Access the web portal at http://localhost:3000 or deployed URL.
Use the chatbot to submit grievances in preferred languages.
Track grievance status via a unique ticket ID.


Authority Dashboard:

Access at http://localhost:3000/admin (requires RBAC credentials).
View real-time grievance metrics, prioritize tasks, and assign to departments.


API Endpoints:

POST /api/grievances: Submit a new grievance.
GET /api/grievances/{id}: Retrieve grievance status.
POST /api/classify: Classify and route grievances (internal use).
See docs/api.md for full API documentation.



Project Structure
cgrs-prarambh-2025/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── models/             # AI/ML models (BERT, anomaly detection)
│   ├── api/                # API routes
│   ├── db/                 # Database connectors
│   └── requirements.txt     # Backend dependencies
├── frontend/
│   ├── src/                # React.js components
│   ├── public/             # Static assets
│   └── package.json         # Frontend dependencies
├── rasa/
│   ├── data/               # Chatbot training data
│   ├── models/             # Trained Rasa models
│   └── config.yml          # Rasa configuration
├── docker-compose.yml       # Docker configuration
├── .env                    # Environment variables
└── README.md               # Project documentation

AI Models

Classification: BERT for categorizing grievances (e.g., infrastructure, healthcare).
Prioritization: Random Forest to flag urgent issues based on keywords and metadata.
Fake-Report Detection: Isolation Forest to identify spam or malicious submissions.
NLP: Multilingual BERT for processing complaints in Hindi, Urdu, and other regional languages.

Training data is sourced from synthetic datasets and hackathon-provided samples, with plans to integrate real-world grievance data during pilots.
Deployment Challenges

Scalability: Ensure cloud infrastructure handles high complaint volumes.
Multilingual NLP: Support for low-resource languages requires fine-tuning.
Bias Mitigation: Regular audits to prevent urban bias in prioritization.
Security: Implement robust encryption and compliance with GDPR-like regulations.

Hackathon Context
This project aligns with the IBM Hackathon Prarambh 2025, organized by IBM, AKTU, and the Government of Uttar Pradesh. Key requirements include:

Completing the IBM SkillBuild course (IBM SkillBuild).
Submitting the idea by May 25, 2025, via Hackathon Portal.
Leveraging IBM tools like Watson Studio and Watson Assistant.

Contribution Guidelines

Fork the repository and create a feature branch.
Follow coding standards (PEP 8 for Python, ESLint for JavaScript).
Submit pull requests with clear descriptions and test cases.
Ensure AI models are documented with training parameters.

Testing

Unit Tests: Run pytest for backend and npm test for frontend.
Integration Tests: Test API endpoints with Postman or scripts in tests/.
Chatbot Testing: Use rasa test to validate NLP responses.

Future Enhancements

Integrate real-time IoT data (e.g., sensors for environmental surveillance).
Expand language support for additional Indian dialects.
Add predictive analytics for systemic issue detection.

Contact & Support
For queries related to the hackathon:

Email: tnp.aktu@aktu.ac.in or dean.tp@aktu.ac.in
Hackathon Portal: Prarambh 2025

For project-specific issues:

Open a GitHub issue or contact the team lead.

License
This project is licensed under the MIT License. See LICENSE for details.
