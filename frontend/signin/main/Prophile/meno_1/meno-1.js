let $ = document;
let Back = $.getElementById('back');
let cadr_1 = $.getElementById('cadr-1');
let cadr_2 = $.getElementById('cadr-2');
let BY = $.getElementById('By');

Back.addEventListener('click', () => {
    window.location.href = '../prophile.html'
})

cadr_1.addEventListener('click', () => {
    cadr_2.style.border = 'none'
    cadr_2.style.backgroundColor = '#d0d0d0db'
    cadr_1.style.backgroundColor = '#00ccff38'
    cadr_1.style.border = '1px solid rgb(0, 136, 255)'
})

cadr_2.addEventListener('click', () => {
    cadr_1.style.border = 'none'
    cadr_1.style.paddingTop = '0.7rem'
    cadr_1.style.backgroundColor = '#d0d0d0db'
    cadr_2.style.backgroundColor = '#00ccff38'
    cadr_2.style.border = '1px solid rgb(0, 136, 255)'
    
})


BY.addEventListener('click', () => {
    window.location.href = 'BYPLAN.html'

})