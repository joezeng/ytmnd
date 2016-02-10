var flowey = new Howl({
	src: ["audio/nobody.ogg", "audio/nobody.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;
var floweys = ["You IDIOT.", "You haven't learned a thing.", "Howdy! I'm FLOWEY. FLOWEY the FLOWER!", "It's KILL or BE killed.", "flowey.exe", "It's me, FLOWEY.", "...what?", "You really ARE an idiot.", "Your old friend FLOWEY...", "FILE 2 SAVED", "FILE 3 SAVED", "FILE 6 SAVED", "FILE 3 LOADED", "FILE 4 LOADED", "FILE 6 LOADED", "FILE 2 LOADED", "You're HOPELESS.", "I am the GOD of this world.", "But nobody came."]

function update() {

	var divwidth = document.getElementById('flowey_shaking').offsetWidth;
	var divheight = document.getElementById('flowey_shaking').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		flowey.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if (rate <= 10) {
		document.getElementById("flowey").style.display = "none";
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	} else { 
		document.getElementById("flowey").style.display = "block";
		document.title = randomChoice(floweys);
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	}
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function run() {
	flowey.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
