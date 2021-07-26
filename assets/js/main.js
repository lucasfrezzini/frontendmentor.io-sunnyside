// Simple show mobile menu 

const menu = document.getElementsByClassName('mobile__nav');
const open__nav = document.getElementById('open__nav');
const mobile__link = document.querySelectorAll('.mobile__link a');

open__nav.addEventListener('click', (e) => {
  menu[0].classList.toggle('mobile__nav--show');
});

mobile__link.forEach(link => {
    link.addEventListener('click', (e) => {
        menu[0].classList.toggle('mobile__nav--show');
    });
});
