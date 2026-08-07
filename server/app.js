const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");

// اتصال به دیتابیس
require("./config/db");

// Route ها
const authRoutes = require("./routes/auth");

const app = express();

// Middleware ها
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "Safkari_Secret_Key",
        resave: false,
        saveUninitialized: false,
    })
);

// پوشه اصلی سایت (index.html و فایل‌های فرانت)
app.use(express.static(path.join(__dirname, "../frontend")));

// API ها
app.use("/api", authRoutes);

module.exports = app;