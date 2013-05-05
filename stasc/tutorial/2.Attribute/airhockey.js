window.onload = function() {
	var svg = Table();
	document.getElementById("game").appendChild(svg);
	svg.onmousemove = function(e) {
		svg.YouX = e.pageX;
	};
};

