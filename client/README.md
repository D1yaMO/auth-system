# Authentication & User Management System

A full-stack authentication system built from scratch using Node.js, Express, PostgreSQL, JWT, and React.

## Features
- User registration with bcrypt password hashing
- Login with JWT token authentication
- Protected routes with middleware
- Role-based access control (admin vs user)
- Forgot password with email reset link (Mailtrap)
- Animated React frontend with glassmorphism UI

## Tech Stack
**Backend:** Node.js, Express, PostgreSQL, JWT, Bcrypt, Nodemailer  
**Frontend:** React, Vite, Axios, React Router

## Setup

### Backend
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file based on `.env.example`
4. Run `npm run dev`

### Frontend
1. `cd client`
2. Run `npm install`
3. Run `npm run dev`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/profile | Get profile (protected) |
| GET | /api/auth/admin | Admin only route |
| POST | /api/auth/forgot-password | Send reset email |
| POST | /api/auth/reset-password | Reset password |