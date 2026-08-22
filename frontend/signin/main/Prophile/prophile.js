const $ = document;

const Button = $.getElementById("Btn");
const mainPage = $.getElementById("Main-page");
const addMoney = $.getElementById("AddMoney");
const chargeBtn = $.getElementById("chargeBtn");
const logoutBtn = $.getElementById("logoutBtn");
const adminBtn = $.getElementById("adminBtn");

// =============================
// دکمه افزایش موجودی
// =============================

if (chargeBtn) {
  chargeBtn.addEventListener("click", () => {
    window.location.href = "meno_1/meno-1.html";
  });
}

// =============================
// خروج
// =============================

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    window.location.href = "../main.html";
  });
}

// =============================
// ورود به پنل مدیریت
// =============================

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "EZP3HKSEQR2";

adminBtn.addEventListener("click", () => {
  const username = prompt("نام کاربری مدیر را وارد کنید");

  if (username === null) return;

  const password = prompt("رمز عبور مدیر را وارد کنید");

  if (password === null) return;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    alert("خوش آمدید مدیر سیستم ✅");

    window.location.href = "admin/admin.html";
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است ❌");
  }
});

// =============================
// دریافت اطلاعات کاربر
// =============================

async function loadProfile() {
  try {
    const response = await fetch("/api/profile", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Profile request failed: ${response.status}`);
    }

    const data = await response.json();

    // =============================
    // بررسی ورود
    // =============================

    if (!data.success) {
      alert("ابتدا وارد حساب شوید.");

      window.location.href = "../../signin.html";

      return;
    }

    const user = data.user;

    console.log("Profile user:", user);

    // =============================
    // دریافت تعداد اعضای تیم
    // =============================

    const teamCount = $.getElementById("teamCount");

    if (teamCount) {
      try {
        const teamResponse = await fetch("/api/invite-stats", {
          credentials: "include",
        });

        const teamData = await teamResponse.json();

        if (teamData.success) {
          teamCount.textContent = Number(
            teamData.totalInvited || 0,
          ).toLocaleString("fa-IR");
        } else {
          teamCount.textContent = "۰";
        }
      } catch (teamError) {
        console.error("Team count loading error:", teamError);

        teamCount.textContent = "۰";
      }
    }

    // =============================
    // اطلاعات کاربر
    // =============================

    const profileName = $.getElementById("profileName");

    const profilePhone = $.getElementById("profilePhone");

    const profileWallet = $.getElementById("profileWallet");

    const profileCode = $.getElementById("profileCode");

    const inviteCode = $.getElementById("inviteCode");

    const profileRole = $.getElementById("profileRole");
    

    if (profileName) {
      profileName.textContent = user.username || "---";
    }

    if (profilePhone) {
      profilePhone.textContent = user.phone || "---";
    }

    if (profileWallet) {
      profileWallet.textContent =
        Number(user.wallet || 0).toLocaleString("fa-IR") + " USDT";
    }

    if (profileCode) {
      profileCode.textContent = user.user_code || "---";
    }

    if (inviteCode) {
      inviteCode.textContent = user.my_invite_code || "---";
    }

    if (profileRole) {
      profileRole.textContent =
        user.role === "admin" ? "مدیر سیستم" : "کاربر عادی";
    }
  } catch (error) {
    console.error("Profile loading error:", error);

    alert("خطا در دریافت اطلاعات کاربر.");
  }
}

// =============================
// اجرای پروفایل
// =============================

loadProfile();

// =============================
// سیستم لینک دعوت
// =============================

const inviteBtn = document.getElementById("inviteBtn");

if (inviteBtn) {
  inviteBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/profile", {
        credentials: "include",
      });

      const data = await response.json();

      if (!data.success) {
        alert("ابتدا وارد حساب شوید.");
        return;
      }

      const user = data.user;

      // کد دعوت اختصاصی کاربر
      const inviteCode = user.my_invite_code;

      if (!inviteCode) {
        alert("کد دعوت شما پیدا نشد.");
        return;
      }

      // ساخت لینک دعوت
      const inviteLink = `${window.location.origin}/?ref=${encodeURIComponent(inviteCode)}`;

      // کپی لینک
      try {
        await navigator.clipboard.writeText(inviteLink);

        alert("لینک دعوت شما کپی شد:\n\n" + inviteLink);
      } catch (copyError) {
        // اگر مرورگر اجازه کپی خودکار نداد
        prompt("لینک دعوت شما:", inviteLink);
      }
    } catch (error) {
      console.error("Invite Link Error:", error);

      alert("خطا در ساخت لینک دعوت.");
    }
  });
}
