// header js 

try {
    let topNav = document.querySelector('header .top-nav');
    let logo = document.querySelector('header .logoo');
    let logoImg = document.querySelector('header .logoo img');
    let prevScroll = 0;

    window.addEventListener('scroll', () => {
        let currScroll = window.scrollY;
        // console.log(currScroll);
        if (window.innerWidth > 992) {
            if (currScroll > document.querySelector('header').clientHeight) {
                topNav.classList.remove('d-lg-flex');
                logo.style.borderRight = 'none';
                logoImg.style.height = '60px';
            } else {
                topNav.classList.add('d-lg-flex');
                logo.style.borderRight = '1px solid #dee2e6';
                logoImg.style.height = '100px';
                // prevScroll = currScroll;
            }
        } else {
            logo.style.borderRight = 'none';
            logoImg.style.height = '60px';
        }


    });
} catch (err) {
    console.log(err);
}