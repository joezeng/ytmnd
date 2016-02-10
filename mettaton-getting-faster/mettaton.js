var mettaton = new Howl({
	src: ["audio/metalcrusher.ogg", "audio/metalcrusher.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var divwidth = document.getElementById('rumbling_mettaton').offsetWidth;
	var divheight = document.getElementById('rumbling_mettaton').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		mettaton.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}

	document.getElementById("mettaton").style.top = (rate - Math.min(Math.max(parseInt(Math.random() * rate * 2), -48), 48)+(divheight-500)/2) + "px";
	document.getElementById("mettaton").style.left = (rate - Math.min(Math.max(parseInt(Math.random() * rate * 2), -48), 48)+(divwidth-500)/2) + "px";
	requestAnimationFrame(update);
}

function run() {
	mettaton.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
