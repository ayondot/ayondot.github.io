$(function(){
	var song = new Audio('jinglebells.mp3');
	song.volume = 0.1;
	song.play();
	if(!typeof song.loop == 'boolean') {
    	song.addEventListener('ended', function () {
        	this.currentTime = 0;
    	}, false);
	}{
		song.loop = true;
	}
	var options = {
	    animateThreshold: 100,
	    scrollPollInterval: 20
	}
	$('.aniview').AniView(options);

  	$("#yoruba").typed({
    	stringsElement: $('#typed-strings'),
    	contentType: 'html',
    	loop: true
  	});
});

		