function fixHeader() {
    const header = document.querySelector('header');
    const banner = document.querySelector('.banner-container');

    if (window.scrollY > banner.offsetHeight) {
        banner.style.paddingTop = header.offsetHeight + 'px';
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        banner.style.paddingTop = 0;
    }
}
window.addEventListener('scroll', fixHeader)
