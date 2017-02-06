const detCont = document.querySelector('.info-content')
const details = detCont.querySelectorAll('details')

function removeOpenAttr(e) {
    if (this.hasAttribute("open")) {
        return;
    } else {
        details.forEach(detail => detail.removeAttribute("open"));
    }
}
details.forEach(detail => detail.addEventListener('click', removeOpenAttr));
