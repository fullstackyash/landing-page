document.addEventListener('DOMContentLoaded', function(){
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '540',
            width: '960',
            videoId: 'mUGYPlAgJPw',  // youtube video id
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0,
                'modestbranding': 1,
                'controls': 0
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            document.getElementById('play-buttons').style.display = 'block';
        }
    }

    document.addEventListener('click', function (e) {
        if (e.target === document.getElementById('start-video')) {
            document.getElementById('play-buttons').style.display = 'none';
            document.getElementById('player').style.display = 'block';
            document.querySelector('.video-img').style.display = 'none';
            player.playVideo();
        }
    });
})