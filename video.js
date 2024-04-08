var video;
video=document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});


//play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});


//pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


//slowwwwwwwwww
document.querySelector("#slower").addEventListener("click", function() {
	//function to slow it down
	video.playbackRate = video.playbackRate-.10;
	console.log("Slowed Video to", video.playbackRate);
});

//I am SPEED
//hints from Jackie during class :look at the video for playback speed - 10%
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate+.10;
	console.log("Sped Up Video to", video.playbackRate);

});


//skippidy-bop-bop (10 seconds)
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime = video.currentTime + 10;
	//this function above =  10 seconds//
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute");
    video.muted = !video.muted; 
});

//change volume (slider thingy)
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		console.log("Video Volume is", video.volume)

});


// old school vibes
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Style is vintage")

})

//too cool for old school - back to og style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Style is original");

})
