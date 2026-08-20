// const db = require("../config/db");


// =====================================================
// بررسی ادمین
// =====================================================

// function checkAdmin(req, res) {

//     if (!req.session || !req.session.user) {

//         res.status(401).json({
//             success: false,
//             message: "ابتدا وارد حساب شوید."
//         });

//         return false;
//     }

//     if (req.session.user.role !== "admin") {

//         res.status(403).json({
//             success: false,
//             message: "دسترسی غیرمجاز."
//         });

//         return false;
//     }

//     return true;
// }



// =====================================================
// آمار پنل
// =====================================================

// exports.getStats = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     db.get(
//         `
//         SELECT
//             COUNT(*) AS totalUsers,
//             COALESCE(SUM(wallet), 0) AS totalWallet,
//             COUNT(*) AS activeUsers
//         FROM users
//         `,
//         [],
//         (err, result) => {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در دریافت آمار."
//                 });
//             }

//             res.json({
//                 success: true,
//                 stats: {
//                     totalUsers: result.totalUsers,
//                     totalWallet: result.totalWallet,
//                     activeUsers: result.activeUsers
//                 }
//             });

//         }
//     );
// };



// // =====================================================
// // دریافت آخرین کاربران
// // =====================================================

// exports.getUsers = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     db.all(
//         `
//         SELECT
//             id,
//             username,
//             user_code,
//             phone,
//             wallet,
//             role,
//             created_at
//         FROM users
//         ORDER BY id DESC
//         LIMIT 50
//         `,
//         [],
//         (err, users) => {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در دریافت کاربران."
//                 });
//             }

//             res.json({
//                 success: true,
//                 users
//             });

//         }
//     );
// };



// // =====================================================
// // جستجوی کاربر
// // =====================================================

// exports.searchUser = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     const q = String(req.query.q || "").trim();

//     if (!q) {

//         return res.status(400).json({
//             success: false,
//             message: "عبارت جستجو را وارد کنید."
//         });
//     }

//     db.get(
//         `
//         SELECT
//             id,
//             username,
//             user_code,
//             phone,
//             invite_code,
//             my_invite_code,
//             wallet,
//             role,
//             created_at
//         FROM users
//         WHERE
//             username = ?
//             OR phone = ?
//             OR user_code = ?
//         LIMIT 1
//         `,
//         [q, q, q],
//         (err, user) => {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در جستجوی کاربر."
//                 });
//             }

//             if (!user) {

//                 return res.status(404).json({
//                     success: false,
//                     message: "کاربر پیدا نشد."
//                 });
//             }

//             res.json({
//                 success: true,
//                 user
//             });

//         }
//     );
// };



// // =====================================================
// // دریافت یک کاربر
// // =====================================================

// exports.getUser = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     const id = Number(req.params.id);

//     if (!Number.isInteger(id)) {

//         return res.status(400).json({
//             success: false,
//             message: "شناسه کاربر نامعتبر است."
//         });
//     }

//     db.get(
//         `
//         SELECT
//             id,
//             username,
//             user_code,
//             phone,
//             invite_code,
//             my_invite_code,
//             wallet,
//             role,
//             created_at
//         FROM users
//         WHERE id = ?
//         `,
//         [id],
//         (err, user) => {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در دریافت کاربر."
//                 });
//             }

//             if (!user) {

//                 return res.status(404).json({
//                     success: false,
//                     message: "کاربر پیدا نشد."
//                 });
//             }

//             res.json({
//                 success: true,
//                 user
//             });

//         }
//     );
// };



// // =====================================================
// // افزایش موجودی
// // =====================================================

// exports.addWallet = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     const id = Number(req.params.id);
//     const amount = Number(req.body.amount);

//     if (!Number.isInteger(id)) {

//         return res.status(400).json({
//             success: false,
//             message: "شناسه کاربر نامعتبر است."
//         });
//     }

//     if (!Number.isFinite(amount) || amount <= 0) {

//         return res.status(400).json({
//             success: false,
//             message: "مبلغ نامعتبر است."
//         });
//     }

//     db.run(
//         `
//         UPDATE users
//         SET wallet = wallet + ?
//         WHERE id = ?
//         `,
//         [amount, id],
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

//             db.get(
//                 `
//                 SELECT
//                     id,
//                     username,
//                     wallet
//                 FROM users
//                 WHERE id = ?
//                 `,
//                 [id],
//                 (err, user) => {

