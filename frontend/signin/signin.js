const $ = document;

const btn = $.getElementById("btn");

const username = $.getElementById("UserName");
const userCode = $.getElementById("UserCode");

const userError = $.getElementById("userError");
const codeError = $.getElementById("codeError");


// -------------------------
// اعتبارسنجی نام کاربری
// -------------------------

username.addEventListener("input", () => {

    if (username.value.trim().length < 8) {

        userError.style.display = "block";

        username.style.borderBottom = "1px solid red";

    } else {

        userError.style.display = "none";

        username.style.borderBottom = "1px solid #00ff88";

    }

});


// -------------------------
// اعتبارسنجی کد اختصاصی
// -------------------------

userCode.addEventListener("input", () => {

    if (userCode.value.trim().length !== 11) {

        codeError.style.display = "block";

        userCode.style.borderBottom = "1px solid red";

    } else {

        codeError.style.display = "none";

        userCode.style.borderBottom = "1px solid #00ff88";

    }

});


// -------------------------
// ورود
// -------------------------

btn.addEventListener("click", async (event) => {

    event.preventDefault();

    if (username.value.trim().length < 8) {

        alert("نام کاربری معتبر نیست.");

        return;

    }

    if (userCode.value.trim().length !== 11) {

        alert("کد اختصاصی معتبر نیست.");

        return;

    }

    const payload = {

        username: username.value.trim(),

        userCode: userCode.value.trim()

    };

    try {

        const response = await fetch("/api/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(payload)

        });

        const data = await response.json();

        if (!data.success) {

            alert(data.message);

            return;

        }

        alert("خوش آمدید 😊");

        localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = "main/main.html";

    }

    catch (err) {

        console.error(err);

        alert("ارتباط با سرور برقرار نشد.");

    }

});