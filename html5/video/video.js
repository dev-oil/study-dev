var vod = document.getElementById('vod');
var seekbar = document.getElementById('seekbar');
function vodPlay() {
    vod === null || vod === void 0 ? void 0 : vod.play();
}
function vodPause() {
    vod === null || vod === void 0 ? void 0 : vod.pause();
}
function updateVolume() {
    if (!vod || !seekbar)
        return;
    // input range 값은 문자열이므로 숫자로 변환
    var volume = parseFloat(seekbar.value);
    // 0.0 ~ 1.0 사이 값으로 제한
    vod.volume = Math.min(1, Math.max(0, volume));
}
