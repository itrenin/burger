// 3. This function creates an <iframe> (and YouTube player)
	  //    after the API code downloads.
	  let player;
	  function onYouTubeIframeAPIReady() {
			if (!isMobile()){
			player = new YT.Player('yt-player', {
				height: '405',
				width: '660',
				videoId: 'M7lc1UVf-VE',
				playerVars:{
					controls: 0,
					disablekb: 0,
					modestbranding: 0,
					rel: 0,
					autoplay: 0,
					showinfo: 0,
				},
				events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
				}
			});
		}
		else{
			player = new YT.Player('yt-player', {
				height: '282',
				width: '460',
				videoId: 'M7lc1UVf-VE',
				playerVars:{
					controls: 0,
					disablekb: 0,
					modestbranding: 0,
					rel: 0,
					autoplay: 0,
					showinfo: 0,
				},
				events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
				}
			});

		}
	  }
	  function onPlayerStateChange(event){
		switch (event.data){
			case 1:
			$('.player__play').addClass('played');
			$('.player__splash').css({
				display: 'none'
			});
		}
	  }
	  function onPlayerReady() {
		const duration = player.getDuration();
		//console.log (duration);
		let interval;
		clearInterval(interval);
		
		interval = setInterval( ()=>{
			const comleted = player.getCurrentTime();
			const percent = (comleted / duration) * 100;
			
			changeButtonPosition(percent);
			
			//console.log (percent);
		}, 1000 );
		
	  }

$('.player__play').on('click', e=>{

	// getPlayerState()     Возвращает состояние проигрывателя. Возможные значения:
	// -1 – воспроизведение видео не началось
	// 0 – воспроизведение видео завершено
	// 1 – воспроизведение
	// 2 – пауза
	// 3 – буферизация
	// 5 – видео находится в очереди
	const playerStatus = player.getPlayerState();
	if (playerStatus != 1){
		player.playVideo();
		$('.player__play').addClass('played');
	} else {
		player.pauseVideo();
		$('.player__play').removeClass('played');
	}
});
$('.player__playbutton-big').on('click',e=>{
	const playerStatus = player.getPlayerState();
	if (playerStatus != 1){
		player.playVideo();
		$('.player__play').addClass('played');
	} else {
		player.pauseVideo();
		$('.player__play').removeClass('played');
	}
});

$('#video__progress').on('click', e =>{
	const bar = $(e.currentTarget);
	const newButtonPosition = e.pageX - bar.offset().left;
	//console.log (newButtonPosition);
	const clickedPercent = (newButtonPosition / bar.width()) * 100;
	//console.log (clickedPercent);
	const newPlayerTime = (player.getDuration() / 100) * clickedPercent;
	changeButtonPosition(clickedPercent);

	player.seekTo(newPlayerTime);
});

function changeButtonPosition(percent){
	$('.player__progress-point').css({
		left: `${percent}%`,
	});

}