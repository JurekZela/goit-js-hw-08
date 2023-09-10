import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onSaveCurrentTime, 1000));

    function onSaveCurrentTime(e) {
        return localStorage.setItem("videoplayer-current-time", e.seconds);
    };

const getSaveCurrentTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(getSaveCurrentTime);