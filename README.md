# Ecole Globale International Girls' School Website

A professional full-stack redesign concept for Ecole Globale International Girls' School, built with React, Node, Express, and MySQL. It follows the official site identity and assignment goal: improve SEO, page speed, structure, admissions clarity, and parent experience.

## Project Structure

```text
school-website/
  backend/
    config/
      db.js
      localStore.js
      schema.sql
    controllers/
    middleware/
    routes/
    server.js
    package.json
  frontend/
    public/
    src/
      components/
      context/
      pages/
      services/
    package.json
  package.json
```

## Run Locally

Install backend dependencies:

```cmd
cd school-website\backend
npm install
```

Install frontend dependencies:

```cmd
cd school-website\frontend
npm install
```

Start the backend:

```cmd
cd school-website\backend
npm start
```

Start the frontend:

```cmd
cd school-website\frontend
npm start
```

Frontend: `http://localhost:3000`
Backend: `http://localhost:5000`

## Database

For MySQL, create the database using:

```sql
source C:/path/to/school-website/backend/config/schema.sql
```

Then update `backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=school_website
DB_PORT=3306
JWT_SECRET=change_this_secret
```

If MySQL is not available, the public admissions and contact forms still work. The backend saves submissions to local JSON files inside `backend/data/`.

## Assignment Report

Read `INTERNSHIP_SUBMISSION_REPORT.md` for the SEO and page-speed audit requested in the internship assignment.

## Main Pages

| Page | URL |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Academics | `/academics` |
| Admissions | `/admissions` |
| News | `/news` |
| Contact | `/contact` |

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/admissions` | Submit an admission inquiry |
| POST | `/api/contact` | Submit a contact message |
| GET | `/api/news` | List news |
| GET | `/api/faculty` | List faculty |
| GET | `/api/testimonials` | List testimonials |
| POST | `/api/auth/login` | Admin login |

## Build

```cmd
cd school-website\frontend
npm run build
```

The production build is created in `frontend/build/`.
