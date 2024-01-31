const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")

const songs = ["1", "2", "3"]
let songIndex = 2;
loadSong(songs[songIndex])
function loadSong(song) {
    audio.src = `music/${song}.mp3`;
}
function playSong() {
    musicContainer.classList.add("play")
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

playBtn.onclick = function () {
    musicContainer.classList.contains('play') ? pauseSong() : playSong()
}
prevBtn.onclick = prevSong
nextBtn.onclick = nextSong
