# Full-Stack Email Sender

## Tech Stack
- **Backend:** Java, Spring Boot (Spring Mail, Spring Web, Lombok)
- **Frontend:** Vite + React, React-Hot-Toast

## Overview
This full-stack email sender application allows users to send emails with:
- Plain text content
- Attachments (images, files, etc.)
- HTML content

## Features
- **Send Emails:** Users can send emails with different types of content.
- **File Attachments:** Support for sending images, PDFs, and other file types.
- **Rich HTML Content:** Users can send well-formatted HTML emails.
- **User-Friendly Frontend:** Built with Vite + React for a smooth experience.
- **Real-Time Notifications:** Uses React-Hot-Toast for instant feedback.

## Setup Instructions
### Backend (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/akashpratapsing/Email-Sender.git
   cd Email_sender_backend
   ```
2. Configure SMTP settings in `application.properties`.
3. Build and run the backend:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend (React + Vite)
1. Navigate to the frontend directory:
   ```bash
   cd Email_sender_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

## Usage
1. Open the frontend in the browser.
2. Fill in the email details (recipient, subject, message, attachments, etc.).
3. Click **Send** and check for real-time toast notifications.

## Contributions
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## License
This project is open-source and available under the MIT License.
