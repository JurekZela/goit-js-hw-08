import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', function(e) {

    localStorage.setItem("videoplayer-current-time", "start a new video");
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });