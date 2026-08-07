const form = document.getElementById("registerForm");

const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const inviteCode = document.getElementById("inviteCode");

const usernameError = document.getElementById("userN");
const passwordError = document.getElementById("Pass");
const phoneError = document.getElementById("Phon");


// ==============================
// توابع کمکی
// ==============================

function setError(input, span, message) {

    input.style.borderBottom = "2px solid #ff3b30";
    span.style.display = "block";
    span.textContent = message;

}

function setSuccess(input, span) {

    input.style.borderBottom = "2px solid #22c55e";
    span.style.display = "none";

}


// ==============================
// اعتبارسنجی نام کاربری
// ==============================

username.addEventListener("input", () => {

    if (username.value.trim().length < 8) {

        setError(
            username,
            usernameError,
            "نام کاربری باید حداقل 8 کاراکتر باشد."
        );

    } else {

        setSuccess(username, usernameError);

    }

});


// ==============================
// اعتبارسنجی رمز
// ==============================

password.addEventListener("input", () => {

    if (password.value.trim().length < 8) {

        setError(
            password,
            passwordError,
            "رمز عبور باید حداقل 8 کاراکتر باشد."
        );

    } else {

        setSuccess(password, passwordError);

    }

});


// ==============================
// اعتبارسنجی شماره
// ==============================

phone.addEventListener("input", () => {

    phone.value = phone.value.replace(/\D/g, "");

    const valid = /^09\d{9}$/.test(phone.value);

    if (!valid) {

        setError(
            phone,
            phoneError,
            "شماره موبایل معتبر نیست."
        );

    } else {

        setSuccess(phone, phoneError);

    }

});


// ==============================
// ثبت نام
// ==============================

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    const inviteValue = inviteCode.value.trim();

    if (usernameValue.length < 8) {

        username.focus();

        return alert("نام کاربری معتبر نیست.");

    }

    if (passwordValue.length < 8) {

        password.focus();

        return alert("رمز عبور معتبر نیست.");

    }

    if (!/^09\d{9}$/.test(phoneValue)) {

        phone.focus();

        return alert("شماره موبایل معتبر نیست.");

    }

    const payload = {

        username: usernameValue,

        password: passwordValue,

        phone: phoneValue,

        inviteCode: inviteValue

    };

    try {

        const response = await fetch("/api/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(payload)

        });

        const data = await response.json();

        if (!response.ok) {

            return alert(data.message);

        }

        alert(data.message);

        form.reset();

        username.style.borderBottom = "";
        password.style.borderBottom = "";
        phone.style.borderBottom = "";

        window.location.href = "signin/main/prophile/prophile.html";

    }

    catch (error) {

        console.error(error);

        alert("ارتباط با سرور برقرار نشد.");

    }

});