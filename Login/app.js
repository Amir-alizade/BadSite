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




UserName.addEventListener('keyup', (event) => {
    if (UserName.value.length < 8) {
        spanUserN.style.display = 'block'
        // UserName.style.border = '1px solid #ff0000ff'
        UserName.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
    } else {
        spanUserN.style.display = 'none'
        // UserName.style.border = '1px solid #1d9f00ff'
        UserName.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
    }
})

Password.addEventListener('keyup', (event) => {
    if (Password.value.length < 8) {
        spanPass.style.display = 'block'
        Password.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
    } else {
        spanPass.style.display = 'none'
        Password.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
    }
})

let phoneN = Number(PhonNumber.value)

PhonNumber.addEventListener('keyup', (event) => {
    if (PhonNumber.value.length < 11) {
        spanPhon.style.display = 'block'
        PhonNumber.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
    } else if (typeof phoneN === NaN) {
        spanPhon.style.display = 'block'
        PhonNumber.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
    } else {
        spanPhon.style.display = 'none'
        PhonNumber.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
    }
})

acceptCode.addEventListener('keyup', (Event) => {
    if (acceptCode.value == 7388) {
        spanAccept.style.display = 'none'
        acceptCode.style.borderBottom = '1px solid rgba(29, 159, 0, 1)';
    } else {
        spanAccept.style.display = 'block'
        acceptCode.style.borderBottom = '1px solid rgba(255, 0, 0, 1)';
    }
})

Inviting.addEventListener('keyup', (checking) => {
    spanInvit.style.display = 'block'
    setTimeout(() => {
    spanInvit.style.display = 'none'
    }, 4000);
})

button.addEventListener('click', (event) => {
    window.location.href = '../main/main.html'
})