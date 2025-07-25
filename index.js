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


// testimonial seaction 
try {
    let testimonialContent = document.querySelector('.testimonial-box .content');
    let testimonialName = document.querySelector('.testimonial-box .name');
    let dots = document.querySelectorAll('.testimonial-box .dots .dot');
    let variable = [
        {
            name: "<h4>Swayam Singh</h4>",
            content: "<p>This detective agency is highly professional and reliable. They handled my case with complete confidentiality and provided accurate results quickly. The team is experienced, responsive, and committed to delivering the truth. I’m very satisfied with their service and would highly recommend them for any personal or corporate investigation needs.</p>"
        },
        {
            name: "<h4>Sujeet Pratap Singh</h4>",
            content: "<p>I had a great experience with this detective agency. Their team is efficient, trustworthy, and detail-oriented. They kept me informed throughout the investigation and delivered accurate findings. Their professionalism and dedication were impressive. I highly recommend them to anyone looking for dependable and discreet investigative services.</p>"
        },
    ];
    let timeout;
    let timeout2;
    let curIndex = 0;
    let changeTime = 5000;

    // console.log(variable[curIndex].name);

    function testChange(index) {
        curIndex = index;
        clearTimeout(timeout);
        clearTimeout(timeout2);
        testimonialContent.innerHTML = variable[index].content;
        testimonialName.innerHTML = variable[index].name;
        testimonialContent.classList.add('fade');
        testimonialName.classList.add('fade');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');

        timeout2 = setTimeout(() => {
            testimonialContent.classList.remove('fade');
            testimonialName.classList.remove('fade');
        }, 500);

        timeout = setTimeout(() => {
            testChange(curIndex);
            curIndex++;
            if (curIndex >= variable.length) {
                curIndex = 0
                console.log(curIndex);
            }
        }, changeTime);
    }

    testChange(curIndex);
    curIndex++;

    // setInterval(() => {
    //     testChange(curIndex);
    //     curIndex++;
    //     if (curIndex >= variable.length) {
    //         curIndex = 0
    //         console.log(curIndex);
    //     }
    // }, changeTime);

} catch (err) {
    console.log(err);
}