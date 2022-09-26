import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');
let parsedTime = JSON.parse(currentTime);

if (parsedTime.seconds) {
  player.setCurrentTime(parsedTime.seconds);
}
player.setCurrentTime(0);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
