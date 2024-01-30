const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")

// 音乐信息
const songs = ["1", "2", "3"]
// 默认从第一首开始
let songIndex = 0;
// 将歌曲细节加载到DOM
loadSong(songs[songIndex])
// 更新歌曲细节
function loadSong(song) {
    audio.src = `music/${song}.mp3`;      // 路径为 music/打上花火.mp3
}

// 播放歌曲
function playSong() {
    // 元素添加类名
    musicContainer.classList.add("play")
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

// 停止播放
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


// 事件监听
// 1.播放歌曲
playBtn.onclick = function () {
    // 判断当前是否是正在播放

    // const isPlaying = musicContainer.classList.contains('play')
    // if (isPlaying) {
    //     pauseSong()
    // } else {
    //     playSong()
    // }
    musicContainer.classList.contains('play') ? pauseSong() : playSong()
}
// 2.切换歌曲
prevBtn.onclick = prevSong
nextBtn.onclick = nextSong

// 3.播放器进度条相关
// 3.3 歌曲结束后自动下一首