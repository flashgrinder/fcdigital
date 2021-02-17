const burger = document.querySelector('.js-burger');
let isOpen = burger.classList.contains('is-open');

function open() {
    burger.classList.add('is-open');
    isOpen = true;
}

function close() {
    burger.classList.remove('is-open');
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