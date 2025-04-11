const music = document.getElementById('music') as HTMLAudioElement | null;
const timeEl = document.getElementById('time') as HTMLElement | null;

function musicPlay() {
  music?.play();
}

function musicPause() {
  music?.pause();
}

music?.addEventListener('timeupdate', () => {
  if (!music || !timeEl) return;

  const current = Math.floor(music.currentTime);
  const duration = Math.floor(music.duration);

  timeEl.innerText = `${current}:${duration}초`;
});
