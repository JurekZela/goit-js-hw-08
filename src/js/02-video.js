import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(e) {
        
        const localStorageMsg = localStorage.setItem("videoplayer-current-time", e.seconds);
        
    }, 1000));