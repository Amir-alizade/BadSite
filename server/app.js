const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");


require("./config/db");


const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

 
const app = express();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(
    session({
        secret: "Safkari_Secret_Key",
        resave: false,
        saveUninitialized: false,

        // فعلاً برای پروژه فعلی مناسب است
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);


app.use(
    express.static(
        path.join(__dirname, "../frontend")
    )
);


app.use("/api", authRoutes);


app.use("/api/admin", adminRoutes);


app.get("/api/test", (req, res) => {

    res.json({
        success: true,
        message: "Server is working."
    });

});


module.exports = app;

// const express = require("express");
// const session = require("express-session");
// const cors = require("cors");
// const path = require("path");

// // اتصال به دیتابیس
// require("./config/db");

// // Route ها
// const authRoutes = require("./routes/auth");
// const adminRoutes = require("./routes/admin");

// const app = express();

// // Middleware ها
// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(
//     session({
//         secret: "Safkari_Secret_Key",
//         resave: false,
//         saveUninitialized: false,
//     })
// );

// // پوشه اصلی سایت (index.html و فایل‌های فرانت)
// app.use(express.static(path.join(__dirname, "../frontend")));

// // API ها
// app.use("/api", authRoutes);

// module.exports = app;