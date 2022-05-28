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

const test = _.throttle(function() {console.log("Function throttled after 1000ms!");}, 4000);
 
const onPlay = function(data) {localStorage.setItem("videoplayer-current-time", JSON.stringify(data))};

    // test();


// player.on(_.throttle(function () { 'timeupdate' }, 5000), onPlay);
player.on('timeupdate',onPlay);
const savedTime = localStorage.getItem("videoplayer-current-time")
const currentTime = JSON.parse(savedTime).seconds;
player.setCurrentTime(currentTime);


// var throt_fun = _.throttle(function() {
//         console.log('Function throttled after 1000ms!');
// }, 4000);
//     // Defining loop
// var loop = function() {
//     setTimeout(loop, 1000);
//     throt_fun();
// };
  
// // Calling loop to start
// loop();