    let preloader = document.querySelector('.js-preloader');
    let getStoragePreloader = sessionStorage.getItem('js-preloader');

    function hidePreloader() {
        setTimeout(() => {
            preloader.classList.add('is-fade-out')
        }, 1500);
        setTimeout(() => {
            preloader.classList.add('is-hidden')
        }, 2000);
    }
    console.log(sessionStorage)

    if(!getStoragePreloader){
        sessionStorage.setItem( 'js-preloader', true );
        hidePreloader();
    } else {
        preloader.classList.add('is-hidden');
    }