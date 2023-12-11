var snowy = new Howl({
	src: ["audio/snowfall.opus"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.05;

var inv_rate = 1;
var rate_timer = percent_time;

function update() {
	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= delta / 1000;

	while (rate_timer <= 0) {
		rate_timer += percent_time;
		inv_rate += 0.00001;
		snowy.rate(1 / inv_rate);
		document.getElementById("speed").innerHTML =
			"speed: " + ((1 / inv_rate) * 100).toFixed(2) + "%";
		document.getElementById("snowy").style.opacity =
			1 / inv_rate / inv_rate;
	}

	setTimeout(update, 10);
}

function run() {
	snowy.play();
	update_time = new Date();
	setTimeout(update, 10);
}
