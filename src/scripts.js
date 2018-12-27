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
var containerToggle = document.getElementById("container-toggle");
menu.addEventListener("click", function () {
    addClass(containerToggle, menu)}
    , false);


function addClass(containerToggle, menu) {
    containerToggle.classList.add("open-menu");
    menu.classList.add("visibility-icon-menu");
}

function removeClass(containerToggle, menu) {
    containerToggle.classList.remove("open-menu");
    menu.classList.remove("visibility-icon-menu");
}

var exitMenu = document.getElementById("exit-menu");
exitMenu.addEventListener("click", function () {
    removeClass(containerToggle, menu)}
    , false);
