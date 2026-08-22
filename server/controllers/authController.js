const db = require("../config/db");
const bcrypt = require("bcrypt");

// ==========================================
// سیستم سود روزانه 2.5 درصد
// ==========================================

function updateDailyProfit(userId, callback) {
  db.get(
    `SELECT wallet, last_profit_at
         FROM users
         WHERE id = ?`,

    [userId],

    (err, user) => {
      // خطای دیتابیس
      if (err) {
        return callback(err);
      }

      // کاربر پیدا نشد
      if (!user) {
        return callback(null);
      }

      const now = Date.now();

      const lastProfitTime = new Date(user.last_profit_at).getTime();

      // 24 ساعت به میلی‌ثانیه
      const ONE_DAY = 24 * 60 * 60 * 1000;

      // چند روز کامل گذشته؟
      const completedDays = Math.floor((now - lastProfitTime) / ONE_DAY);

      // هنوز 24 ساعت کامل نشده
      if (completedDays <= 0) {
        return callback(null);
      }

      let wallet = Number(user.wallet) || 0;

      // برای هر 24 ساعت، 2.5 درصد سود
      for (let i = 0; i < completedDays; i++) {
        wallet = wallet + wallet * 0.025;
      }

      // زمان آخرین سود
      const newProfitTime = new Date(
        lastProfitTime + completedDays * ONE_DAY,
      ).toISOString();

      // ذخیره موجودی جدید در دیتابیس
      db.run(
        `UPDATE users
                 SET wallet = ?,
                     last_profit_at = ?
                 WHERE id = ?`,

        [wallet, newProfitTime, userId],

        (updateErr) => {
          if (updateErr) {
            return callback(updateErr);
          }

          callback(null);
        },
      );
    },
  );
}

// =======================
// ساخت کد اختصاصی
// =======================
function generateCode(length = 11) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

// =======================
// Register
// =======================
exports.register = async (req, res) => {
  try {
    const {
      username,

      password,

      phone,

      inviteCode,
    } = req.body;

    if (!username || !password || !phone) {
      return res.status(400).json({
        success: false,

        message: "تمام فیلدها الزامی هستند.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCode = generateCode();

    const myInviteCode = generateCode();

    // زمان شروع محاسبه سود روزانه
    const lastProfitAt = new Date().toISOString();

    // =======================
    // بررسی کد دعوت
    // =======================

    let validInviteCode = "";

    if (inviteCode && inviteCode.trim() !== "") {
      const inviter = await new Promise((resolve, reject) => {
        db.get(
          `SELECT id, my_invite_code
             FROM users
             WHERE my_invite_code = ?`,
          [inviteCode.trim()],
          (err, user) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(user);
          },
        );
      });

      // اگر کد دعوت معتبر بود ذخیره می‌کنیم
      if (inviter) {
        validInviteCode = inviter.my_invite_code;
      }
    }

    ///////////////////////////////////////////////////////

    db.run(
      `INSERT INTO users
            (
                user_code,
                username,
                password,
                phone,
                invite_code,
                my_invite_code,
                last_profit_at
            )
            VALUES (?,?,?,?,?,?,?)`,

      [
        userCode,

        username,

        hashedPassword,

        phone,

        validInviteCode,
        // inviteCode || "",

        myInviteCode,

        lastProfitAt
      ],

      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE")) {
            return res.status(409).json({
              success: false,

              message: "نام کاربری یا شماره موبایل تکراری است.",
            });
          }

          return res.status(500).json({
            success: false,

            message: err.message,
          });
        }

        // ورود خودکار بعد از ثبت نام
        req.session.user = {
          id: this.lastID,
        };

        return res.json({
          success: true,

          message: "ثبت نام با موفقیت انجام شد.",

          user: {
            id: this.lastID,

            username,

            phone,

            user_code: userCode,

            my_invite_code: myInviteCode,

            wallet: 0,

            role: "user",
          },
        });
      },
    );
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,

      message: "خطای داخلی سرور",
    });
  }
};

// =======================
// Login
// =======================
exports.login = (req, res) => {
  const {
    username,

    password,
  } = req.body;

  db.get(
    "SELECT * FROM users WHERE username=?",

    [username],

    async (err, user) => {
      if (err) {
        return res.status(500).json({
          success: false,

          message: err.message,
        });
      }

      if (!user) {
        return res.status(401).json({
          success: false,

          message: "نام کاربری یا رمز اشتباه است.",
        });
      }

      const ok = await bcrypt.compare(password, user.password);

      if (!ok) {
        return res.status(401).json({
          success: false,

          message: "نام کاربری یا رمز اشتباه است.",
        });
      }

      req.session.user = {
        id: user.id,

        username: user.username,

        role: user.role,
      };

      res.json({
        success: true,

        message: "ورود موفق بود.",

        user,
      });
    },
  );
};

