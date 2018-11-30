function toggleMenu() {
    var headerContainer = document.getElementById("menu_toggle");
    headerContainer.classList.toggle("toggle");
}

var menu = document.getElementById("menu_toggle");
menu.addEventListener("click", toggleMenu, false);