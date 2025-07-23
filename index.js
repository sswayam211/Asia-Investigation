// header js 

try {
    let topNav = document.querySelector('header .top-nav');
    let logo = document.querySelector('header .logoo');
    let prevScroll = 0;

    window.addEventListener('scroll', () => {
        let currScroll = window.scrollY;
        // console.log(currScroll);
        if (window.innerWidth > 992) {
            if (currScroll > document.querySelector('header').clientHeight) {
                topNav.classList.remove('d-lg-flex');
                logo.style.borderRight = 'none';
            } else {
                topNav.classList.add('d-lg-flex');
                logo.style.borderRight = '1px solid #dee2e6';
                // prevScroll = currScroll;
            }
        } else {
            logo.style.borderRight = 'none';
        }


    });
} catch (err) {
    console.log(err);
}