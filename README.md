# PhysioAdi

Full-stack physiotherapy helper with guided exercise discovery, autoplaying demo videos, reminders, and patient auth.

## Features
- Interactive body selector with filters (type, difficulty) to surface targeted exercises.
- Exercise detail pages show sets/reps, pain level guidance, and looping autoplay demo videos from `client/public/videos/{exerciseId}.mp4`.
- Patient auth (register/login/logout) with JWT cookies and protected routes.
- Reminders with email notifications and a cron-based scheduler that runs every minute.
- Profile management and reminder CRUD with test-email support.

## Tech Stack
- **Client:** React 19, Vite, React Router, Redux Toolkit, Tailwind (v4), Radix UI, Sonner.
- **Server:** Node.js, Express, Mongoose, Nodemailer, node-cron, bcryptjs, JWT.
- **Database:** MongoDB.

## Getting Started
### Prerequisites
- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- SMTP credentials (Mailtrap works for dev)

### Installation
1) Install dependencies
```
cd client && npm install
cd ../server && npm install
```
2) Environment variables (create `server/.env`)
```
MONGO_URI=mongodb://localhost:27017/physioAdi
PORT=5000
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_smtp_user
EMAIL_PASSWORD=your_smtp_pass
# Optional: set and use in code instead of default
JWT_SECRET=change_me
CLIENT_URL=http://localhost:5173
```
3) Run the servers
- API: `cd server && npm run dev` (http://localhost:5000)
- Web: `cd client && npm run dev` (default http://localhost:5173)

## Usage
1) Register a patient, then log in (cookies carry auth).
2) Pick a pain area, apply filters, and view exercises; videos autoplay/loop and fall back to "Video coming soon" if missing.
3) Manage reminders (create/update/delete/test); emails send using your SMTP config. Scheduler checks every minute.
4) Profile page stores reminder and user data.

## API Overview
- Auth: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`.
- Profile: `GET /api/profile/me`, `PUT /api/profile/update` (see controllers for fields).
- Reminders: `GET /api/reminder`, `POST /api/reminder`, `PUT /api/reminder/:id`, `DELETE /api/reminder/:id`, `POST /api/reminder/test/:id`.

## Notes
- CORS is pinned to `http://localhost:5173`; adjust in `server/server.js` if your client runs elsewhere.
- Exercise videos must be named by `exercise.id` and placed under `client/public/videos/`.
- Scheduler starts after Mongo connects; keep the server process running to deliver reminders.
- Current JWT secret is hardcoded in code (`CLIENT_SECERT_KEY`); switch to `process.env.JWT_SECRET` for production.

## Scripts
- Client: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`
- Server: `npm run dev`

