/* ====================================
   VNNEWS JS
   ==================================== */

/*--- Toggle ---*/
// Search
$('.search-icon').on('click', function() {
    $('.search-form').toggleClass("active");
});

// Menu
$('#menu_dropdown').on('click', function() {
    $('.dropdown').toggleClass("active");
});


/*--- Sticky Nav ---*/
$(window).scroll(function() {
    if ($(window).scrollTop() >= 105) {
        $('.site-header__nav').addClass('sticky');
    } else {
        $('.site-header__nav').removeClass('sticky');
    }
});


/*--- Simplyscroll Footer ---*/
$("#scroller").simplyScroll();


/*--- Back To Top ---*/
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
});