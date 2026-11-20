# Deepadharshini V – MERN Portfolio

Personal portfolio built with **MongoDB, Express, React (Vite) and Node.js**.

- Profile, skills, projects, internships, education, certifications are stored in **MongoDB** and served by the **Express API**.
- Contact form messages are saved to MongoDB.
- In production, Express also serves the built React app, so the whole site deploys as **one service**.

## Folder structure

```
portfolio-mern/
├── package.json          # root scripts (build / start / seed)
├── render.yaml           # one-click Render deploy
├── server/               # Express + Mongoose API
│   ├── index.js
│   ├── seed.js           # loads data/profile.js into MongoDB
│   ├── data/profile.js   # <- edit your details here
│   ├── models/ (Profile.js, Message.js)
│   └── routes/ (profile.js, contact.js)
└── client/               # React (Vite) frontend
    ├── public/profile.jpg               # <- put your photo here
    ├── public/Deepadharshini_Trainer.pdf
    └── src/ (App.jsx, api.js, index.css, components/*)
```

## API

| Method | Route | Description |
|---|---|---|
| GET | `/api/profile` | Get portfolio data |
| PUT | `/api/profile` | Update portfolio data (header `x-admin-key: <ADMIN_KEY>`) |
| POST | `/api/contact` | Send a contact message `{ name, email, message }` |
| GET | `/api/contact` | List messages (header `x-admin-key: <ADMIN_KEY>`) |

## Run locally

Requirements: Node.js 18+, MongoDB (local or a free MongoDB Atlas cluster).

```bash
# 1. install
npm run install-all

# 2. configure the backend
cp server/.env.example server/.env   # then edit MONGO_URI if needed

# 3. load your data into MongoDB
npm run seed

# 4. start backend (port 5000) and frontend (port 5173) in two terminals
npm run dev --prefix server
npm run dev --prefix client
```

Open http://localhost:5173

## Add your photo

Save your photo as `client/public/profile.jpg` (square image works best, e.g. 600×600).
Until then, the site shows your initials.

## Deploy (free)

### 1. MongoDB Atlas (database)
1. Create a free account at https://www.mongodb.com/cloud/atlas and create a free **M0** cluster.
2. *Database Access* → add a user + password.
3. *Network Access* → allow `0.0.0.0/0`.
4. *Connect → Drivers* → copy the connection string, e.g.
   `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/portfolio`
5. Seed it once from your computer:
   ```bash
   MONGO_URI="<your atlas uri>" npm run seed --prefix server
   ```

### 2. Render (backend + frontend in one service)
1. Push this folder to a GitHub repo.
2. On https://render.com → *New* → *Blueprint* → select the repo (uses `render.yaml`).
   Or *New Web Service* with:
   - Build command: `npm run build`
   - Start command: `npm start`
3. Add environment variable `MONGO_URI` = your Atlas connection string.
4. Deploy. Your portfolio will be live at `https://<your-service>.onrender.com`.

### Alternative: Vercel (frontend) + Render (backend)
- Render: root directory `server`, build `npm install`, start `npm start`, env `MONGO_URI`, `CLIENT_URL=https://<your-site>.vercel.app`.
- Vercel: root directory `client`, framework Vite, env `VITE_API_URL=https://<your-api>.onrender.com`.
