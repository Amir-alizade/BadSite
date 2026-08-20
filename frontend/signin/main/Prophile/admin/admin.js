// const $ = document;


// const backBtn = $.getElementById("backBtn");

// const totalUsers = $.getElementById("totalUsers");
// const totalWallet = $.getElementById("totalWallet");
// const activeUsers = $.getElementById("activeUsers");

// const searchInput = $.getElementById("searchInput");
// const searchBtn = $.getElementById("searchBtn");

// const emptyState = $.getElementById("emptyState");
// const userPanel = $.getElementById("userPanel");

// const userName = $.getElementById("userName");
// const userRole = $.getElementById("userRole");
// const userId = $.getElementById("userId");
// const userCode = $.getElementById("userCode");
// const userPhone = $.getElementById("userPhone");
// const userInviteCode = $.getElementById("userInviteCode");
// const userWallet = $.getElementById("userWallet");

// const walletAmount = $.getElementById("walletAmount");

// const addWalletBtn = $.getElementById("addWalletBtn");
// const subtractWalletBtn = $.getElementById("subtractWalletBtn");

// const refreshUserBtn = $.getElementById("refreshUserBtn");
// const deleteUserBtn = $.getElementById("deleteUserBtn");

// const usersTable = $.getElementById("usersTable");

// const loading = $.getElementById("loading");


// // کاربر انتخاب شده
// let selectedUserId = null;



// // =====================================================
// // Loading
// // =====================================================

// function showLoading() {

//     loading.classList.remove("hidden");

// }

// function hideLoading() {

//     loading.classList.add("hidden");

// }



// // =====================================================
// // درخواست API
// // =====================================================

// async function api(url, options = {}) {

//     const response = await fetch(url, {
//         credentials: "include",
//         ...options,
//         headers: {
//             "Content-Type": "application/json",
//             ...(options.headers || {})
//         }
//     });

//     const data = await response.json();

//     if (!response.ok || data.success === false) {

//         throw new Error(
//             data.message || "خطا در ارتباط با سرور"
//         );

//     }

//     return data;

// }



// // =====================================================
// // فرمت موجودی
// // =====================================================

// function formatWallet(value) {

//     return Number(value || 0).toLocaleString("en-US") + " USDT";

// }



// // =====================================================
// // دریافت آمار
// // =====================================================

// async function loadStats() {

//     try {

//         const data = await api("/api/admin/stats");

//         totalUsers.textContent =
//             Number(data.stats.totalUsers).toLocaleString("fa-IR");

//         totalWallet.textContent =
//             formatWallet(data.stats.totalWallet);

//         activeUsers.textContent =
//             Number(data.stats.activeUsers).toLocaleString("fa-IR");

//     }
//     catch (err) {

//         console.error(err);

//         alert(err.message);

//     }

// }



// // =====================================================
// // دریافت کاربران
// // =====================================================

// async function loadUsers() {

//     try {

//         const data = await api("/api/admin/users");

//         renderUsers(data.users);

//     }
//     catch (err) {

//         console.error(err);

//         usersTable.innerHTML = `
//             <tr>
//                 <td colspan="6">
//                     خطا در دریافت کاربران
//                 </td>
//             </tr>
//         `;

//     }

// }



// // =====================================================
// // ساخت جدول کاربران
// // =====================================================

// function renderUsers(users) {

//     if (!users.length) {

//         usersTable.innerHTML = `
//             <tr>
//                 <td colspan="6">
//                     هنوز کاربری ثبت نشده است.
//                 </td>
//             </tr>
//         `;

//         return;

//     }

//     usersTable.innerHTML = "";

//     users.forEach(user => {

//         const tr = document.createElement("tr");

//         tr.innerHTML = `

//             <td>${user.id}</td>

//             <td>${escapeHTML(user.username)}</td>

//             <td>${escapeHTML(user.user_code || "---")}</td>

//             <td>${escapeHTML(user.phone || "---")}</td>

//             <td>${formatWallet(user.wallet)}</td>

//             <td>

//                 <button
//                     class="view-user-btn"
//                     data-id="${user.id}">
//                     مشاهده
//                 </button>

//             </td>

//         `;

//         usersTable.appendChild(tr);

//     });

//     document
//         .querySelectorAll(".view-user-btn")
//         .forEach(button => {

//             button.addEventListener("click", () => {

//                 loadUser(button.dataset.id);

//             });

//         });

// }



// // =====================================================
// // جلوگیری از HTML Injection
// // =====================================================

// function escapeHTML(value) {

