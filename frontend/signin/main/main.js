let $ = document;
let NotifIcone = $.getElementById("Notif");
let Languege = $.getElementById("Languege");
let Homeinheader = $.getElementById("Home");
let More = $.getElementById("More");
let Proph = $.getElementById("Proph");
let Apps = $.getElementById("Apps");
let addFriends = $.getElementById("add-friends");
let giveMoney = $.getElementById("giveMoney");
let sendMoney = $.getElementById("sendMoney");
let userOption = $.getElementById("userOption");

giveMoney.addEventListener('click', () => {
  alert('دوستان جهت سرمایه گذاری روی خانه های کپسولی  به بخش لیست خانه های کپسولی مراجعه کنید')
})

sendMoney.addEventListener('click', () => {
  alert('جهت برداشت سرمایه گذاری خود لینک کیف پول و مبلغ برداشتی خود را به این ایدی در تلگرام بفرستید تا مبلغ تتر به کیف پول شما اضافه شود \n @GREENSMAART');
})

userOption.addEventListener('click', () => {
  alert('خدمات مشتری \n سلام عزیزان \n  شما با سرمایه گذاری در شرکت GREENSMART روزانه 2.5٪ تا 5٪سود دریافت کنید \n و شما میتوانید با 10عضو دعوت از دوستان \n در قرعه کشی ماهیانه شرکت کنید');
})

More.addEventListener("click", () => {
  window.location.href = "App/app-page.html";
});

Homeinheader.addEventListener("click", (event) => {
  location.reload();
});

// Languege.addEventListener("click", (event) => {
//   alert("این قسمت نیاز به تهیه ترنسلیت دارد تا تکمیل شود!!");
// });

NotifIcone.addEventListener("click", (event) => {
  alert("notif is on!!");
});

Proph.addEventListener("click", () => {
  window.location.href = "Prophile/prophile.html";
});

Apps.addEventListener("click", () => {
  window.location.href = "App/app-page.html";
});

addFriends.addEventListener("click", () => {
  alert(
    "کد دعوتی که در قسمت پروفایل برای شما تعریف شده رابه دوستان خود ارسال کنید تا بتوانید در قرعه کشی و تخم مرغ های طلایی برای دریافت جایزه بهره مند شوید",
  );
});

// ==============================
// Image Slider
// ==============================

// const slides = document.querySelectorAll(".slide");

// let currentSlide = 0;

// function showSlide(index) {

//     slides.forEach((slide, i) => {

//         slide.classList.remove("active");

//         if (i === index) {
//             slide.classList.add("active");
//         }

//     });

// }

// function nextSlide() {

//     currentSlide++;

//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }

//     showSlide(currentSlide);

// }

// // نمایش عکس اول
// showSlide(currentSlide);

// // تعویض خودکار هر 4 ثانیه
// setInterval(() => {

//     nextSlide();

// }, 3000);

// ==============================
// IMAGE SLIDER
// ==============================

const slides = document.querySelectorAll("#slider .slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}


// شروع با اسلاید اول
showSlide(currentSlide);


// تعویض اسلاید
setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);