//                     if (err) {

//                         return res.status(500).json({
//                             success: false,
//                             message: "موجودی تغییر کرد اما دریافت اطلاعات با خطا مواجه شد."
//                         });
//                     }

//                     res.json({
//                         success: true,
//                         message: "موجودی با موفقیت افزایش یافت.",
//                         user
//                     });

//                 }
//             );

//         }
//     );
// };



// // =====================================================
// // کاهش موجودی
// // =====================================================

// exports.subtractWallet = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     const id = Number(req.params.id);
//     const amount = Number(req.body.amount);

//     if (!Number.isInteger(id)) {

//         return res.status(400).json({
//             success: false,
//             message: "شناسه کاربر نامعتبر است."
//         });
//     }

//     if (!Number.isFinite(amount) || amount <= 0) {

//         return res.status(400).json({
//             success: false,
//             message: "مبلغ نامعتبر است."
//         });
//     }

//     db.run(
//         `
//         UPDATE users
//         SET wallet = wallet - ?
//         WHERE id = ?
//         AND wallet >= ?
//         `,
//         [amount, id, amount],
//         function (err) {

//             if (err) {

//                 console.error(err);

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در کاهش موجودی."
//                 });
//             }

//             if (this.changes === 0) {

//                 return res.status(400).json({
//                     success: false,
//                     message: "کاربر پیدا نشد یا موجودی کافی نیست."
//                 });
//             }

//             db.get(
//                 `
//                 SELECT
//                     id,
//                     username,
//                     wallet
//                 FROM users
//                 WHERE id = ?
//                 `,
//                 [id],
//                 (err, user) => {

//                     if (err) {

//                         return res.status(500).json({
//                             success: false,
//                             message: "موجودی تغییر کرد اما دریافت اطلاعات با خطا مواجه شد."
//                         });
//                     }

//                     res.json({
//                         success: true,
//                         message: "موجودی با موفقیت کاهش یافت.",
//                         user
//                     });

//                 }
//             );

//         }
//     );
// };



// // =====================================================
// // حذف کاربر
// // =====================================================

// exports.deleteUser = (req, res) => {

//     if (!checkAdmin(req, res)) return;

//     const id = Number(req.params.id);

//     if (!Number.isInteger(id)) {

//         return res.status(400).json({
//             success: false,
//             message: "شناسه کاربر نامعتبر است."
//         });
//     }

//     // جلوگیری از حذف ادمین
//     db.get(
//         "SELECT role FROM users WHERE id = ?",
//         [id],
//         (err, user) => {

//             if (err) {

//                 return res.status(500).json({
//                     success: false,
//                     message: "خطا در بررسی کاربر."
//                 });
//             }

//             if (!user) {

//                 return res.status(404).json({
//                     success: false,
//                     message: "کاربر پیدا نشد."
//                 });
//             }

//             if (user.role === "admin") {

//                 return res.status(403).json({
//                     success: false,
//                     message: "حساب مدیر قابل حذف نیست."
//                 });
//             }

//             db.run(
//                 "DELETE FROM users WHERE id = ?",
//                 [id],
//                 function (err) {

//                     if (err) {

//                         console.error(err);

//                         return res.status(500).json({
//                             success: false,
//                             message: "خطا در حذف کاربر."
//                         });
//                     }

//                     res.json({
//                         success: true,
//                         message: "کاربر با موفقیت حذف شد."
//                     });

//                 }
//             );

//         }
//     );
// };



















const db = require("../config/db");

// ==========================================
// آمار کلی پنل
// ==========================================

exports.getStats = (req, res) => {

    db.get(
        `
        SELECT
            COUNT(*) AS totalUsers,
            COALESCE(SUM(wallet), 0) AS totalWallet
        FROM users
        `,
        [],
        (err, stats) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در دریافت آمار"
                });

            }

            res.json({
                success: true,
                stats: {
                    totalUsers: stats.totalUsers || 0,
                    totalWallet: stats.totalWallet || 0,

                    // فعلاً چون سیستم وضعیت active نداریم
                    activeUsers: stats.totalUsers || 0
                }
            });

        }
    );

};


// ==========================================
// آخرین کاربران
// ==========================================

