/* ====================================
   VNNEWS JS
   ==================================== */

/*--- Toggle ---*/
// Search
$('.search-icon').on('click', function() {
    $('.search').toggleClass("active");
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


/*--- Tabs Multimedia ---*/
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btn = el.currentTarget;
    var electronic = btn.dataset.electronic;

    tabContent.forEach(function(el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function(el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + electronic).classList.add("active");

    btn.classList.add("active");
}


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