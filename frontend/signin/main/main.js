let $ = document;
let NotifIcone = $.getElementById("Notif");
let Languege = $.getElementById("Languege");
let Homeinheader = $.getElementById("Home");
let Backup = $.getElementById("Backup");
let More = $.getElementById("More");
let Proph = $.getElementById("Proph");
let Apps = $.getElementById("Apps");
let addFriends = $.getElementById("add-friends");
let giveMoney = $.getElementById("giveMoney");
let sendMoney = $.getElementById("sendMoney");
let userOption = $.getElementById("userOption");
let vip_1 = $.getElementById("VIP-1");
let vip_2 = $.getElementById("VIP-2");
let vip_3 = $.getElementById("VIP-3");
let totalApps = $.getElementById("totalApps");
let historyMoney = $.getElementById("givMoney");
let add_Friends = $.getElementById("add-friends");
let Help = $.getElementById("help");


Backup.addEventListener('click', () => {
    window.location.href = 'history/company-history.html'
});

Help.addEventListener('click', () => {
  alert('دوستان عزیزی که ثبت نام میکنید به قسمت پروفایل برید و قسمت بالا نوشته شده نام کابری و کد اختصاصی شما 7KPGC3EB9KV \n این شکلی هست این کد اختصاصی شما برای ورود دوباره هست و شما این کد رو باید کپی کنید و به همراه نام کاربری خود برای ورود استفاده کنیدوقتی یک بار ثبت نام کردید با این کد اختصاصی و نام کاربری به بخش از قبل حساب دارم وارد بشید نام کاربری و کد اختصاصی خود را وارد کنید و وارد سایت بشید در قسمت پرداخت هر مبلغی که میخواهید سرمایه گذاری کنید رو انتخاب کنید و به ادرس کیف پول واریز کنید و اسکرین شات بگیرید و داخل تلگرام به این ایدی \n @GREENSMAART \n بفرستید تایید و کیف پول سرمایه گذاری شما شارژ خواهد شد');
});
add_Friends.addEventListener('click', () => {
  window.location.href = 'Prophile/prophile.html'
});

historyMoney.addEventListener('click', () => {
  alert('درآمد روزانه خود را مشاهده کنید');
  window.location.href = 'Prophile/prophile.html'
});
totalApps.addEventListener('click', () => {
  window.location.href = 'App/app-page.html'
});

giveMoney.addEventListener('click', () => {
  alert('دوستان جهت سرمایه گذاری روی خانه های کپسولی  به بخش لیست خانه های کپسولی مراجعه کنید')
})

vip_1.addEventListener('click', () => {
  alert('درخواست خرید کپسول VIP-1 رو داده اید با موفقیت ثبت شد \n مدل دستگاه : VIP-1 \n شماره دستگاه : a1:b1:c1:d1\|gsh11223 \n قیمت دستگاه : 5.000.00 USDT \n \n لطفا در زمان پرداخت دقت کنید که مبلغ دستگاه را به درستی پرداخت کنید و بعد به ادمین رسید خود را ارسال کنید و تایید شود \n این پروسه 1 ساعت الی 2 ساعت زمان میبرد.');
  window.location.href = 'Prophile/meno_1/BYPLAN.html'
})

vip_2.addEventListener('click', () => {
  alert('درخواست خرید کپسول VIP-2 رو داده اید با موفقیت ثبت شد \n مدل دستگاه : VIP-2 \n شماره دستگاه : a2:b2:c2:d2/\GSH33 \n قیمت دستگاه : 4.000.00 USDT \n \n لطفا در زمان پرداخت دقت کنید که مبلغ دستگاه را به درستی پرداخت کنید و بعد به ادمین رسید خود را ارسال کنید و تایید شود \n این پروسه 1 ساعت الی 2 ساعت زمان میبرد.');
  window.location.href = 'Prophile/meno_1/BYPLAN.html'
})

vip_3.addEventListener('click', () => {
  alert('درخواست خرید کپسول VIP-3 رو داده اید با موفقیت ثبت شد \n مدل دستگاه : VIP-3 \n شماره دستگاه : a3:b3:c3:d3/ABCD1234 \n قیمت دستگاه : 3.000.00 USDT \n \n لطفا در زمان پرداخت دقت کنید که مبلغ دستگاه را به درستی پرداخت کنید و بعد به ادمین رسید خود را ارسال کنید و تایید شود \n این پروسه 1 ساعت الی 2 ساعت زمان میبرد.');
  window.location.href = 'Prophile/meno_1/BYPLAN.html'
})

