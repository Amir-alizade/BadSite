// const express = require("express");
// const router = express.Router();

// const db = require("../config/db");

// // ==========================================
// // بررسی اینکه کاربر ادمین است
// // ==========================================

// function checkAdmin(req, res, next) {

//     if (!req.session || !req.session.user) {

//         return res.status(401).json({
//             success: false,
//             message: "ابتدا وارد حساب شوید."
//         });

//     }

//     if (req.session.user.role !== "admin") {

//         return res.status(403).json({
//             success: false,
//             message: "دسترسی غیرمجاز."
//         });

//     }

//     next();
// }


// // ==========================================
// // پیدا کردن کاربر با کد اختصاصی
// // GET
// // /api/admin/user/ABC123
// // ==========================================

// router.get("/user/:userCode", checkAdmin, (req, res) => {

//     const userCode = req.params.userCode.trim();

//     if (!userCode) {

//         return res.status(400).json({
//             success: false,
//             message: "کد اختصاصی وارد نشده است."
//         });

//     }

//     db.get(
//         `
//         SELECT
//             id,
//             user_code,
//             username,
//             phone,
//             invite_code,
//             my_invite_code,
//             wallet,
//             role,
//             created_at
//         FROM users
//         WHERE user_code = ?
//         `,
//         [userCode],
//         (err, user) => {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در دریافت اطلاعات کاربر."
//                 });

//             }

//             if (!user) {

//                 return res.status(404).json({
//                     success: false,
//                     message: "کاربری با این کد پیدا نشد."
//                 });

//             }

//             return res.json({
//                 success: true,
//                 user
//             });

//         }
//     );

// });


// // ==========================================
// // افزایش موجودی کاربر
// // POST
// // /api/admin/user/wallet
// // ==========================================

// router.post("/user/wallet", checkAdmin, (req, res) => {

//     const {
//         userCode,
//         amount
//     } = req.body;


//     if (!userCode || amount === undefined) {

//         return res.status(400).json({
//             success: false,
//             message: "کد کاربر و مبلغ الزامی هستند."
//         });

//     }


//     const numericAmount = Number(amount);


//     if (!Number.isFinite(numericAmount) || numericAmount <= 0) {

//         return res.status(400).json({
//             success: false,
//             message: "مبلغ وارد شده معتبر نیست."
//         });

//     }


//     db.run(
//         `
//         UPDATE users
//         SET wallet = wallet + ?
//         WHERE user_code = ?
//         `,
//         [numericAmount, userCode.trim()],
//         function (err) {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در افزایش موجودی."
//                 });

//             }


//             if (this.changes === 0) {

//                 return res.status(404).json({
//                     success: false,
//                     message: "کاربر پیدا نشد."
//                 });

//             }


//             // دریافت موجودی جدید
//             db.get(
//                 `
//                 SELECT
//                     user_code,
//                     username,
//                     wallet
//                 FROM users
//                 WHERE user_code = ?
//                 `,
//                 [userCode.trim()],
//                 (err, user) => {

//                     if (err) {

//                         console.error(err);

//                         return res.status(500).json({
//                             success: false,
//                             message: "موجودی تغییر کرد اما دریافت اطلاعات جدید ناموفق بود."
//                         });

//                     }


//                     return res.json({

//                         success: true,

//                         message: "موجودی با موفقیت افزایش پیدا کرد.",

//                         user

//                     });

//                 }
//             );

//         }
//     );

// });


// module.exports = router;



const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");


// ==========================================
// آمار
// ==========================================

router.get(
    "/stats",
    adminController.getStats
);


// ==========================================
// لیست کاربران
// ==========================================

router.get(
    "/users",
    adminController.getUsers
);


// ==========================================
// جستجوی کاربر
// ==========================================

router.get(
    "/search",
    adminController.searchUser
);


// ==========================================
// افزایش موجودی
// ==========================================

router.post(
    "/wallet/add",
    adminController.addWallet
);


// ==========================================
// کاهش موجودی
// ==========================================

router.post(
    "/wallet/subtract",
    adminController.subtractWallet
);


// ==========================================
// حذف کاربر
// ==========================================

router.delete(
    "/users/:id",
    adminController.deleteUser
);


module.exports = router;