const $ = document;
let Button = $.getElementById('Btn');
let m_p = $.getElementById('Main-page');
let AM = $.getElementById('AddMoney');
let chargeBtn = $.getElementById('chargeBtn');
let logoutBtn = $.getElementById('logoutBtn');
let adminBtn = $.getElementById('adminBtn');



chargeBtn.addEventListener('click', () => {
    window.location.href = 'meno_1/meno-1.html'
});
logoutBtn.addEventListener('click', () => {
    window.location.href = '../main.html'
})

adminBtn.addEventListener('click', () => {
    alert('pleas wate...');
});


// AM.addEventListener('click', () => {
//     window.location.href = 'meno_1/meno-1.html'
// })

//=============================
// دریافت اطلاعات کاربر
//=============================

async function loadProfile() {

    try {

        const response = await fetch("/api/profile", {
            credentials: "include"
        });

        const data = await response.json();

        if (!data.success) {

            alert("ابتدا وارد حساب شوید.");

            window.location.href = "../signin/signin.html";

            return;

        }

        const user = data.user;

        document.getElementById("profileName").textContent =
            user.username;

        document.getElementById("profilePhone").textContent =
            user.phone;

        document.getElementById("profileWallet").textContent =
            Number(user.wallet).toLocaleString("fa-IR") + " تومان";

        document.getElementById("profileCode").textContent =
            user.user_code;

        document.getElementById("inviteCode").textContent =
            user.my_invite_code;

        document.getElementById("profileRole").textContent =
            user.role === "admin"
                ? "مدیر سیستم"
                : "کاربر عادی";



        // نمایش دکمه ادمین

        const adminBtn =
            document.getElementById("adminPanel");

        if (user.role === "admin") {

            adminBtn.style.display = "flex";

        }

    }

    catch (err) {

        console.error(err);

        alert("خطا در دریافت اطلاعات کاربر");

    }

}

loadProfile();



// if(adminPanel){

//     adminPanel.addEventListener("click",()=>{

//         // window.location.href="../admin/admin.html";
//         alert('pleas wate');

//     });

// }