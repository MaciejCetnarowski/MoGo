const mobBtn = document.querySelector('.nav-button');
const menu = document.querySelector('.mob-menu');

function openMenu(){
menu.classList.toggle('opened')
}

mobBtn.addEventListener('click',openMenu);
menu.addEventListener('click',openMenu);
