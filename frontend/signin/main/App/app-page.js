let $ = document;
let More = $.getElementById('more');
let Back = $.getElementById('back');


More.addEventListener('click', () => {
    alert('برای خرید اشتراک دستگاه های کاستوم و پیشرقته تر(سپرده های بلند مدت با سود بیشتر) به ادمین تیکت ارسال کنید!')
})

Back.addEventListener('click', () => {
    window.location.href = '../main.html'
})