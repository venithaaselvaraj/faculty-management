# Faculty Management System

A full-stack application for managing departments and faculties using:

- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB

## Setup Instructions

### Backend
```bash
cd backend
npm install
cp .env.example .env
node server.js
```

### Frontend
Use your own React frontend or build one that interacts with these APIs.

## API Endpoints

- `GET /api/departments`
- `POST /api/departments`
- `PUT /api/departments/:id`
- `GET /api/faculties`
- `POST /api/faculties`
- `PUT /api/faculties/:id`
