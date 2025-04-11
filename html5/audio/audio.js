"use strict";
const music = document.getElementById('music');
const timeEl = document.getElementById('time');
function musicPlay() {
    music?.play();
}
function musicPause() {
    music?.pause();
}
music?.addEventListener('timeupdate', () => {
    if (!music || !timeEl)
        return;
    const current = Math.floor(music.currentTime);
    const duration = Math.floor(music.duration);
    timeEl.innerText = `${current}:${duration}초`;
});
