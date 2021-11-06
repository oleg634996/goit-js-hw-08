import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time"
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY)

  
player.on('timeupdate', throttle(() => {
  player.getCurrentTime()
        .then(function (seconds) {
            localStorage.setItem(LOCALSTORAGE_KEY, seconds)
        }).catch(function (error) {
            return error
        });
}, 1000));
    
    if (currentTime) {
        player.setCurrentTime(currentTime)
            .catch(function(error) {
        console.log('RangeError', error)
});
};

