var intro = new Howl({
	src: ["audio/brainpower_intro.mp3"],
	loop: false,
	onload: run,
	onend: function() {
		looping = true;
		// reset the tick timer
		ticks = 0;
		rate_timer = percent_time;
		loop.play();
	},
});

var loop = new Howl({
	src: ["audio/brainpower_loop.mp3"],
	loop: true,
});


var update_time = new Date();
var percent_time = 60 / 173 / 4;

var ticks = 0;

var looping = false;

var rate = 1;
var rate_timer = percent_time;


function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		ticks += 1;
		if (looping) {
			rate += 0.0005;
			loop.rate(rate);
			document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%&nbsp;";
		}
	}

	if (looping == false) {
		document.getElementById("rumbling_oooo").style.opacity = Math.min(1, (ticks + (1 - (rate_timer / percent_time))) / 32);
	} else {
		document.getElementById("brainpower_text").innerHTML = brainpower_text[ticks % 128];
	}

	if (ticks % 4 < 2) {
		var grad = 1 - (ticks % 4 + (1 - (rate_timer / percent_time))) / 2;
		document.getElementById("rumbling_oooo").style.backgroundColor = "rgba(" +
			grad * 255 + "," + grad * 255 + "," + grad * 255 + ", 1)";
	}

	var rumble_rate = (rate - 1) * 10;

	var offset_height = getComputedStyle(document.getElementById("brainpower_text")).height;
	document.getElementById("brainpower_text").style.top = (rumble_rate - Math.random() * rumble_rate * 2) -
		(parseInt(offset_height.slice(0, offset_height.length - 2)) / 2) + 250 + "px";
	document.getElementById("brainpower_text").style.left = (rumble_rate - Math.random() * rumble_rate * 2) + "px";

	requestAnimationFrame(update);
}

function run() {
	update_time = new Date();
	requestAnimationFrame(update);
	intro.play();
}


var brainpower_text = [
	"<span style=\"font-size: 480px;\">O</span>",
	"<span style=\"font-size: 480px;\">O</span>",
	"<span style=\"font-size: 480px;\">O</span>",
	"<span style=\"font-size: 480px;\">O</span>",
	"o",
	"oo",
	"ooo",
	"oooo",
	"oooo<br>o",
	"oooo<br>oo",
	"oooo<br>ooo",
	"oooo<br>oooo",
	"oooo<br>oooo<br>o",
	"oooo<br>oooo<br>oo",
	"oooo<br>oooo<br>ooo",
	"oooo<br>oooo<br>oooo",
	"A",
	"AA",
	"AAA",
	"AAAA",
	"E",
	"E",
	"A&nbsp;",
	"A&nbsp;",
	"&nbsp;A",
	"&nbsp;A",
	"I&nbsp;",
	"I&nbsp;",
	"&nbsp;A",
	"&nbsp;A",
	"U",
	"U",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"o",
	"oo",
	"ooo",
	"oooo",
	"oooo<br>o",
	"oooo<br>oo",
	"oooo<br>ooo",
	"oooo<br>oooo",
	"oooo<br>oooo<br>o",
	"oooo<br>oooo<br>oo",
	"oooo<br>oooo<br>ooo",
	"oooo<br>oooo<br>oooo",
	"A",
	"AA",
	"E",
	"E",
	"O",
	"O",
	"A&nbsp;",
	"A&nbsp;",
	"&nbsp;A",
	"&nbsp;A",
	"U&nbsp;",
	"U&nbsp;",
	"&nbsp;U",
	"&nbsp;U",
	"A",
	"A",
	"<span style=\"font-size: 480px;\">E</span>",
	"<span style=\"font-size: 480px;\">E</span>",
	"<span style=\"font-size: 480px;\">E</span>",
	"<span style=\"font-size: 480px;\">E</span>",
	"<span style=\"font-size: 480px;\">E</span>",
	"<span style=\"font-size: 480px;\">E</span>",
	"e",
	"ee",
	"eee",
	"eee",
	"eee<br>e",
	"eee<br>ee",
	"eee<br>ee",
	"eee<br>ee<br>e",
	"eee<br>ee<br>ee",
	"eee<br>ee<br>eee",
	"A",
	"AA",
	"AAA",
	"AAAA",
	"E",
	"E",
	"A&nbsp;",
	"A&nbsp;",
	"&nbsp;E",
	"&nbsp;E",
	"I&nbsp;",
	"I&nbsp;",
	"&nbsp;E",
	"&nbsp;E",
	"A",
	"A",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"<span style=\"font-size: 480px;\">JO</span>",
	"o",
	"oo",
	"ooo",
	"ooo",
	"ooo<br>o",
	"ooo<br>oo",
	"ooo<br>oo",
	"ooo<br>ooo",
	"ooo<br>ooo<br>o",
	"ooo<br>ooo<br>o",
	"ooo<br>ooo<br>oo",
	"ooo<br>ooo<br>ooo",
	"E",
	"EE",
	"EEE",
	"EEE",
	"O",
	"O",
	"A",
	"A",
	"AA",
	"AAA",
	"AAAA",
	"AAAA",
	"AAAA<br>A",
	"AAAA<br>AA",
	"AAAA<br>AAA",
	"AAAA<br>AAAA",
]
