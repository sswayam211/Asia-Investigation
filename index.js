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

// service section
try {
    let serviceBoxes = document.querySelectorAll('.service-box');
    let serviceBoxImgs = document.querySelectorAll('.service-box img');

    let serviceBoxImgsArr = [{
        img: 'images/CI.jpg',
        hoverImg: 'images/CI-2.png'
    },
    {
        img: 'images/Fraud.png',
        hoverImg: 'images/fraud-2.png'
    },
    {
        img: 'images/LS.jpg',
        hoverImg: 'images/LS-2.png'
    },
    {
        img: 'images/employee.jpg',
        hoverImg: 'images/employee-2.png'
    },
    {
        img: 'images/servalance.png',
        hoverImg: 'images/servalance-2.png'
    }];


    serviceBoxes.forEach((box, index) => {
        box.addEventListener('mouseover', () => {
            // serviceBoxImgs[index].style.transform = 'scale(1.1)';
            serviceBoxImgs[index].src = serviceBoxImgsArr[index].hoverImg;
        });
        box.addEventListener('mouseout', () => {
            // serviceBoxImgs[index].style.transform = 'scale(1)';
            serviceBoxImgs[index].src = serviceBoxImgsArr[index].img;
        });
    });

} catch (err) {
    console.log(err);
}


// clients slider bar 
try {
    let clientBar = document.querySelector('#clients .client-images');
    let interval;

    // clientBar.addEventListener('wheel', (e) => {
    //     // e.preventDefault();
    //     clientBar.scrollLeft += e.deltaY;
    // });
    function startScroll() {
        clientBar.scrollLeft += 1;
        if (clientBar.scrollLeft >= clientBar.scrollWidth - clientBar.clientWidth) {
            clientBar.scrollLeft = 0;
        }
    }

    interval = setInterval(startScroll, 15);

} catch (err) {
    console.log(err);
}