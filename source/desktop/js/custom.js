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


/*--- Tabs ---*/
// Multimedia
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