$(function () {
    $('.works-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        startPosition: 1,
        navText: ["<img alt='Left' src='img/testimonials/left.svg'>", "<img alt='Right' src='img/testimonials/right.svg'>"],
        dots: false,
        items: 1.3,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 1
        //     },
        //     1000: {
        //         items: 1
        //     }
        // }
    });

    $('.contributor-carousel').owlCarousel({
        // stagePadding: 50,
        loop: true,
        margin: 0,
        nav: true,
        // startPosition: 1,
        navText: ["<img alt='Left' src='img/testimonials/left.svg'>", "<img alt='Right' src='img/testimonials/right.svg'>"],
        dots: false,
        items: 1,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 1
        //     },
        //     1000: {
        //         items: 1
        //     }
        // }
    });
});