//     return String(value ?? "")
//         .replaceAll("&", "&amp;")
//         .replaceAll("<", "&lt;")
//         .replaceAll(">", "&gt;")
//         .replaceAll('"', "&quot;")
//         .replaceAll("'", "&#039;");

// }



// // =====================================================
// // دریافت کاربر
// // =====================================================

// async function loadUser(id) {

//     try {

//         showLoading();

//         const data =
//             await api(`/api/admin/users/${id}`);

//         selectedUserId = data.user.id;

//         showUser(data.user);

//     }
//     catch (err) {

//         console.error(err);

//         alert(err.message);

//     }
//     finally {

//         hideLoading();

//     }

// }



// // =====================================================
// // نمایش اطلاعات کاربر
// // =====================================================

// function showUser(user) {

//     emptyState.classList.add("hidden");

//     userPanel.classList.remove("hidden");

//     userName.textContent =
//         user.username || "---";

//     userRole.textContent =
//         user.role === "admin"
//             ? "مدیر سیستم"
//             : "کاربر";

//     userId.textContent =
//         user.id ?? "---";

//     userCode.textContent =
//         user.user_code || "---";

//     userPhone.textContent =
//         user.phone || "---";

//     userInviteCode.textContent =
//         user.my_invite_code || "---";

//     userWallet.textContent =
//         formatWallet(user.wallet);

// }



// // =====================================================
// // جستجو
// // =====================================================

// async function searchUser() {

//     const q = searchInput.value.trim();

//     if (!q) {

//         alert("عبارت جستجو را وارد کنید.");

//         return;

//     }

//     try {

//         showLoading();

//         const data =
//             await api(
//                 `/api/admin/users/search?q=${encodeURIComponent(q)}`
//             );

//         showUser(data.user);

//         selectedUserId = data.user.id;

//     }
//     catch (err) {

//         alert(err.message);

//     }
//     finally {

//         hideLoading();

//     }

// }



// // =====================================================
// // تغییر موجودی
// // =====================================================

// async function changeWallet(type) {

//     if (!selectedUserId) {

//         alert("ابتدا یک کاربر را انتخاب کنید.");

//         return;

//     }

//     const amount =
//         Number(walletAmount.value);

//     if (!Number.isFinite(amount) || amount <= 0) {

//         alert("مبلغ معتبر وارد کنید.");

//         return;

//     }

//     const confirmed =
//         confirm(
//             type === "add"
//                 ? `آیا ${amount} USDT به موجودی اضافه شود؟`
//                 : `آیا ${amount} USDT از موجودی کم شود؟`
//         );

//     if (!confirmed) return;

//     try {

//         showLoading();

//         const url =
//             type === "add"
//                 ? `/api/admin/users/${selectedUserId}/wallet/add`
//                 : `/api/admin/users/${selectedUserId}/wallet/subtract`;

//         const data = await api(url, {

//             method: "POST",

//             body: JSON.stringify({
//                 amount
//             })

//         });

//         showUser(data.user);

//         walletAmount.value = "";

//         await loadStats();

//         alert(data.message);

//     }
//     catch (err) {

//         console.error(err);

//         alert(err.message);

//     }
//     finally {

//         hideLoading();

//     }

// }



// // =====================================================
// // حذف کاربر
// // =====================================================

// async function deleteUser() {

//     if (!selectedUserId) {

//         alert("ابتدا یک کاربر را انتخاب کنید.");

//         return;

//     }

//     const confirmed =
//         confirm(
//             "آیا از حذف این کاربر مطمئن هستید؟"
//         );

//     if (!confirmed) return;

//     try {

//         showLoading();

//         const data =
//             await api(
//                 `/api/admin/users/${selectedUserId}`,
//                 {
//                     method: "DELETE"
//                 }
//             );

//         alert(data.message);

//         selectedUserId = null;

//         userPanel.classList.add("hidden");
//         emptyState.classList.remove("hidden");

//         await loadStats();
//         await loadUsers();

//     }
//     catch (err) {

//         console.error(err);

//         alert(err.message);

//     }
//     finally {

//         hideLoading();

//     }

// }



// // =====================================================
// // بروزرسانی کاربر
// // =====================================================

// async function refreshUser() {

//     if (!selectedUserId) {

//         alert("ابتدا یک کاربر را انتخاب کنید.");

//         return;

//     }

//     await loadUser(selectedUserId);

// }



// // =====================================================
// // دکمه‌ها
// // =====================================================

// searchBtn.addEventListener(
//     "click",
//     searchUser
// );


// searchInput.addEventListener(
//     "keydown",
//     event => {

//         if (event.key === "Enter") {

//             searchUser();

