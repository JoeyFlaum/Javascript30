/*Get Our Elements*/
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__Filled");

const toggle = player.querySelector('.toggle')
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

/*Build our functions*/

togglePlay = () =>{
    if(video.paused){
        video.play()
    }
    else video.pause()
}

updateButton = () =>{
    const icon = video.paused? '►' : '❚ ❚';
    toggle.textContent = icon;
} 

/*Hook up the event listeners*/

video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
toggle.addEventListener('click',togglePlay)