let $ = document;
let Btn = $.getElementById('btn');

// Btn.addEventListener('click', () => {
//     window.location.href = 'main/main.html'
// })


document.getElementById('btn').addEventListener('click', async (event) => {
  event.preventDefault();

  const payload = {
    username: document.getElementById('UserName').value,
    password: document.getElementById('Password').value
  };

  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      alert(data.message);
      window.location.href = 'main/main.html';
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert('خطا در اتصال به سرور');
  }
});