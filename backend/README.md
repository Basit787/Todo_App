Here is the complete and properly formatted `README.md` for your Todo App Backend:

````markdown
# Todo App Backend

A backend REST API service for the Todo application built with TypeScript and Hono.js.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Security Features](#security-features)
- [Contributing](#contributing)

## Technologies Used

- Node.js: Runtime environment
- TypeScript: Programming language
- Hono.js: Web framework for building APIs
- MongoDB: Database for storing user and todo data
- Mongoose: MongoDB object modeling tool
- JSON Web Tokens (JWT): For authentication and authorization
- Bcrypt: For password hashing and security
- Crypto: For token encryption/decryption

## Features

- User authentication and authorization
- Secure password handling
- Token-based authentication
- User registration and login
- Protected routes
- Error handling
- Input validation

## Prerequisites

Before running this application, ensure you have:

- Node.js (v14 or higher)
- Docker installed and running (for MongoDB container)
- Run Docker to start MongoDB:

```bash
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=todoapp -e MONGO_INITDB_ROOT_PASSWORD=secretpass mongo
```
````

- npm or yarn package manager
- TypeScript knowledge for development

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://todoapp:secretpass@localhost:27017
JWT_SECRET=your_jwt_secret_key
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-app-backend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Build the project:

```bash
npm run build
# or
yarn build
```

4. Start the server:

- Development mode:

```bash
npm run dev
# or
yarn dev
```

- Production mode:

```bash
npm start
# or
yarn start
```

## API Endpoints

### User Management

- **POST /api/users/register**  
  Register a new user  
  **Body**:

  ```json
  {
    "email": "user@example.com",
    "password": "password",
    "name": "User Name"
  }
  ```

  **Returns**: User object with JWT token

- **GET /api/users/:id**  
  Get user details by ID  
  **Requires**: Authentication token  
  **Returns**: User details

- **GET /api/users/me**  
  Get current user details  
  **Requires**: Authentication token  
  **Returns**: Current user information

### Authentication

All protected routes require Bearer token  
Header format:  
`Authorization: Bearer <your_token>`  
Token is encrypted for additional security

## Project Structure

```text
src/
├── controllers/
│   └── users.controller.ts    # User-related route handlers
├── models/
│   └── user.model.ts         # User database model
├── helpers/
│   └── utils.ts             # Utility functions
├── constants/
│   └── excludeFields.ts     # Field exclusion constants
├── middleware/
│   └── auth.middleware.ts   # Authentication middleware
└── index.ts                 # Application entry point
```

## Error Handling

The API uses standard HTTP status codes:

| Status Code | Description      |
| ----------- | ---------------- |
| 200         | Success          |
| 201         | Resource Created |
| 400         | Bad Request      |
| 401         | Unauthorized     |
| 403         | Forbidden        |
| 404         | Not Found        |
| 500         | Server Error     |

Error Response Format:

```json
{
  "error": "Error message",
  "reason": "Detailed error reason"
}
```

## Security Features

### Password Security:

- Passwords are hashed using bcrypt
- Plain passwords are never stored

### Token Security:

- JWT tokens are encrypted
- Tokens include user payload
- Token verification on protected routes

### API Security:

- Input validation
- Protected routes with authentication
- Secure error messages
