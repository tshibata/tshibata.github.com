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
var HEIGHT = 480;
var svg;
var mouseX;
var lost;
var got;
var score;
window.onload = function() {
	svg = Table();
	document.getElementById("game").appendChild(svg);
	mouseX = WIDTH / 2;
	svg.onmousemove = function(e) {
		mouseX = e.pageX;
	};
	lost = 0;
	got = 0;
	score = Score(got + " - " + lost);
	svg.appendChild(score);
	setTimeout(play, 1000);
};
function play() {
	svg.removeChild(score);
	svg.PuckVisibility = "visible";
	var youX = mouseX, youDx = 0;
	var foeX = WIDTH / 2, foeDx = 0;
	var puckX, puckY;
	svg.PuckX = puckX = WIDTH / 2 + (Math.random() - 0.5) * 130;
	svg.PuckY = puckY = HEIGHT / 2;
	var dx, dy;
	dx = Math.random() * 10 - 5;
	if (Math.random() < 0.5) {
		dy = -3 - Math.random() * 2;
	} else {
		dy = 3 + Math.random() * 2;
	}
	var iteration;
	iteration = setInterval(function() {
		youDx = mouseX - youX;
		if (youX + youDx < 30) {
			youDx = 30 - youX;
		} else if (WIDTH - 30 < youX + youDx) {
			youDx = WIDTH - 30 - youX;
		}
		foeDx = puckX - foeX;
		if (foeDx < -3) {
			foeDx = -3;
		} else if (3 < foeDx) {
			foeDx = 3;
		}
		var t, dt;
		for (t = 1; 0 < t; t -= dt) {
			var tLeft = dx < 0 ? (25 - puckX) / dx : Infinity;
			var tRight = 0 < dx ? ((WIDTH - 25) - puckX) / dx : Infinity;
			var tTop = dy < 0 ? (25 - puckY) / dy : Infinity;
			var tBottom = 0 < dy ? ((HEIGHT - 25) - puckY) / dy : Infinity;
			var tYou = collision(puckX - youX, puckY - 400, dx - youDx, dy, 20 + 25);
			var tFoe = collision(puckX - foeX, puckY - 80, dx - foeDx, dy, 20 + 25);
			if (tLeft <= t && tLeft < tRight && tLeft < tTop && tLeft < tBottom && tLeft < tYou && tLeft < tFoe) {
				dt = tLeft;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				foeX = foeX + foeDx * dt;
				dx = - dx;
			} else if (tRight <= t && tRight < tTop && tRight < tBottom && tRight < tYou && tRight < tFoe) {
				dt = tRight;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				foeX = foeX + foeDx * dt;
				dx = - dx;
			} else if (tTop <= t && tTop < tBottom && tTop < tYou && tTop < tFoe) {
				if (100 <= puckX && puckX < 220) {
					clearInterval(iteration);
					got++;
					if (got < 7) {
						setTimeout(play, 1000);
					}
					score = Score(got + " - " + lost);
					svg.appendChild(score);
					svg.PuckVisibility = "hidden";
					break;
				} else {
					dt = tTop;
					puckX = puckX + dx * dt;
					puckY = puckY + dy * dt;
					youX = youX + youDx * dt;
					foeX = foeX + foeDx * dt;
					dy = - dy;
				}
			} else if (tBottom <= t && tBottom < tYou && tBottom < tFoe) {
				if (100 <= puckX && puckX < 220) {
					clearInterval(iteration);
					lost++;
					if (lost < 7) {
						setTimeout(play, 1000);
					}
					score = Score(got + " - " + lost);
					svg.appendChild(score);
					svg.PuckVisibility = "hidden";
					break;
				} else {
					dt = tBottom;
					puckX = puckX + dx * dt;
					puckY = puckY + dy * dt;
					youX = youX + youDx * dt;
					foeX = foeX + foeDx * dt;
					dy = - dy;
				}
			} else if (tYou <= t && tYou < tFoe) {
				dt = tYou;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				foeX = foeX + foeDx * dt;
				var d = reflection(puckX - youX, puckY - 400, dx - youDx, dy);
				dx = d.x + youDx;
				dy = d.y;
				// stop the mallet. don't let it go over the puck.
				youDx = 0;
			} else if (tFoe <= t) {
				dt = tFoe;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				foeX = foeX + foeDx * dt;
				var d = reflection(puckX - foeX, puckY - 80, dx - foeDx, dy);
				dx = d.x + foeDx;
				dy = d.y;
				// stop the mallet. don't let it go over the puck.
				foeDx = 0;
			}else {
				dt = t;
				puckX = puckX + dx * dt;
				puckY = puckY + dy * dt;
				youX = youX + youDx * dt;
				foeX = foeX + foeDx * dt;
			}
		}
		svg.PuckX = puckX;
		svg.PuckY = puckY;
		svg.YouX = youX;
		svg.FoeX = foeX;
	}, 30);
};

