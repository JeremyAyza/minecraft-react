<h1 align="center">🚀 Inventory Management System</h1>
<p align="center">Fullstack web application to manage inventory, users, and products with admin panel and secure authentication.</p>

<p align="center">
  <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-18-blue?logo=react" /></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript" /></a>
  <a href="https://tanstack.com/query"><img src="https://img.shields.io/badge/TanStack_Query-Data_Fetching-ff69b4" /></a>
  <a href="https://github.com/pmndrs/zustand"><img src="https://img.shields.io/badge/Zustand-State-yellowgreen" /></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite" /></a>
</p>

<p align="center">
  <a href="https://yourproject.vercel.app">🌐 Live Demo</a> •
  <a href="#-installation">⚙️ Installation</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">📦 Tech Stack</a>
</p>

---

## 📸 Demo

![demo](./screenshot.png) <!-- Replace with GIF or video if available -->

> Try the live version: [yourproject.vercel.app](https://yourproject.vercel.app)

---

### 📦 Tech Stack

| Technology        | Description                          |
|------------------|--------------------------------------|
| ![React](https://img.shields.io/badge/React-18-blue?logo=react) | Frontend library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript) | Static typing |
| ![Zustand](https://img.shields.io/badge/Zustand-State-yellowgreen) | Global state management |
| ![TanStack Query](https://img.shields.io/badge/TanStack_Query-ff69b4?logo=react-query) | Data fetching and caching |
| ![Vite](https://img.shields.io/badge/Vite-Build-purple?logo=vite) | Frontend build tool |
| ![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js) | Backend runtime |
| ![Express](https://img.shields.io/badge/Express-Server-lightgrey?logo=express) | REST API framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb) | NoSQL database |
| ![JWT](https://img.shields.io/badge/JWT-Authentication-blueviolet?logo=jwt) | Secure token-based auth |

---

### ✨ Features

- 🔐 JWT-based authentication and role management
- 🧑‍💼 Admin panel with protected routes
- 📦 Product, user and category CRUD operations
- 🔍 Dynamic filters with Zustand + localStorage
- ⚡ Fast API using Express.js + MongoDB
- 📊 Dashboard with KPIs and visual stats
- 🚀 Deployed frontend and backend with Vercel/Render/Railway

---

### 🎯 Learnings & Challenges

- [x] Integrated Zustand with persistent local storage for filters per page
- [x] Used TanStack Query with query keys and caching strategies
- [x] Built RESTful APIs with Express and connected to MongoDB Atlas
- [x] Refactored reusable components for filter forms and data tables
- [x] Deployed fullstack apps using Vercel and Render
---

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/inventory-system

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Run both (use turborepo, concurrently, or two terminals)
npm run dev
```

----

