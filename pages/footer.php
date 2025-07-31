<!-- footer section start  -->
<footer class="bg-black text-white position-relative">
    <div class="container p-md-5 py-5 p-3 position-relative" style="z-index: 100;">
        <div class="row">
            <div class="col-lg-4 p-4">
                <div class="about scroll text-center">
                    <a class="text-light" href="index.php">
                        <!-- <h2 class="mb-4 text-center">AIS</h2> -->
                        <img src="/KundanPro/Asia%20Investigation%20Services%20website/images/logo-4.png" class="m-auto mb-3" height="100px" alt="logo">
                    </a>
                    <div class="content">
                        Asia Investigation Services provides professional investigation and survey services
                        including background checks, insurance investigation, legal support, and corporate
                        verification.... <span style="font-size: 10px;"><a href="/KundanPro/Asia%20Investigation%20Services%20website/pages\about.php">Read
                                More</a></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-4">
                <div class="imp-links scroll">
                    <h5 class="mb-4">Important Links</h5>
                    <ul>
                        <li><a href="/KundanPro/Asia%20Investigation%20Services%20website/index.php"><i class="fa-solid fa-caret-right me-3"></i>Home</a></li>
                        <li><a href="/KundanPro/Asia%20Investigation%20Services%20website/pages\about.php"><i class="fa-solid fa-caret-right me-3"></i>About Us</a></li>
                        <li><a href="/KundanPro/Asia%20Investigation%20Services%20website/pages\service.php"><i class="fa-solid fa-caret-right me-3"></i>Services</a>
                        </li>
                        <li><a href="/KundanPro/Asia%20Investigation%20Services%20website/pages\contact.php"><i class="fa-solid fa-caret-right me-3"></i>Contact</a>
                        </li>
                        <!-- <li><a href="pages/stories.php"><i
                                        class="fa-solid fa-caret-right me-3"></i>Cases/Stories</a></li> -->
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-4">
                <div class="address scroll">
                    <h5 class="mb-4">Address</h5>
                    <ul>
                        <li>
                            <p><a href="tel:9084755375"><i class="fa-solid fa-phone me-3"></i>+91 9084755375</a>,<a
                                    href="tel:8273460190">
                                    +91 8273460190</a></p>
                        </li>
                        <li>
                            <p><a href="mailto:asiyaassociate79@gmail.com"><i
                                        class="fa-solid fa-envelope me-3"></i>asiyaassociate79@gmail.com</a></p>
                        </li>
                        <li>
                            <p><a href=""><i class="fa-solid fa-location-dot me-3"></i>Etawah </a></p>
                        </li>
                    </ul>


                </div>
            </div>

        </div>
    </div>
    <hr class="m-0">
    <div class="copyright p-4 text-center">
        Copyright © 2025. All Rights Reserved. <span class="fw-bold">Designed and Developed by KundanPro.</span>
    </div>


</footer>
<!-- footer section end -->

<!-- bootstarp js cdn  -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
    crossorigin="anonymous"></script>


<!-- my js  -->
<script>
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


    // active nav
    try {
        let navLinks = document.querySelectorAll('.nav-link');
        let currentPage = window.location.pathname;
        console.log(currentPage);

        navLinks.forEach(link => {
            console.log(link.getAttribute('href'));
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } catch (err) {
        console.log(err);
    }
</script>
</body>

</html>