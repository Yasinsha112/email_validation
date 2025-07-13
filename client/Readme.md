# Email Validation App

Simple web app that validates email addresses via backend API.

## Setup

1. Open `index.html` in your browser
2. Ensure backend server is running on `http://localhost:3000`

## Backend Requirements

**Endpoint:** `POST /validate-email`

**Request:**
```json
{ "email": "user@example.com" }
```

**Response:**
```json
{
  "status": "valid" | "invalid",
  "reason": "Error message (if invalid)"
}
```

## Usage

1. Enter email address
2. Click Submit
3. View validation result

## Features

- Real-time email validation
- Error handling
- Visual feedback with status messages