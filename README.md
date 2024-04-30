# WhatsApp Clone Project
This project is a clone of WhatsApp, implemented using React.js for the frontend, Node.js for the backend API, and MongoDB for database storage.

## Features Implemented:
### 1. Login Page:
- Users can log in using their credentials using phone number and password.
### 2. Contact List:
- Once logged in, users can view their contact list.
- Each contact displays their profile picture, name, and last message.
### 3. Conversation:
- Users can select a contact to start a conversation.
- Messages are displayed in a chat-like interface.
## Technologies Used:
### Frontend:
- React.js
- custom CSS for styling
- use universal-cookie package for cookie storing
### Backend:
- Node.js with Express.js framework
- MongoDB for database storage
- yup for validation
## Getting Started:
### Prerequisites:
- Node.js and npm installed on your machine
- MongoDB installed locally or accessible via a cloud service
- React.js development environment set up
### Installation:
1. Clone this repository: git clone https://github.com/Riyanka139/whatsapp-clone.git
2. Navigate to the project directory: cd whatsapp-clone
3. Install dependencies for frontend and backend:
    - Frontend: cd client && npm install
    - Backend: cd server && npm install
4. Set up your MongoDB database and configure the connection in server/server.js
5. Start the backend server: cd server && npm start
6. Start the frontend development server: cd client && npm start
7. Access the application in your web browser at http://localhost:3000
## API Endpoints:
- POST /api/login: Endpoint for user login
- POST /api/user: Endpoint for user registration
- GET /api/channel?phone={user_phoneNumber}: Endpoint to fetch user's contact list and fetch messages of a specific conversation
- GET /api/user?phoneNumber={user_phoneNumber}: Endpoint to fetch searched user in contact list
- POST /api/channel: Endpoint to add a new contact
- POST /api/message: Endpoint to send a message in a conversation
