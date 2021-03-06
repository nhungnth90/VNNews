/* ====================================
   M_VNNEWS JS
   ==================================== */

/*--- Toggle ---*/
// Menu
$('#menu_dropdown').on('click', function() {
    $('.menu-dropdown').toggleClass("active");
});

// Search
$('#search_dropdown').on('click', function() {
    $('.search-dropdown').toggleClass("active");
});

// Category
$('#expand_btn').on('click', function() {
    $('.expand-child').toggleClass("active");
});


/*--- Accordion ---*/
var accItem = document.getElementsByClassName('menu-wrap accordion');
var accHD = document.getElementsByClassName('accordion__heading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'menu-wrap accordion close';
    }
    if (itemClass == 'menu-wrap accordion close') {
        this.parentNode.className = 'menu-wrap accordion open';
    }
}


/*--- Simplyscroll ---*/
// Trending
$("#trending_scroller").simplyScroll();

// Footer
$("#footer_scroller").simplyScroll();


/*--- Sticky Nav ---*/
$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.m-header').addClass('sticky');
    } else {
        $('.m-header').removeClass('sticky');
    }
});


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