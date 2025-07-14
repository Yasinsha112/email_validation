# 📧 Email Validation API (Clearout SDK Version)

This backend service validates email addresses in real time using the official [`@clearoutio/clearout`](https://www.npmjs.com/package/@clearoutio/clearout) Node.js SDK.

---

## 🚀 Features

- ✅ Real-time email verification via Clearout SDK
- 🛡️ Handles invalid, disposable, gibberish, and role-based emails
- 🌐 CORS enabled for frontend communication
- 📂 Serves static frontend files (form.html / form.js)
- ⚠️ Centralized error handling
- 🔒 Uses `.env` for secure API token management

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yasinsha112/email_validation.git
   cd email_validation
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory:

env
Copy
Edit
PORT=3000
API_TOKEN=your_clearout_api_token
▶️ Run the Project
Start the backend server:

bash
Copy
Edit
node server.js
The server will run at:
🔗 http://localhost:3000

🔗 API Endpoint
POST /validate-email
Request Body:

json
Copy
Edit
{
  "email": "user@example.com"
}
Successful Response:

json
Copy
Edit
{
  "status": "valid"
}
Invalid Response:

json
Copy
Edit
{
  "status": "invalid",
  "reason": "disposable" // or gibberish, role, etc.
}
Error Response:

json
Copy
Edit
{
  "status": "error",
  "reason": "API token missing or request failed"
}
🌐 Frontend
Simple HTML + JS form in form.js and index.html that:

Collects user email

Sends to /validate-email

Displays response using DOM updates

🛠️ Tech Stack
Node.js

Express

@clearoutio/clearout (Official SDK)

dotenv

body-parser

cors
