# Node.js Backend API

A modern Node.js backend API with Express.js, featuring user authentication and CRUD operations.

## Features

- Express.js server with middleware setup
- User authentication (register/login)
- User CRUD operations
- Error handling
- Environment configuration
- Security headers with Helmet
- CORS enabled
- Request logging with Morgan

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB (for database operations)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nodejs-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- POST `/api/users` - Create new user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

## Testing

Run tests:
```bash
npm test
```

## Linting

Run linter:
```bash
npm run lint
```

## Building

Build the application:
```bash
npm run build
```

## License

MIT 