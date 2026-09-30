# Rent Management Backend

Complete Express.js + MongoDB backend for a Rent Management application.

## Modules
- JWT authentication
- ADMIN / TENANT roles
- Admin dashboard
- Tenant creation and generated credentials
- Room CRUD and tenant assignment
- Aadhaar front/back uploads
- Rent generation, monthly generation, overdue handling and payments
- Electricity bill generation, approval/rejection and payments
- Tenant dashboard/profile
- Notifications
- Monthly reports

## Run
1. `npm install`
2. Copy `.env.example` to `.env`
3. Set `MONGO_URI` and `JWT_SECRET`
4. `npm run dev`

API: `http://localhost:5000`
Health: `GET /api/health`

Use `Authorization: Bearer <token>` for protected routes.
