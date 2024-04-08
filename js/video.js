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
	console.log("Slow Down");

	//function to slow it down
	playbackRate -= 0.1;
	video.playbackRate = video.playbackRate-.10;
	console.log(video.playbackRate);
});

//I am SPEED
//hints from Jackie during class :look at the video for playback speed - 10%
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	playbackRate += 0.1;
	video.playbackRate = video.playbackRate+.10;
	console.log(video.playbackRate);
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
document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Change");
    var volume = parseFloat(this.value) / 100; // Convert slider value to volume value
    video.volume = volume; // Set video volume
	updateVolumeDisplay();

});


// old school vibes
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage Style")

})

//too cool for old school - back to og style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Style is original");

})
