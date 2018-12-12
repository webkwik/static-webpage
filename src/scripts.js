function displayElement(form) {
    if (form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none";
    }
}

function displayElementSearch(form, searchIcon) {
    form.classList.add("for-form-search");
    searchIcon.classList.add("for-icon-search");
}

function removeElementSearch(form, searchIcon) {
    form.classList.remove("for-form-search");
    searchIcon.classList.remove("for-icon-search");
}

var searchIcon = document.getElementById("search");
var form = document.getElementById("form");
searchIcon.addEventListener("click", function () {
    displayElementSearch(form, searchIcon)}
    , false);

var button = document.getElementById("button");
button.addEventListener("click", function () {
    removeElementSearch(form, searchIcon)}
    , false);

var menu = document.getElementById("menu-toggle");
var toggle = document.getElementById("toggle");
menu.addEventListener("click", function () {
    displayElement(toggle)}
    , false);