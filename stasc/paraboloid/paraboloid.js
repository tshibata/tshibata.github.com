function collision(x, y, dx, dy, r) {
	// a black magic in textbook of highschool's math.
	var a = (dx * dx + dy * dy);
	var b = 2 * (x * dx + y * dy);
	var c = x * x + y * y - r * r;
	var d = b * b - 4 * a * c;
	if (0 <= d) {
		var e = Math.sqrt(d);
		var t1 = (-b - e) / (2 * a);
		if (0 <= t1) {
			return t1;
		}
	}
	return Infinity;
}
function reflection(x, y, dx, dy) {
	// another black magic.
	var x1 = x - dx;
	var y1 = y - dy;
	var x2 = (x * x * x1 - y * y * x1 + x * y * y1 + x * y * y1) / (x * x + y * y);
	var y2 = (y * y * y1 - x * x * y1 + y * x * x1 + y * x * x1) / (y * y + x * x);
	return {x:x2 - x, y:y2 - y};
}
var WIDTH = 320;
var HEIGHT = 460;
var BOTTOM = 30;
var screenRate;
var screenLeft;
var screenTop;
var svg;
var mouseX;
var blocks;
var time;
var power;
var score;
var stage;
var alltimeBest;
var todaysBest;
function adjust() {
	var width = window.innerWidth || document.body.clientWidth;
	var height = window.innerHeight || document.body.clientHeight;
	var xRate = width / WIDTH;
	var yRate = height / HEIGHT;
	if (xRate < yRate) {
		screenRate = xRate;
		screenLeft = 0;
		screenTop = (height - HEIGHT * screenRate) / 2;
	} else {
		screenRate = yRate;
		screenLeft = (width - WIDTH * screenRate) / 2;
		screenTop = 0;
	}
	svg.Left = screenLeft + "px";
	svg.Top = screenTop + "px";
	svg.Width = WIDTH * screenRate;
	svg.Height = HEIGHT * screenRate;
	window.scrollTo(0, 0);
}
window.onresize = adjust;
window.onorientationchange = adjust;
window.onload = function() {
	var now = new Date();
	var today = now.getFullYear() * 10000 + now.getMonth() + 100 + now.getDate();
	alltimeBest = 0;
	todaysBest = 0;
	var entries = document.cookie.split(";");
	for (var i = 0; i < entries.length; i++) {
		try {
			var entry = entries[i].split("=");
			var key = entry[0].replace(/(^\s+)|(\s+$)/g, "");
			if (key == "alltime") {
				alltimeBest = parseInt(entry[1]);
			} else if (key == today) {
				todaysBest = parseInt(entry[1]);
			}
		} catch (e) {
		}
	}
	blocks = [];
	svg = Screen();
	svg.Title.AlltimeBest = alltimeBest;
	svg.Title.TodaysBest = todaysBest;
	document.getElementById("game").appendChild(svg);
	adjust();
	mouseX = WIDTH / 2;
	svg.onmousemove = function(e) {
		mouseX = (e.pageX - screenLeft) / screenRate;
	};
	var touchOffset;
	svg.addEventListener("touchstart", function(e) {
		touchOffset = (e.targetTouches[0].pageX - screenLeft) / screenRate - mouseX;
	});
	svg.addEventListener("touchmove", function(e) {
		mouseX = (e.targetTouches[0].pageX - screenLeft) / screenRate - touchOffset;
		e.preventDefault();
	});
	stage = 0;
	initStage();
};
function start() {
	svg.Title = Clear();
	svg.Score = score = 0;
	stage = 0;
	time = 12000;
	svg.Time = "120.00s";
	initStage();
	play(30 + Math.random() * 260, 300, 0, - 2);
}
function initStage() {
	var types = [
		{"color": Red, "calc": function(x){return x;}},
		{"color": Orange, "calc": function(x){return x + 1;}},
		{"color": Yellow, "calc": function(x){return x * 2;}}];
	var layouts = [
		[],
		[1, 1, 0, 0, 0, 0],
		[2, 1, 1, 0, 0, 0],
		[2, 2, 1, 1, 0, 0],
		[2, 2, 2, 1, 1, 0],
		[2, 2, 2, 2, 1, 1]];
	stage++;
	svg.Stage = Stage("Stage " + stage);
	blocks = [];
	for (var y = 0; y < 6; y++) {
		var type = types[layouts[Math.min(stage, layouts.length - 1)][y]];
		for (var x = 1; x < 15; x+=2) {
			var o = {
				"x": x * 21 + 13,
				"y": y * 24 + 40,
				"calc": type.calc,
				"element": type.color(x * 21 + 13, y * 24 + 40),
			};
			blocks.push(o);
			svg.Stage.appendChild(o.element);
		}
		for (var x = 0; x < 15; x+=2) {
			var o = {
				"x": x * 21 + 13,
				"y": y * 24 + 52,
				"calc": type.calc,
				"element": type.color(x * 21 + 13, y * 24 + 52),
			};
			blocks.push(o);
			svg.Stage.appendChild(o.element);
		}
	}
}
function play(puckX, puckY, dx, dy) {
	svg.PuckVisibility = "visible";
	var youX = mouseX, youDx = 0;
	svg.PuckX = puckX;
	svg.PuckY = puckY;
	var iteration;
	var last = Date.now();
	iteration = setInterval(function() {
		var current = Date.now();
		var delay = (current - last) / 30;
		last = current;
		dy += 0.02 * delay;
		youDx = mouseX - youX;
		if (youX + youDx < 5) {
			youDx = 5 - youX;
		} else if (315 < youX + youDx) {
			youDx = 315 - youX;
		}
		var t, dt;
		for (t = delay; 0 < t; t -= dt) {
			var tBlock = Infinity;
			var blockIndex;
			for (var i = 0; i < blocks.length; i++) {
				var j = collision(puckX - blocks[i].x, puckY - blocks[i].y, dx, dy, 10 + 10)
				if (j < tBlock) {
					blockIndex = i;
					tBlock = j;
				}
			}
			var tLeft = dx < 0 ? (10 - puckX) / dx : Infinity;
			var tRight = 0 < dx ? ((WIDTH - 10) - puckX) / dx : Infinity;
			var tTop = dy < 0 ? (- 10 - puckY) / dy : Infinity;
			var tBottom = 0 < dy ? ((HEIGHT - BOTTOM) + 10 - puckY) / dy : Infinity;
			var tYou = collision(puckX - youX, puckY - (HEIGHT - BOTTOM), dx - youDx / delay, dy, 10 + 50);
			if (tBlock <= t && tBlock < tLeft && tBlock < tRight && tBlock < tTop && tBlock < tBottom && tBlock < tYou) {
				dt = tBlock;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt / delay;
				if (dx * dx + dy * dy < 10 * delay) {
					// fast
					var d = reflection(puckX - blocks[blockIndex].x, puckY - blocks[blockIndex].y, dx, dy);
					dx = d.x;
					dy = d.y;
				} else {
					// slow
					var d = reflection(puckX - blocks[blockIndex].x, puckY - blocks[blockIndex].y, dx, dy);
					dx = dx / 2;
					dy = dy / 2;
				}

				power = blocks[blockIndex].calc(power);
				svg.Score = score = score + power;

				(function() {
					var element = blocks[blockIndex].element;
					element.R = 25;
					element.Opacity = 0.9;
					element.Text = power;
					var i = 0;
					var kaboom = setInterval(function() {
						if (i < 15) {
							i++;
							element.R = 10 + i;
							element.Opacity = 1 - i / 16;
						} else {
							svg.Stage.removeChild(element);
							clearInterval(kaboom);
						}
					}, 30);
				})();
				blocks.splice(blockIndex, 1);
			} else if (tLeft <= t && tLeft < tRight && tLeft < tTop && tLeft < tBottom && tLeft < tYou) {
				dt = tLeft;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt / delay;
				dx = - dx;
			} else if (tRight <= t && tRight < tTop && tRight < tBottom && tRight < tYou) {
				dt = tRight;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt / delay;
				dx = - dx;
			} else if (tTop <= t && tTop < tBottom && tTop < tYou) {
				clearInterval(iteration);
				initStage();
				play(puckX, puckY + 350, dx, dy);
				return;
			} else if (tBottom <= t && tBottom < tYou) {
				power = 1;
				clearInterval(iteration);
				svg.PuckVisibility = "hidden";
				play(30 + Math.random() * 260, 300, 0, - 2);
				return;
			} else if (tYou <= t) {
				power = 1;
				dt = tYou;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt / delay;
				var d = reflection(puckX - youX, puckY - (HEIGHT - BOTTOM), dx - youDx / delay, dy);
				dx = d.x + youDx / delay;
				dy = d.y;
				// stop the mallet. don't let it go over the puck.
				youDx = 0;
			}else {
				dt = t;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt / delay;
			}
		}
		svg.PuckX = puckX;
		svg.PuckY = puckY;
		svg.YouX = youX;
		time -= 3 * delay;
		if (time <= 0) {
			time = 0;
			if (alltimeBest < score) {
				alltimeBest = score;
				document.cookie = "alltime=" + score + ";max-age=" + (60 * 60 * 24 * 365 * 100) + ";";
			}
			if (todaysBest < score) {
				todaysBest = score;
				var now = new Date();
				var today = now.getFullYear() * 10000 + now.getMonth() + 100 + now.getDate();
				document.cookie = today + "=" + score + ";max-age=" + (60 * 60 * 24) + ";";
			}
			clearInterval(iteration);
			svg.Title = End();
			svg.Title.AlltimeBest = alltimeBest;
			svg.Title.TodaysBest = todaysBest;
			svg.PuckVisibility = "hidden";
		}
		svg.Time = (Math.floor(time / 10000) % 10).toString()
			+ (Math.floor(time / 1000) % 10)
			+ (Math.floor(time / 100) % 10)
			+ "."
			+ (Math.floor(time / 10) % 10) + Math.floor(time % 10) + "s";
	}, 30);
};

