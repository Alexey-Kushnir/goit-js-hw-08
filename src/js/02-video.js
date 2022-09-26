import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');
let parsedTime = JSON.parse(currentTime);

player.on('timeupdate', throttle(onPlay, 1000));

if (!parsedTime) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(parsedTime.seconds);
}

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
