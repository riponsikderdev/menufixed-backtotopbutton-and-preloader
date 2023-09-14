$(function () {
    // * MENU FIXED STARTS HERE
    $(window).scroll(function () {
        let srcTop = $(window).scrollTop()

        if (srcTop > 500) {
            $('nav').addClass('menuFixed')
        } else {
            $('nav').removeClass('menuFixed')
        }
        // * MENU FIXED ENDS HERE
        // * BACK TO TOP BUTTON STARTS HERE
        if (srcTop > 500) {
            $('.bttBtn').fadeIn()
        } else {
            $('.bttBtn').fadeOut()
        }
    })
    $('.bttBtn').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 500)
    })
})
// * BACK TO TOP BUTTON ENDS HERE
// * PRELOADER STARTS HERE
$(window).on('load', function () {
    $('.preloader').delay(2350).fadeOut();
})
// * PRELOADER ENDS HERE