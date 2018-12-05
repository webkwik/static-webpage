function displayElement(form) {
    if (form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none";
    }
}


var searchIcon = document.getElementById("search");
var form = document.getElementById('form');
searchIcon.addEventListener("click", function () {
    displayElement(form)}
    , false);

var menu = document.getElementById("menu_toggle");
var toggle = document.getElementById('toggle');
menu.addEventListener("click", function () {
    displayElement(toggle)}
    , false);