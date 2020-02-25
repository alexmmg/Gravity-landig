$(function () {
    $('.owl-carousel').owlCarousel({
        // stagePadding: 50,
        loop: true,
        margin: 30,
        nav: true,
        startPosition: 1,
        navText: ["<img alt='Left' src='img/left.svg'>", "<img alt='Right' src='img/right.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

