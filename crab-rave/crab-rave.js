var bonetrousle = new Howl({
	src: ["audio/crab-rave.wav"],
	loop: true,
	onload: function () {
		update_time = new Date();
		requestAnimationFrame(update);
	}
});

var update_time = new Date();

var percent_time = 0.48000;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.001;
		bonetrousle.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(1) + "%";
	}

	document.getElementById("caption").style.top = (
		rate - Math.random() * rate * 2 + 104 - document.getElementById("caption").clientHeight / 2
	) + "px";
	document.getElementById("caption").style.left = (rate - Math.random() * rate * 2) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
}
