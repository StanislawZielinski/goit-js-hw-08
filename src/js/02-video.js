import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const _= require('lodash');
player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const testTime = _.throttle((data) => { localStorage.setItem("videoplayer-current-time", JSON.stringify(data)); }, 1000);
const onPlay = function(data) {
    testTime(data);
};


player.on('timeupdate',onPlay);
const savedTime = localStorage.getItem("videoplayer-current-time")
const currentTime = JSON.parse(savedTime).seconds;
player.setCurrentTime(currentTime);
