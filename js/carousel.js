




// Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
// for image
$('.four-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// forvideo
$('.video-carousel').owlCarousel({
    items: 1,
    merge: true,
    videoWidth: false,
    videoHeight: false,
    video: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    responsive: {
        480: {
            items: 2
        },
        600: {
            items: 4
        }
    }
})