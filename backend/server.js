require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

// Middlewares
app.use(express.json());

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://nikhilnotes.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Postman / mobile apps me origin null hota hai
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/boards", require("./routes/boardRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
