

let toggleNavButton = document.querySelector('.toggle_nav');
let overlay = document.querySelector('.overlay');
let moreButtons = document.querySelectorAll('.more');

const showMoreHandler = function () {
    const prevEl = this.previousElementSibling;
    prevEl.style.webkitLineClamp = 13;
    this.remove();
}

const toggleNavHandler = function (e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('nav_open');
}


toggleNavButton.addEventListener('click', toggleNavHandler);
overlay.addEventListener('click', toggleNavHandler);
if(moreButtons.length) {
    Array.from(moreButtons).map(elem => {
        elem.addEventListener('click',showMoreHandler);
    })
}
