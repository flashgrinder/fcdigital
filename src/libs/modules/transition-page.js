import gsap from 'gsap';

// PAGE TRANSITION LOADER OUT
function pageTransitionLoaderOut() {

    let tl = gsap.timeline();

    tl.to('.js-loader-screen', {
        duration: .5,
        width: '100%',
        left: '0%',
        ease: 'Expo.easeInOut'
    });

    tl.to('.js-loader-logo', {
        duration: .125,
        opacity: 1,
        delay: .250,
        ease: "Power1.easeOut"
    });

    tl.to('.js-loader-logo', {
        duration: .125,
        opacity: 1,
        delay: .125,
        ease: "Power1.easeOut"
    });

}
// PAGE TRANSITION OUT
function pageTransitionOut() {

    let tl = gsap.timeline();

    tl.to('.transition-page-wrapper', {
        duration: .5,
        opacity: 0
    });

}
// PAGE TRANSITION LOADER IN
function pageTransitionLoaderIn() {

    let tl = gsap.timeline();

    tl.to('.js-loader-screen', {
        duration: .5,
        width: '100%',
        left: '100%',
        ease: 'Expo.easeInOut'
    });

    tl.set('.js-loader-screen', {
        left: '-100%'
    });

}
// PAGE TRANSITION IN
function pageTransitionIn() {

    let tl = gsap.timeline();

    tl.from('.transition-page-wrapper', {
        duration: .5,
        opacity: 0,
        delay: .5
    });

    tl.from('.js-animate', {
        duration: .6,
        y: 30,
        opacity: 0,
        stagger: 0.2
    });
}

document.addEventListener('DOMContentLoaded', () => {

    let jsLinksTrs = document.querySelectorAll('.js-transition-link, .wysiwyg a');
    let jsLinksPage = Array.prototype.slice.call(jsLinksTrs);

    setTimeout(() => {
        pageTransitionLoaderIn();
        pageTransitionIn();
    }, 500);

    function eventLink(e) {
            let target = e.currentTarget;

            if(target.hasAttribute('href') && !target.getAttribute('target')) {
                
                e.preventDefault();

                pageTransitionLoaderOut();
                pageTransitionOut();

                setTimeout(() => {
                    window.location.href = target;
                }, 1000);

            } else if (target.getAttribute('target') !== null) {
                return false;
        }
    }

    jsLinksPage.forEach(element => {

        element.addEventListener('click', eventLink, true);

    });

})

