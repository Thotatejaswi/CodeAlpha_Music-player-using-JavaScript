const tracks = [
    { name: "Track 1", src: "track1.mp3" },
    { name: "Track 2", src: "track2.mp3" },
    { name: "Track 3", src: "track3.mp3" }
];

let currentIndex = 0;
let isPlaying = false;
const audio = new Audio();

function updateTrackInfo() {
    document.getElementById("current-track").innerText = Playing: ${tracks[currentIndex].name};
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById("current-track").innerText = "Paused";
    } else {
        audio.src = tracks[currentIndex].src;
        audio.play();
        isPlaying = true;
        updateTrackInfo();
    }
}

function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    audio.src = tracks[currentIndex].src;
    audio.play();
    isPlaying = true;
    updateTrackInfo();
}

function prevTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentIndex].src;
    audio.play();
    isPlaying = true;
    updateTrackInfo();
}