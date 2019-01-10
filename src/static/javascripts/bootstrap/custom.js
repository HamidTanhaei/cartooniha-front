$(function () {
    $('.btn-vertical-slider').on('click', function () {
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }
    });

    /*****Slider*****/
    $('#owlslider1, #owlslider2, #owlslider3, #owlslider4').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    });

    $('#tab-owl').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }

    });
    /*****Last News*****/
    $(".demo").bootstrapNews({
        newsPerPage: 6,
        navigation: true,
        autoplay: true,
        direction: 'up', // up or down
        animationSpeed: 'normal',
        newsTickerInterval: 3000, //4 secs
        pauseOnHover: true,
        onStop: null,
        onPause: null,
        onReset: null,
        onPrev: null,
        onNext: null,
        onToDo: null,
    });
});