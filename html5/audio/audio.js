var music = document.getElementById('music');
var timeEl = document.getElementById('time');
function musicPlay() {
    music === null || music === void 0 ? void 0 : music.play();
}
function musicPause() {
    music === null || music === void 0 ? void 0 : music.pause();
}
music === null || music === void 0 ? void 0 : music.addEventListener('timeupdate', function () {
    if (!music || !timeEl)
        return;
    var current = Math.floor(music.currentTime);
    var duration = Math.floor(music.duration);
    timeEl.innerText = "".concat(current, ":").concat(duration, "\uCD08");
});
