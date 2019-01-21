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

//video youtube
var video = document.getElementById("video");
var buttonPlay = document.getElementById("button-play");
var videoYoutube = document.getElementById("video-youtube");
var exitVideo = document.getElementById("exit-video");
var iframeVideo = document.getElementsByClassName("iframe-video");

function displayVideoYoutube(videoYoutube, video) {
    videoYoutube.classList.add("for-video-youtube");
    video.classList.add("for-video");
}

function removeElementVideo(videoYoutube, video) {
    videoYoutube.classList.remove("for-video-youtube");
    video.classList.remove("for-video");
}

function stopVideo(frameVideo) {
    frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

buttonPlay.addEventListener("click", function () {
    displayVideoYoutube(videoYoutube, video)}
    , false);

exitVideo.addEventListener("click", function () {
    removeElementVideo(videoYoutube, video)}
    , false);

exitVideo.addEventListener("click", function () {
    stopVideo(iframeVideo)}
    , false);