const db = require("../config/db");
const bcrypt = require("bcrypt");

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
                my_invite_code
            )
            VALUES (?,?,?,?,?,?)`,

      [
        userCode,

        username,

        hashedPassword,

        phone,

        validInviteCode,
        // inviteCode || "",

        myInviteCode,
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

exports.profile = (req, res) => {
  if (!req.session.user) {
    return res.json({
      success: false,
      message: "ابتدا وارد شوید.",
    });
  }

  db.get(
    `SELECT
            id,
            username,
            phone,
            wallet,
            role,
            user_code,
            my_invite_code
        FROM users
        WHERE id = ?`,

    [req.session.user.id],

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
          message: "کاربر پیدا نشد.",
        });
      }

      res.json({
        success: true,

        user,
      });
    },
  );
};


// ==========================
// تعداد زیرمجموعه‌های کاربر
// ==========================

exports.inviteStats = (req, res) => {

    if (!req.session.user) {

        return res.json({
            success: false,
            message: "ابتدا وارد شوید."
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
                    message: err.message
                });

            }

            if (!user) {

                return res.json({
                    success: false,
                    message: "کاربر پیدا نشد."
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
                            message: err.message
                        });

                    }

                    return res.json({

                        success: true,

                        inviteCode: user.my_invite_code,

                        totalInvited: result.total

                    });

                }

            );

        }

    );

};