function displayElement(form) {
    if (form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none";
    }
}

function displayElementSearch(form, searchIcon) {
    form.style.opacity = 1;
    searchIcon.opacity = 0;

}

var searchIcon = document.getElementById("search");
var form = document.getElementById("form");
searchIcon.addEventListener("click", function () {
    displayElementSearch(form, searchIcon)}
    , false);

var menu = document.getElementById("menu-toggle");
var toggle = document.getElementById("toggle");
menu.addEventListener("click", function () {
    displayElement(toggle)}
    , false);