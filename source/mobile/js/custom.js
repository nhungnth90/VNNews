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

// $("#scroller").simplyScroll();


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