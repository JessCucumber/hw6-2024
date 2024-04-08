var video;
var playbackRate = 1.0; //initialized

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to" + video.autoplay)
	console.log ("loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	playbackRate -= 0.1;
	video.playbackRate = playbackRate;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	playbackRate += 0.1;
	video.playbackRate = playbackRate;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	//this function above =  10 seconds//
});

//hints from Jackie during class :look at the video for playback speed