//         }

//     }
// );


// addWalletBtn.addEventListener(
//     "click",
//     () => changeWallet("add")
// );


// subtractWalletBtn.addEventListener(
//     "click",
//     () => changeWallet("subtract")
// );


// refreshUserBtn.addEventListener(
//     "click",
//     refreshUser
// );


// deleteUserBtn.addEventListener(
//     "click",
//     deleteUser
// );


// backBtn.addEventListener(
//     "click",
//     () => {

//         window.location.href =
//             "../Prophile/prophile.html";

//     }
// );



// // =====================================================
// // شروع پنل
// // =====================================================

// async function initAdminPanel() {

//     try {

//         showLoading();

//         await loadStats();

//         await loadUsers();

//     }
//     catch (err) {

//         console.error(err);

//     }
//     finally {

//         hideLoading();

//     }

// }


// initAdminPanel();
const $ = document;


// ==========================================
// عناصر
// ==========================================

const backBtn = $.getElementById("backBtn");

const totalUsers = $.getElementById("totalUsers");
const totalWallet = $.getElementById("totalWallet");
const activeUsers = $.getElementById("activeUsers");

const searchInput = $.getElementById("searchInput");
const searchBtn = $.getElementById("searchBtn");

const emptyState = $.getElementById("emptyState");
const userPanel = $.getElementById("userPanel");

const userName = $.getElementById("userName");
const userRole = $.getElementById("userRole");
const userId = $.getElementById("userId");
const userCode = $.getElementById("userCode");
const userPhone = $.getElementById("userPhone");
const userInviteCode = $.getElementById("userInviteCode");
const userWallet = $.getElementById("userWallet");

const walletAmount = $.getElementById("walletAmount");

const addWalletBtn = $.getElementById("addWalletBtn");
const subtractWalletBtn = $.getElementById("subtractWalletBtn");

const refreshUserBtn = $.getElementById("refreshUserBtn");
const deleteUserBtn = $.getElementById("deleteUserBtn");

const usersTable = $.getElementById("usersTable");

const loading = $.getElementById("loading");


// کاربر انتخاب شده
let selectedUser = null;


// ==========================================
// Loading
// ==========================================

function showLoading() {

    loading.classList.remove("hidden");

}

function hideLoading() {

    loading.classList.add("hidden");

}


// ==========================================
// فرمت موجودی
// ==========================================

function formatWallet(value) {

    return Number(value || 0).toLocaleString("en-US") + " USDT";

}


// ==========================================
// دریافت آمار
// ==========================================

async function loadStats() {

    try {

        const response = await fetch("/api/admin/stats");

        const data = await response.json();

        if (!data.success) {

            throw new Error(data.message);

        }

        totalUsers.textContent =
            data.stats.totalUsers;

        totalWallet.textContent =
            formatWallet(data.stats.totalWallet);

        activeUsers.textContent =
            data.stats.activeUsers;

    }

    catch (err) {

        console.error("Stats Error:", err);

    }

}


// ==========================================
// دریافت کاربران
// ==========================================

async function loadUsers() {

    try {

        const response = await fetch("/api/admin/users");

        const data = await response.json();

        if (!data.success) {

            throw new Error(data.message);

        }

        usersTable.innerHTML = "";

        if (!data.users.length) {

            usersTable.innerHTML = `
                <tr>
                    <td colspan="6">
                        هنوز کاربری ثبت نشده است.
                    </td>
                </tr>
            `;

            return;

        }


        data.users.forEach(user => {

            const row = document.createElement("tr");

            row.innerHTML = `

                <td>${user.id}</td>

                <td>${user.username}</td>

                <td>${user.user_code || "---"}</td>

                <td>${user.phone || "---"}</td>

                <td>${formatWallet(user.wallet)}</td>

                <td>

                    <button
                        class="select-user-btn"
                        data-id="${user.id}">
                        مشاهده
                    </button>

                </td>

            `;

            usersTable.appendChild(row);

        });


        // دکمه های مشاهده

        document
            .querySelectorAll(".select-user-btn")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const id = Number(button.dataset.id);

                    const user = data.users.find(
                        item => item.id === id
                    );

                    if (user) {

                        showUser(user);

                    }

                });

            });

    }

    catch (err) {

        console.error("Users Error:", err);

        usersTable.innerHTML = `
            <tr>
                <td colspan="6">
                    خطا در دریافت کاربران
                </td>
            </tr>
        `;

    }

}


// ==========================================
// نمایش کاربر
// ==========================================

