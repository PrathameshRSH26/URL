# 🔗 URL Shortener API

A scalable URL shortener backend built with Node.js, Express, PostgreSQL, and Drizzle ORM.  
This project mimics core features of Bitly, including authentication, URL shortening, and analytics-ready structure.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🔗 Shorten long URLs
- 📊 Track user-specific URLs
- 🔄 Redirect short URLs
- 🗑️ Delete URLs (authorized)
- 🐳 Dockerized PostgreSQL setup
- ⚡ Fast development with pnpm

---

## 🧰 Tech Stack

| Category        | Technology                     | Purpose                                  |
|----------------|------------------------------|------------------------------------------|
| Backend        | Node.js + Express             | REST API development                     |
| Database       | PostgreSQL                    | Relational database                      |
| ORM            | Drizzle ORM                   | Type-safe queries & schema               |
| Container      | Docker + Docker Compose       | Local DB setup                           |
| Auth           | JWT                           | Secure authentication                    |
| Package Manager| pnpm                          | Fast dependency management               |

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)
- pnpm
- Docker Desktop
- Postman (optional for testing)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Install dependencies (pnpm)

```bash
pnpm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:admin@localhost:5432/postgres
JWT_SECRET=your_secret_key
```

---

## 🐳 Run PostgreSQL with Docker

```bash
docker compose up -d
```

---

## 🗄️ Database Setup (Drizzle)

### Push schema

```bash
pnpm db:push
```

### Open Drizzle Studio

```bash
pnpm db:studio
```

---

## ▶️ Run the Server

```bash
pnpm dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🔐 Auth Routes

| Method | Endpoint  | Description              | Auth Required |
|--------|----------|--------------------------|--------------|
| POST   | /signup  | Register new user        | ❌           |
| POST   | /login   | Login & receive token    | ❌           |

---

## 🔗 URL Routes

| Method | Endpoint      | Description                               | Auth Required |
|--------|--------------|-------------------------------------------|--------------|
| POST   | /shorten     | Create short URL                          | ✅           |
| GET    | /:shortCode  | Redirect to original URL                  | ❌           |
| GET    | /urls        | Get all URLs of logged-in user            | ✅           |
| DELETE | /urls/:id    | Delete URL (if owned by user)             | ✅           |

---

## 📁 Project Structure

```
URL/
│── db/
│── models/
│   ├── user.model.js
│   └── index.js
│── drizzle/
│── index.js
│── drizzle.config.js
│── docker-compose.yml
│── .env
│── package.json
```

---

## 📜 Scripts

```json
"scripts": {
  "dev": "node --watch index",
  "db:push": "drizzle-kit push",
  "db:studio": "drizzle-kit studio"
}
```

---

## 🧠 Key Learnings

- Dockerized database setup
- Schema management with Drizzle ORM
- REST API design with Express
- Authentication using JWT
- Clean project structure for backend apps

---

## 📌 Future Improvements

- 📊 Click analytics
- 🌍 Custom domains
- 📈 Rate limiting
- 🧪 Unit & integration tests
- ☁️ Deployment (AWS / Vercel / Railway)

---

## ⭐ Show your support

Give a ⭐ if you like this project!
