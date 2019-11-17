$(document).ready(function () {
    svg4everybody({});
});

$('.hero-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true
});

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    prevArrow: document.querySelector('.prev'),
    nextArrow: document.querySelector('.next'),
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1368,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1034,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});