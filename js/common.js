

function init() {

    let toggleNavButton = document.querySelector('.toggle_nav');
    let openModalButton = document.querySelector('.action_btn');
    let closeModalButton = document.querySelector('.close_modal');
    let overlay = document.querySelector('.overlay');
    let moreButtons = document.querySelectorAll('.more');

    const closeAll = function (e) {
        e.preventDefault();
        document.querySelector('body').classList.remove('nav_open');
        document.querySelector('body').classList.remove('modal_open');
    }

    const showMoreHandler = function () {
        const prevEl = this.previousElementSibling;
        prevEl.style.webkitLineClamp = 13;
        this.remove();
    }

    const toggleNavHandler = function (e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('nav_open');
    }

    const openModalHandler = function (e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('modal_open');
    }

    if(toggleNavButton) {
        toggleNavButton.addEventListener('click', toggleNavHandler);
    }
    if(openModalButton) {
        openModalButton.addEventListener('click', openModalHandler);
    }
    if(overlay) {
        overlay.addEventListener('click', closeAll);
    }
    if(closeModalButton) {
        closeModalButton.addEventListener('click', closeAll);
    }
    if(moreButtons.length) {
        Array.from(moreButtons).map(elem => {
            elem.addEventListener('click',showMoreHandler);
        })
    }

}

document.addEventListener("DOMContentLoaded", init);