/*Get Our Elements*/
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

/*Build our functions*/

function togglePlay() {
  if (video.paused) {
    video.play();
  } else video.pause();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  console.log(video.buffered.length)
}


let isMouseDown = false
function handleScrub(e) {
    let newTimePercent = e.offsetX /progress.offsetWidth
    progressBar.style.flexBasis = `${newTimePercent * 100}%`
    video.currentTime = video.duration * newTimePercent
}
/*Hook up the event listeners*/

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
progress.addEventListener('mousedown',()=>isMouseDown = true)
progress.addEventListener('mouseup',()=>isMouseDown = false)
progress.addEventListener('mousemove',(e)=> isMouseDown && handleScrub(e))
progress.addEventListener('click',handleScrub)


