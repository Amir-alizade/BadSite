let $ = document;
let NotifIcone = $.getElementById("Notif");
let Languege = $.getElementById("Languege");
let Homeinheader = $.getElementById("Home");
let More = $.getElementById("More");
let Proph = $.getElementById("Proph");
let Apps = $.getElementById("Apps");
let addFriends = $.getElementById("add-friends");

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
