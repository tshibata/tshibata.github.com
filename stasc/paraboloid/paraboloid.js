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
	blocks = [];
	svg = Screen();
	document.getElementById("game").appendChild(svg);
	adjust();
	mouseX = WIDTH / 2;
	svg.onmousemove = function(e) {
		mouseX = (e.pageX - screenLeft) / screenRate;
	};
	var touchOffset;
	svg.addEventListener("touchstart", function(e) {
		touchOffset = (e.pageX - screenLeft) / screenRate - mouseX;
	});
	svg.addEventListener("touchmove", function(e) {
		mouseX = (e.pageX - screenLeft) / screenRate - touchOffset;
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
	stage++;
	svg.Stage = Stage("Stage " + stage);
	blocks = [];
	for (var y = 0; y < 6; y++) {
		for (var x = 0; x < 13; x++) {
			var o = {
				"x":x * 24 + 16,
				"y":y * 24 + 40,
				"element":Block(x * 24 + 16, y * 24 + 40, (y * 2).toString(16)),
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
	iteration = setInterval(function() {
		dy += 0.02;
		youDx = mouseX - youX;
		if (youX + youDx < 5) {
			youDx = 5 - youX;
		} else if (315 < youX + youDx) {
			youDx = 315 - youX;
		}
		var t, dt;
		for (t = 1; 0 < t; t -= dt) {
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
			var tBottom = 0 < dy ? ((HEIGHT - BOTTOM) - puckY) / dy : Infinity;
			var tYou = collision(puckX - youX, puckY - (HEIGHT - BOTTOM), dx - youDx, dy, 10 + 50);
			if (tBlock <= t && tBlock < tLeft && tBlock < tRight && tBlock < tTop && tBlock < tBottom && tBlock < tYou) {
				dt = tBlock;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				if (dx * dx + dy * dy < 100) {
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

				svg.Score = score = score + power;
				power *= 2;
			} else if (tLeft <= t && tLeft < tRight && tLeft < tTop && tLeft < tBottom && tLeft < tYou) {
				dt = tLeft;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				dx = - dx;
			} else if (tRight <= t && tRight < tTop && tRight < tBottom && tRight < tYou) {
				dt = tRight;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				dx = - dx;
			} else if (tTop <= t && tTop < tBottom && tTop < tYou) {
				clearInterval(iteration);
				initStage();
				play(puckX, puckY + 350, dx, dy);
				return;
			} else if (tBottom <= t && tBottom < tYou) {
				power = Math.pow(2, stage - 1);
				clearInterval(iteration);
				svg.PuckVisibility = "hidden";
				play(30 + Math.random() * 260, 300, 0, - 2);
				return;
			} else if (tYou <= t) {
				power = Math.pow(2, stage - 1);
				dt = tYou;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				var d = reflection(puckX - youX, puckY - (HEIGHT - BOTTOM), dx - youDx, dy);
				dx = d.x + youDx;
				dy = d.y;
				// stop the mallet. don't let it go over the puck.
				youDx = 0;
			}else {
				dt = t;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
			}
		}
		svg.PuckX = puckX;
		svg.PuckY = puckY;
		svg.YouX = youX;
		time -= 3;
		if (time <= 0) {
			clearInterval(iteration);
			svg.Title = End();
			svg.PuckVisibility = "hidden";
		}
		svg.Time = (Math.floor(time / 10000) % 10).toString()
			+ (Math.floor(time / 1000) % 10)
			+ (Math.floor(time / 100) % 10)
			+ "."
			+ (Math.floor(time / 10) % 10) + (time % 10) + "s";
	}, 30);
};

