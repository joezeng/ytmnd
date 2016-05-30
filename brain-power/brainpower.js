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



function loading(ticks) {
	if (ticks > 40) {
		return 100;
	} else {
		var frac = ticks / 40
		return (1 - Math.pow(1 - frac, 2)) * 100;
	}
}


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
		}
	}

	var fractick = (1 - (rate_timer / percent_time));

	if (looping == false) {
		document.getElementById("brainpower_bg").style.height = 5 * loading(ticks + fractick) + "px";
		document.getElementById("brainpower_bg").style.opacity = (ticks + fractick) / 40;
		document.getElementById("speed").innerHTML = "speed: " + loading(ticks + fractick).toFixed(1) + "%&nbsp;";
	} else {
		document.getElementById("brainpower_text").innerHTML = brainpower_text[ticks % 128];
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(1) + "%&nbsp;";
	}

	// background
	if (looping == false && ticks < 40) {
		if (ticks % 4 < 2) {
			var grad = 1 - (ticks % 4 + fractick) / 2;
			var rgb = Math.floor(grad * 128) + 127;
			document.getElementById("brainpower_bg").style.backgroundColor = "rgba(" +
				rgb + "," + rgb + "," + rgb + ", 1)";
		}
		document.getElementById("brainpower_text").style.color = "black";
		document.getElementById("brainpower_text").innerHTML = "LOAD ING";
	} else if (looping == false && ticks < 48) {
		if (ticks % 2 < 1) {
			var grad = 1 - fractick;
			var rgb = Math.floor(grad * 192) + 63;
			document.getElementById("brainpower_bg").style.backgroundColor = "rgba(" +
				rgb + "," + rgb + "," + rgb + ", 1)";
		}
		document.getElementById("brainpower_text").innerHTML = "HERE W E G O";
	} else if (looping == false) {
		var grad = 1 - (fractick * 2 - Math.floor(fractick * 2)) / 2;
		var rgb = Math.floor(grad * 255);
		document.getElementById("brainpower_bg").style.backgroundColor = "rgba(" +
			rgb + "," + rgb + "," + rgb + ", 1)";
		document.getElementById("brainpower_text").innerHTML = "HERE W E G O";
	} else {
		document.getElementById("brainpower_text").style.top = "0px";
		document.getElementById("brainpower_bg").style.backgroundColor = "black";
		document.getElementById("brainpower_text").style.color = "white";
	}

	var rumble_rate = (rate - 1) * 10;

	var offset_height = getComputedStyle(document.getElementById("brainpower_text")).height;
	if (looping == false && ticks >= 40)
		document.getElementById("brainpower_text").style.top = (rumble_rate - Math.random() * rumble_rate * 2) -
		(parseInt(offset_height.slice(0, offset_height.length - 2)) / 2) + 240 + "px";
	else
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
