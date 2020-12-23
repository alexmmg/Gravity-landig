$(function () {
    $('.works-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        startPosition: 1,
        navText: ["<img alt='Left' src='img/testimonials/left.svg'>", "<img alt='Right' src='img/testimonials/right.svg'>"],
        dots: false,
        items: 1.3,
    });

    $('.contributor-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img alt='Left' src='img/testimonials/left.svg'>", "<img alt='Right' src='img/testimonials/right.svg'>"],
        dots: false,
        items: 1
    });
});
