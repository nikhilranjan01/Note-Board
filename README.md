# 🗂️ Full Stack To-Do Web App

A full-stack task management (To-Do) web application where users can create boards and manage tasks within them.  
Built as part of a **Technical Assessment – Full Stack Developer**.

---

## 🚀 Features

### 🔐 Authentication
- User registration & login using email and password
- JWT-based authentication
- Protected routes (boards & todos accessible only after login)

### 📋 Boards
- Create boards
- View all boards
- Delete boards

### ✅ Todos
- Create todos inside boards
- View todos by board
- Delete todos
- Each todo shows **date & time of creation**

### 🎨 UI / UX
- Clean admin/SaaS-style UI
- Responsive layout
- Built using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📁 Project Structure
```
todo-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Board.js
│   │   └── Todo.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── boardRoutes.js
│   │   └── todoRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── BoardList.jsx
│   │   │   └── TodoList.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md

```
## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone <repository-url>
cd todo-app

2️⃣ Backend Setup
cd backend
npm install

Create .env file in backend/:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:
npm run dev

Backend runs at:
http://localhost:5000


3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173