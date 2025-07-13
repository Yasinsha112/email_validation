# Email Validation API

Backend service that validates email addresses using Clearout.io API.

## Setup

1. Install dependencies:
```bash
npm install express node-fetch body-parser cors dotenv
```

2. Create `.env` file:
```
PORT=3000
API_TOKEN=your_clearout_api_token
```

3. Start server:
```bash
node server.js
```

## API Endpoint

**POST** `/validate-email`

**Request:**
```json
{ "email": "user@example.com" }
```

**Response:**
```json
{
  "status": "valid" | "invalid" | "error",
  "reason": "Error description (if invalid/error)"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `API_TOKEN` - Clearout.io API token

## Features

- Email validation via Clearout.io
- CORS enabled
- Static file serving
- Error handling