// ================= LOGIN =================

// ==========================================
// دریافت اطلاعات پروفایل + محاسبه سود روزانه
// ==========================================

exports.profile = (req, res) => {
  // بررسی ورود کاربر
  if (!req.session.user) {
    return res.json({
      success: false,
      message: "ابتدا وارد شوید.",
    });
  }

  // شناسه کاربر فعلی
  const userId = req.session.user.id;

  // اول سود روزانه را بررسی و ذخیره می‌کنیم
  updateDailyProfit(userId, (profitErr) => {
    // اگر محاسبه سود خطا داد
    if (profitErr) {
      console.error("Daily profit error:", profitErr.message);

      return res.status(500).json({
        success: false,
        message: "خطا در محاسبه سود روزانه",
      });
    }

    // بعد از محاسبه سود،
    // اطلاعات جدید کاربر را از دیتابیس می‌گیریم
    db.get(
      `SELECT
                id,
                username,
                phone,
                wallet,
                role,
                user_code,
                my_invite_code,
                created_at
            FROM users
            WHERE id = ?`,

      [userId],

      (err, user) => {
        // خطای دیتابیس
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        // کاربر پیدا نشد
        if (!user) {
          return res.json({
            success: false,
            message: "کاربر پیدا نشد.",
          });
        }

        // ارسال اطلاعات کاربر
        return res.json({
          success: true,

          user: user,
        });
      },
    );
  });
};

exports.login = (req, res) => {
  const { username, userCode } = req.body;

  if (!username || !userCode) {
    return res.json({
      success: false,

      message: "اطلاعات ناقص است.",
    });
  }

  db.get(
    `SELECT * FROM users
         WHERE username = ?
         AND user_code = ?`,

    [username, userCode],

    (err, user) => {
      if (err) {
        return res.json({
          success: false,

          message: err.message,
        });
      }

      if (!user) {
        return res.json({
          success: false,

          message: "نام کاربری یا کد اختصاصی اشتباه است.",
        });
      }

      // ساخت سشن
      req.session.user = {
        id: user.id,

        username: user.username,

        role: user.role,
      };

      return res.json({
        success: true,

        message: "ورود با موفقیت انجام شد.",

        user: {
          id: user.id,

          username: user.username,

          phone: user.phone,

          wallet: user.wallet,

          user_code: user.user_code,

          my_invite_code: user.my_invite_code,

          role: user.role,
        },
      });
    },
  );
};

// ==========================
// دریافت اطلاعات پروفایل
// ==========================

// exports.profile = (req, res) => {
//   if (!req.session.user) {
//     return res.json({
//       success: false,
//       message: "ابتدا وارد شوید.",
//     });
//   }

//   db.get(
//     `SELECT
//             id,
//             username,
//             phone,
//             wallet,
//             role,
//             user_code,
//             my_invite_code
//         FROM users
//         WHERE id = ?`,

//     [req.session.user.id],

//     (err, user) => {
//       if (err) {
//         return res.json({
//           success: false,
//           message: err.message,
//         });
//       }

//       if (!user) {
//         return res.json({
//           success: false,
//           message: "کاربر پیدا نشد.",
//         });
//       }

//       res.json({
//         success: true,

//         user,
//       });
//     },
//   );
// };

// ==========================
// تعداد زیرمجموعه‌های کاربر
// ==========================

exports.inviteStats = (req, res) => {
  if (!req.session.user) {
    return res.json({
      success: false,
      message: "ابتدا وارد شوید.",
    });
  }

  db.get(
    `SELECT my_invite_code
         FROM users
         WHERE id = ?`,

    [req.session.user.id],

    (err, user) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (!user) {
        return res.json({
          success: false,
          message: "کاربر پیدا نشد.",
        });
      }

      db.get(
        `SELECT COUNT(*) AS total
                 FROM users
                 WHERE invite_code = ?`,

        [user.my_invite_code],

        (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          return res.json({
            success: true,

            inviteCode: user.my_invite_code,

            totalInvited: result.total,
          });
        },
      );
    },
  );
};
