function displayElementSearch(form, searchIcon, logo) {
    if (window.matchMedia("(max-width: 960px)").matches) {
        form.classList.add("for-form-search");
        searchIcon.classList.add("for-icon-search");
        logo.classList.add("for-icon-search");
      } else {
        form.classList.add("for-form-search");
        searchIcon.classList.add("for-icon-search");
      }
}

function removeElementSearch(form, searchIcon, logo) {
    form.classList.remove("for-form-search");
    searchIcon.classList.remove("for-icon-search");
    logo.classList.remove("for-icon-search");
}

var searchIcon = document.getElementById("search");
var form = document.getElementById("form");
var logo = document.getElementById("logo");

searchIcon.addEventListener("click", function () {
    displayElementSearch(form, searchIcon, logo)}
    , false);

var button = document.getElementById("button");
button.addEventListener("click", function () {
    removeElementSearch(form, searchIcon, logo)}
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

function playVideo(frameVideo) {
    frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

buttonPlay.addEventListener("click", function () {
    playVideo(iframeVideo)}
    , false);

buttonPlay.addEventListener("click", function () {
    displayVideoYoutube(videoYoutube, video)}
    , false);

exitVideo.addEventListener("click", function () {
    removeElementVideo(videoYoutube, video)}
    , false);

exitVideo.addEventListener("click", function () {
    stopVideo(iframeVideo)}
    , false);