sendMoney.addEventListener('click', () => {
  alert('جهت برداشت سرمایه گذاری خود لینک کیف پول و مبلغ برداشتی خود را به این ایدی در تلگرام بفرستید تا مبلغ تتر به کیف پول شما اضافه شوجهت برداشت سرمایه گذاری خود بعد از 30 روز لینک کیف پول و مبلغ برداشتی خود را به این ایدی در تلگرام بفرستید تا مبلغ تتر به کیف پول شما اضافه شود \n\n @GREENSMAART');
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


// ========================================
// PROFESSIONAL IMAGE SLIDER
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".image-1.slider");

    // اگر اسلایدر در این صفحه وجود نداشت
    // هیچ کاری با بقیه کدهای سایت نکن
    if (!slider) return;


    const slides = slider.querySelectorAll(".slide-1img");
    const dots = slider.querySelectorAll(".dot");

    const prevButton = slider.querySelector(".slider-btn.prev");
    const nextButton = slider.querySelector(".slider-btn.next");


    // اگر اسلایدی وجود نداشت
    if (!slides.length) return;


    let currentIndex = 0;

    let autoPlay = null;

    const AUTO_PLAY_TIME = 4500;


    // ========================================
    // نمایش اسلاید
    // ========================================

    function showSlide(index) {

        // جلوگیری از خارج شدن index
        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentIndex = index;


        // اسلایدها
        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentIndex
            );

        });


        // نقطه‌ها
        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentIndex
            );

        });

    }


    // ========================================
    // اسلاید بعدی
    // ========================================

    function nextSlide() {

        showSlide(currentIndex + 1);

    }


    // ========================================
    // اسلاید قبلی
    // ========================================

    function previousSlide() {

        showSlide(currentIndex - 1);

    }


    // ========================================
    // شروع پخش خودکار
    // ========================================

    function startAutoPlay() {

        stopAutoPlay();

        autoPlay = setInterval(() => {

            nextSlide();

        }, AUTO_PLAY_TIME);

    }


    // ========================================
    // توقف پخش خودکار
    // ========================================

    function stopAutoPlay() {

        if (autoPlay !== null) {

            clearInterval(autoPlay);

            autoPlay = null;

        }

    }


    // ========================================
    // ریست تایمر
    // ========================================

    function resetAutoPlay() {

        stopAutoPlay();

        startAutoPlay();

    }


    // ========================================
    // دکمه قبلی
    // ========================================

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            previousSlide();

            resetAutoPlay();

        });

    }


    // ========================================
    // دکمه بعدی
    // ========================================

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            nextSlide();

            resetAutoPlay();

        });

    }


    // ========================================
    // کلیک روی نقطه‌ها
    // ========================================

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            resetAutoPlay();

        });

    });


    // ========================================
    // توقف هنگام قرار گرفتن موس
    // ========================================

    slider.addEventListener("mouseenter", () => {

        stopAutoPlay();

    });


    // ========================================
    // ادامه بعد از خارج شدن موس
    // ========================================

    slider.addEventListener("mouseleave", () => {

        startAutoPlay();

    });


    // ========================================
    // پشتیبانی از لمس موبایل
    // ========================================

    let touchStartX = 0;

    let touchEndX = 0;


    slider.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

            stopAutoPlay();

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

            startAutoPlay();

        },
        { passive: true }
    );


    function handleSwipe() {

        const difference =
            touchStartX - touchEndX;


        // حداقل مقدار حرکت انگشت
        const SWIPE_THRESHOLD = 50;


        // کشیدن به چپ
        if (difference > SWIPE_THRESHOLD) {

            nextSlide();

        }


        // کشیدن به راست
        else if (difference < -SWIPE_THRESHOLD) {

            previousSlide();

        }

    }


    // ========================================
    // جلوگیری از انتخاب ناخواسته عکس
    // ========================================

    slides.forEach((slide) => {

        slide.setAttribute(
            "draggable",
            "false"
        );

    });


    // ========================================
    // شروع اسلایدر
    // ========================================

    showSlide(0);

    startAutoPlay();

});


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





// =========================================
// تایمر 30 روزه قرعه کشی
// =========================================

const lotteryEndKey = "greensmart_lottery_end";

let lotteryEndTime = localStorage.getItem(lotteryEndKey);


// اگر قبلاً زمان ساخته نشده
if (!lotteryEndTime) {

    lotteryEndTime =
        Date.now() + (30 * 24 * 60 * 60 * 1000);

    localStorage.setItem(
        lotteryEndKey,
        lotteryEndTime
    );
}


function updateLotteryTimer() {

    const now = Date.now();

    let remaining =
        Number(lotteryEndTime) - now;


    // =====================================
    // پایان تایمر
    // =====================================

    if (remaining <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        const finished =
            document.getElementById("lottery-finished");

        if (finished) {
            finished.style.display = "block";
        }

        return;
    }


    // =====================================
    // محاسبه زمان
    // =====================================

    const totalSeconds =
        Math.floor(remaining / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    // =====================================
    // نمایش
    // =====================================

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// اجرای اولیه
updateLotteryTimer();


// بروزرسانی هر ثانیه
setInterval(updateLotteryTimer, 1000);