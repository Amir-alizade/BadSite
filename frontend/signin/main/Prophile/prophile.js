// const $ = document;
// let Button = $.getElementById('Btn');
// let m_p = $.getElementById('Main-page');
// let AM = $.getElementById('AddMoney');
// let chargeBtn = $.getElementById('chargeBtn');
// let logoutBtn = $.getElementById('logoutBtn');
// let adminBtn = $.getElementById('adminBtn');

// console.log(Button);
// console.log(m_p);
// console.log(AM);
// console.log(chargeBtn);
// console.log(logoutBtn);
// console.log(adminBtn);


// chargeBtn.addEventListener('click', () => {
//     window.location.href = 'meno_1/meno-1.html'
// });
// logoutBtn.addEventListener('click', () => {
//     window.location.href = '../main.html'
// })

// adminBtn.addEventListener('click', () => {
//     alert('pleas wate...');
// });


// // AM.addEventListener('click', () => {
// //     window.location.href = 'meno_1/meno-1.html'
// // })

// //=============================
// // دریافت اطلاعات کاربر
// //=============================

// async function loadProfile() {

//     try {

//         const response = await fetch("/api/profile", {
//             credentials: "include"
//         });

//         const data = await response.json();

//         if (!data.success) {

//             alert("ابتدا وارد حساب شوید.");

//             window.location.href = "../signin/signin.html";

//             return;

//         }

//         const user = data.user;

//         document.getElementById("profileName").textContent =
//             user.username;

//         document.getElementById("profilePhone").textContent =
//             user.phone;

//         document.getElementById("profileWallet").textContent =
//             Number(user.wallet).toLocaleString("fa-IR") + " USDT";

//         document.getElementById("profileCode").textContent =
//             user.user_code;

//         document.getElementById("inviteCode").textContent =
//             user.my_invite_code;

//         document.getElementById("profileRole").textContent =
//             user.role === "admin"
//                 ? "مدیر سیستم"
//                 : "کاربر عادی";



//         // نمایش دکمه ادمین

//         const adminBtn =
//             document.getElementById("adminPanel");

//         if (user.role === "admin") {

//             adminBtn.style.display = "flex";

//         }

//     }

//     catch (err) {

//         console.error(err);

//         alert("خطا در دریافت اطلاعات کاربر");

//     }

// }

// loadProfile();



// // if(adminPanel){

// //     adminPanel.addEventListener("click",()=>{

// //         // window.location.href="../admin/admin.html";
// //         alert('pleas wate');

// //     });

// // }


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
                credentials: "include"
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

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

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
            credentials: "include"
        });

        if (!response.ok) {

            throw new Error(
                `Profile request failed: ${response.status}`
            );

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
        // اطلاعات کاربر
        // =============================

        const profileName =
            $.getElementById("profileName");

        const profilePhone =
            $.getElementById("profilePhone");

        const profileWallet =
            $.getElementById("profileWallet");

        const profileCode =
            $.getElementById("profileCode");

        const inviteCode =
            $.getElementById("inviteCode");

        const profileRole =
            $.getElementById("profileRole");


        if (profileName) {

            profileName.textContent =
                user.username || "---";

        }


        if (profilePhone) {

            profilePhone.textContent =
                user.phone || "---";

        }


        if (profileWallet) {

            profileWallet.textContent =
                Number(user.wallet || 0)
                    .toLocaleString("fa-IR") +
                " USDT";

        }


        if (profileCode) {

            profileCode.textContent =
                user.user_code || "---";

        }


        if (inviteCode) {

            inviteCode.textContent =
                user.my_invite_code || "---";

        }


        if (profileRole) {

            profileRole.textContent =
                user.role === "admin"
                    ? "مدیر سیستم"
                    : "کاربر عادی";

        }


        // =============================
        // پنل ادمین
        // =============================

        // if (adminBtn) {

        //     if (user.role === "admin") {

        //         adminBtn.style.display = "block";

        //     } else {

        //         adminBtn.style.display = "none";

        //     }

        // }

    }

    catch (error) {

        console.error(
            "Profile loading error:",
            error
        );

        alert("خطا در دریافت اطلاعات کاربر.");

    }

}


// =============================
// اجرای پروفایل
// =============================

loadProfile();