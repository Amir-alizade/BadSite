let $ = document;
let NotifIcone = $.getElementById('Notif');
let Languege = $.getElementById('Languege');
let Homeinheader = $.getElementById('Home');
let More = $.getElementById('More');
let Proph = $.getElementById('Proph');




More.addEventListener('click', () => {
    alert('صفحه دستگاه ها هنوز تکمیل نشده به زودی آماده خواهد شد🤞🏻');
})

Homeinheader.addEventListener('click', (event) => {
    location.reload();
})

Languege.addEventListener('click', (event) => {
    alert("این قسمت نیاز به تهیه ترنسلیت دارد تا تکمیل شود!!")
})

NotifIcone.addEventListener('click', (event) => {
    alert("notif is on!!")
})

Proph.addEventListener('click', () => {
    window.location.href = 'Prophile/prophile.html'
})