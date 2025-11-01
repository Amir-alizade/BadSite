let $ = document;
let spanUserN = $.getElementById('userN');
let UserName = $.getElementById('UserName');
let spanPass = $.getElementById('Pass');
let Password = $.getElementById('Password');
let spanPhon = $.getElementById('Phon');
let PhonNumber = $.getElementById('phoneNumber');
let spanAccept = $.getElementById('Accept');
let acceptCode = $.getElementById('acceptCode');
let spanInvit = $.getElementById('invit');
let Inviting = $.getElementById('invitingCode');
let button = $.getElementById('btn');

// اعتبارسنجی‌ها
UserName.addEventListener('keyup', () => {
  spanUserN.style.display = UserName.value.length < 8 ? 'block' : 'none';
  UserName.style.borderBottom = UserName.value.length < 8
    ? '1px solid rgba(255, 0, 0, 1)'
    : '1px solid rgba(29, 159, 0, 1)';
});

Password.addEventListener('keyup', () => {
  spanPass.style.display = Password.value.length < 8 ? 'block' : 'none';
  Password.style.borderBottom = Password.value.length < 8
    ? '1px solid rgba(255, 0, 0, 1)'
    : '1px solid rgba(29, 159, 0, 1)';
});

PhonNumber.addEventListener('keyup', () => {
  const phoneN = Number(PhonNumber.value);
  const isValid = PhonNumber.value.length === 11 && !isNaN(phoneN);
  spanPhon.style.display = isValid ? 'none' : 'block';
  PhonNumber.style.borderBottom = isValid
    ? '1px solid rgba(29, 159, 0, 1)'
    : '1px solid rgba(255, 0, 0, 1)';
});

acceptCode.addEventListener('keyup', () => {
  const isCorrect = acceptCode.value === '7388';
  spanAccept.style.display = isCorrect ? 'none' : 'block';
  acceptCode.style.borderBottom = isCorrect
    ? '1px solid rgba(29, 159, 0, 1)'
    : '1px solid rgba(255, 0, 0, 1)';
});

Inviting.addEventListener('keyup', () => {
  spanInvit.style.display = 'block';
  setTimeout(() => {
    spanInvit.style.display = 'none';
  }, 4000);
});

// ثبت‌نام
button.addEventListener('click', async (event) => {
  event.preventDefault();

  const payload = {
    username: UserName.value.trim(),
    password: Password.value.trim(),
    phone: PhonNumber.value.trim(),
    inviteCode: Inviting.value.trim()
  };

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    if (data.message.includes('success')) {
      window.location.href = 'signin/signin.html';
    }
  } catch (err) {
    alert('خطا در اتصال به سرور');
  }
});