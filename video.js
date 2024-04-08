var video;
var playbackRate = 1.0; 

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Auto play is set to" + video.autoplay)
	console.log ("loop is set to " + video.loop)
});


//play
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});


//pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});


//slowwwwwwwwww
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");

	//function to slow it down
	playbackRate -= 0.1;
	video.playbackRate = playbackRate;

	console.log(playbackRate);
});

//I am SPEED
//hints from Jackie during class :look at the video for playback speed - 10%
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	playbackRate += 0.1;
	video.playbackRate = playbackRate;
	console.log(playbackRate)
});


//skippidy-bop-bop (10 seconds)
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	//this function above =  10 seconds//
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute");
    video.muted = !video.muted; // Toggle mute state
});

//change volume (slider thingy)
document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Change");
    var volume = parseFloat(this.value) / 100; // Convert slider value to volume value
    video.volume = volume; // Set video volume
	updateVolumeDisplay();

});


// old school vibes
document.querySelector("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School Style")

})

//too cool for old school - back to og style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Style");

})
