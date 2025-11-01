let $ = document;
let Btn = $.getElementById('btn');
let UserName = $.getElementById('UserName');
let Password = $.getElementById('Password');
let AcceptCode = $.getElementById('acceptCode');

// اعتبارسنجی نام کاربری
UserName.addEventListener('keyup', () => {
  if (UserName.value.trim().length < 4) {
    UserName.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
  } else {
    UserName.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
  }
});

// اعتبارسنجی رمز عبور
Password.addEventListener('keyup', () => {
  if (Password.value.trim().length < 6) {
    Password.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
  } else {
    Password.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
  }
});

// اعتبارسنجی کد تایید
AcceptCode.addEventListener('keyup', () => {
  if (AcceptCode.value.trim() !== '7388') {
    AcceptCode.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
  } else {
    AcceptCode.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
  }
});

// ارسال فرم ورود
Btn.addEventListener('click', async (event) => {
  event.preventDefault();

  if (
    UserName.value.trim().length < 4 ||
    Password.value.trim().length < 6 ||
    AcceptCode.value.trim() !== '7388'
  ) {
    alert('لطفاً اطلاعات را به‌درستی وارد کنید');
    return;
  }

  const payload = {
    username: UserName.value.trim(),
    password: Password.value.trim()
  };

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    if (data.message.includes('success')) {
      window.location.href = 'main/main.html';
    }
  } catch (err) {
    alert('خطا در اتصال به سرور');
  }
});