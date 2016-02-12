var bonetrousle = new Howl({
	src: ["audio/mettaton.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.05;

var rate = 0.9;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		var times = Math.floor(-rate_timer / percent_time) + 1;
		rate_timer += percent_time * times;
		rate += 0.01 * times;
		bonetrousle.rate(rate);
		if (rate > 1024) {
			document.getElementById("speed").innerHTML = "speed: ------%";
		} else {
			document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
		}
	}

	document.getElementById("mettaton").style.top = ((rate * 2) - Math.random() * rate * 4) + "px";
	document.getElementById("mettaton").style.left = ((rate * 2) - Math.random() * rate * 4) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