exports.getUsers = (req, res) => {

    db.all(
        `
        SELECT
            id,
            username,
            user_code,
            phone,
            wallet,
            role,
            created_at
        FROM users
        ORDER BY id DESC
        LIMIT 100
        `,
        [],
        (err, users) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در دریافت کاربران"
                });

            }

            res.json({
                success: true,
                users
            });

        }
    );

};


// ==========================================
// جستجوی کاربر
// ==========================================

exports.searchUser = (req, res) => {

    const query = (req.query.q || "").trim();

    if (!query) {

        return res.status(400).json({
            success: false,
            message: "عبارت جستجو وارد نشده است."
        });

    }

    db.get(
        `
        SELECT
            id,
            username,
            user_code,
            phone,
            invite_code,
            my_invite_code,
            wallet,
            role,
            created_at
        FROM users
        WHERE
            username = ?
            OR user_code = ?
            OR phone = ?
        LIMIT 1
        `,
        [query, query, query],
        (err, user) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در جستجوی کاربر"
                });

            }

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: "کاربر پیدا نشد."
                });

            }

            res.json({
                success: true,
                user
            });

        }
    );

};


// ==========================================
// افزایش موجودی
// ==========================================

exports.addWallet = (req, res) => {

    const userId = Number(req.body.userId);
    const amount = Number(req.body.amount);

    if (!userId || !amount || amount <= 0) {

        return res.status(400).json({
            success: false,
            message: "مبلغ وارد شده معتبر نیست."
        });

    }

    db.run(
        `
        UPDATE users
        SET wallet = wallet + ?
        WHERE id = ?
        `,
        [amount, userId],
        function (err) {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در افزایش موجودی"
                });

            }

            if (this.changes === 0) {

                return res.status(404).json({
                    success: false,
                    message: "کاربر پیدا نشد."
                });

            }

            db.get(
                `
                SELECT
                    id,
                    username,
                    user_code,
                    phone,
                    wallet,
                    role
                FROM users
                WHERE id = ?
                `,
                [userId],
                (err, user) => {

                    if (err) {

                        return res.status(500).json({
                            success: false,
                            message: "موجودی تغییر کرد ولی دریافت اطلاعات کاربر ناموفق بود."
                        });

                    }

                    res.json({
                        success: true,
                        message: "موجودی با موفقیت افزایش یافت.",
                        user
                    });

                }
            );

        }
    );

};


// ==========================================
// کاهش موجودی
// ==========================================

exports.subtractWallet = (req, res) => {

    const userId = Number(req.body.userId);
    const amount = Number(req.body.amount);

    if (!userId || !amount || amount <= 0) {

        return res.status(400).json({
            success: false,
            message: "مبلغ وارد شده معتبر نیست."
        });

    }

    db.run(
        `
        UPDATE users
        SET wallet = wallet - ?
        WHERE id = ?
        AND wallet >= ?
        `,
        [amount, userId, amount],
        function (err) {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در کاهش موجودی"
                });

            }

            if (this.changes === 0) {

                return res.status(400).json({
                    success: false,
                    message: "موجودی کافی نیست یا کاربر پیدا نشد."
                });

            }

            db.get(
                `
                SELECT
                    id,
                    username,
                    user_code,
                    phone,
                    wallet,
                    role
                FROM users
                WHERE id = ?
                `,
                [userId],
                (err, user) => {

                    if (err) {

                        return res.status(500).json({
                            success: false,
                            message: "موجودی تغییر کرد ولی دریافت اطلاعات کاربر ناموفق بود."
                        });

                    }

                    res.json({
                        success: true,
                        message: "موجودی با موفقیت کاهش یافت.",
                        user
                    });

                }
            );

        }
    );

};


// ==========================================
// حذف کاربر
// ==========================================

exports.deleteUser = (req, res) => {

    const userId = Number(req.params.id);

    if (!userId) {

        return res.status(400).json({
            success: false,
            message: "شناسه کاربر معتبر نیست."
        });

    }

    db.run(
        `
        DELETE FROM users
        WHERE id = ?
        `,
        [userId],
        function (err) {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "خطا در حذف کاربر"
                });

            }

            if (this.changes === 0) {

                return res.status(404).json({
                    success: false,
                    message: "کاربر پیدا نشد."
                });

            }

            res.json({
                success: true,
                message: "کاربر با موفقیت حذف شد."
            });

        }
    );

};