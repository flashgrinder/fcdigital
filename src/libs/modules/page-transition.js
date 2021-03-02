import barba from '@barba/core';
import marquee from './Marquee3k.js';
import gsap from 'gsap';

// CLOSE MENU
function closeMenu() {

    let jsStateMenu = document.querySelectorAll('.js-state-menu');

    jsStateMenu.forEach(item => {
        if(item.classList.contains('is-open')) {
            item.classList.remove('is-open');
        }
    });
}

// PAGE TRANSITION
function pageTransition() {

    let tl = gsap.timeline();

    tl.to('.loader-screen', {
        duration: .7,
        width: '100%',
        left: '0%',
        ease: 'Expo.easeInOut'
    });

    tl.to('.loader-screen', {
        duration: .7,
        width: '100%',
        left: '100%',
        ease: 'Expo.easeInOut',
        delay: 0
    });

    tl.set('.loader-screen', {
        left: '-100%'
    });
}

function contentAnimation() {

    let tl = gsap.timeline();

    tl.from('.js-animate-main', {
        duration: .8,
        opacity: 0,
        delay: 0.8
    });

    tl.from('.js-animate', {
        duration: .6,
        y: 30,
        opacity: 0,
        stagger: 0.2
    });

    
}

// BARBA SETUP
barba.init({
    schema: {
        prefix: 'data-trs',
        wrapper: 'container'
      },
    views: [{
        namespace: 'home',
        beforeLeave(data) {    

            marquee.destroy();

        },
        beforeEnter(data) {

            marquee.init();

        }
    }],
    transitions: [{
        // name: 'default-transition',
        leave(data) {
            closeMenu();
            pageTransition();
        },
        enter(data) {
            contentAnimation();
        },
        once(data) {
            contentAnimation();
        }
    }]
});