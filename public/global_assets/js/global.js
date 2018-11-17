const resizeContainer = () => {
    document.getElementsByClassName('container')[0].style.width = window.innerWidth - 80 + 'px'
}
window.addEventListener("resize", resizeContainer);
window.addEventListener("load", resizeContainer);
