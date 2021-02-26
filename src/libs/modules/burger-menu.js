import { gsap } from "gsap";

const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');
const overlayMenu = document.querySelector('.js-overlay-menu');
let isOpen = burger.classList.contains('is-open');

let tl = gsap.timeline({defaults: {duration: .3, ease: "power3.out"}});

tl.paused(true);
tl.to(".menu__item", {opacity: 1, x: "0px", stagger: .3});

function open() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    overlayMenu.classList.add('is-open');
    setTimeout(() => {
        tl.play();
    }, 500);
    isOpen = true;
}

function close() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlayMenu.classList.remove('is-open');
    tl.reverse(2);
    isOpen = false;
}

function toggle() {
    isOpen ? close() : open();
}

function init() {
    burger.addEventListener('click', toggle);
}

function destroy() {
    burger.removeEventListener('click', toggle)
}

export default {init, destroy}