function showUser(user) {

    selectedUser = user;

    emptyState.classList.add("hidden");

    userPanel.classList.remove("hidden");


    userName.textContent =
        user.username || "---";

    userRole.textContent =
        user.role === "admin"
            ? "مدیر سیستم"
            : "کاربر";


    userId.textContent =
        user.id || "---";

    userCode.textContent =
        user.user_code || "---";

    userPhone.textContent =
        user.phone || "---";

    userInviteCode.textContent =
        user.my_invite_code || "---";

    userWallet.textContent =
        formatWallet(user.wallet);


    walletAmount.value = "";

}


// ==========================================
// جستجوی کاربر
// ==========================================

async function searchUser() {

    const query =
        searchInput.value.trim();


    if (!query) {

        alert("عبارت جستجو را وارد کنید.");

        return;

    }


    try {

        showLoading();


        const response = await fetch(
            "/api/admin/search?q=" +
            encodeURIComponent(query)
        );


        const data = await response.json();


        if (!data.success) {

            alert(data.message);

            return;

        }


        showUser(data.user);

    }

    catch (err) {

        console.error(err);

        alert("خطا در جستجوی کاربر.");

    }

    finally {

        hideLoading();

    }

}


// ==========================================
// تغییر موجودی
// ==========================================

async function changeWallet(type) {

    if (!selectedUser) {

        alert("ابتدا یک کاربر را انتخاب کنید.");

        return;

    }


    const amount =
        Number(walletAmount.value);


    if (!amount || amount <= 0) {

        alert("مبلغ معتبر وارد کنید.");

        return;

    }


    try {

        showLoading();


        const endpoint =
            type === "add"
                ? "/api/admin/wallet/add"
                : "/api/admin/wallet/subtract";


        const response = await fetch(endpoint, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                userId: selectedUser.id,

                amount

            })

        });


        const data =
            await response.json();


        if (!data.success) {

            alert(data.message);

            return;

        }


        alert(data.message);


        showUser(data.user);


        walletAmount.value = "";


        // بروزرسانی آمار

        await loadStats();

        await loadUsers();

    }

    catch (err) {

        console.error(err);

        alert("خطا در تغییر موجودی.");

    }

    finally {

        hideLoading();

    }

}


// ==========================================
// حذف کاربر
// ==========================================

async function deleteUser() {

    if (!selectedUser) {

        alert("ابتدا یک کاربر را انتخاب کنید.");

        return;

    }


    const confirmed =
        confirm(
            `آیا مطمئن هستید که کاربر "${selectedUser.username}" حذف شود؟`
        );


    if (!confirmed) {

        return;

    }


    try {

        showLoading();


        const response = await fetch(
            `/api/admin/users/${selectedUser.id}`,
            {
                method: "DELETE"
            }
        );


        const data =
            await response.json();


        if (!data.success) {

            alert(data.message);

            return;

        }


        alert(data.message);


        selectedUser = null;


        userPanel.classList.add("hidden");

        emptyState.classList.remove("hidden");


        await loadStats();

        await loadUsers();

    }

    catch (err) {

        console.error(err);

        alert("خطا در حذف کاربر.");

    }

    finally {

        hideLoading();

    }

}


// ==========================================
// بروزرسانی کاربر
// ==========================================

async function refreshUser() {

    if (!selectedUser) {

        alert("ابتدا یک کاربر را انتخاب کنید.");

        return;

    }


    try {

        showLoading();


        const response = await fetch(
            "/api/admin/search?q=" +
            encodeURIComponent(selectedUser.user_code)
        );


        const data =
            await response.json();


        if (!data.success) {

            alert(data.message);

            return;

        }


        showUser(data.user);

    }

    catch (err) {

        console.error(err);

        alert("خطا در بروزرسانی اطلاعات.");

    }

    finally {

        hideLoading();

    }

}


// ==========================================
// بازگشت
// ==========================================

backBtn.addEventListener("click", () => {

    window.location.href =
        "../prophile.html";

});


// ==========================================
// Search
// ==========================================

searchBtn.addEventListener(
    "click",
    searchUser
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            searchUser();

        }

    }
);


// ==========================================
// Wallet
// ==========================================

addWalletBtn.addEventListener(
    "click",
    () => changeWallet("add")
);


subtractWalletBtn.addEventListener(
    "click",
    () => changeWallet("subtract")
);


// ==========================================
// Refresh
// ==========================================

refreshUserBtn.addEventListener(
    "click",
    refreshUser
);


// ==========================================
// Delete
// ==========================================

deleteUserBtn.addEventListener(
    "click",
    deleteUser
);


// ==========================================
// شروع پنل
// ==========================================

loadStats();

loadUsers();