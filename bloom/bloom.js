var bloom = new Howl({
	src: ["audio/bloom_loop.wav"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.0428571;

var inv_rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= (1 / inv_rate) * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		inv_rate += 0.00001;
		bloom.rate(1 / inv_rate);
		document.getElementById("speed").innerHTML = "speed: " + (1 / inv_rate * 100).toFixed(2) + "%";
		document.getElementById("bloom").style.opacity = 1 / inv_rate / inv_rate;
	}

	requestAnimationFrame(update);
}

function run() {
	bloom.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
