//Vars
var canvas = $("#canvas")[0];
var points = [];
var numPoints = 100;
var i;
var canvas;
var context;
var width;
var height;
var bounce = -0.75;

// Get canvas and context values
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
context = canvas.getContext("2d");

// Create the points
for (i = 0; i < numPoints; i += 1) {
	points.push({
		x: Math.random() * width,
		y: Math.random() * height,
		vx: Math.random() * 10 - 5,
		vy: Math.random() * 10 - 5
	});
}

//Define our update and draw intervals

//update() will do the physics behind the simulation

function update() {
	var i, point;
	for (i = 0; i < numPoints; i += 1) {
		point = points[i];
		point.x += point.vx;
		point.y += point.vy;
		if (point.x > width) {
			point.x = width;
			point.vx *= bounce;
		} else if (point.x < 0) {
			point.x = 0;
			point.vx *= bounce;
		}
		if (point.y > height) {
			point.y = height;
			point.vy *= bounce;
		} else if (point.y < 0) {
			point.y = 0;
			point.vy *= bounce;
		}
	}
} // end update()

//declare our draw() function

function draw() {
	context.clearRect(0, 0, width, height);
	var i, point;
	for (i = 0; i < numPoints; i += 1) {
		point = points[i];
		context.beginPath();
		context.arc(point.x, point.y, 2, 0, Math.PI * 2, false);
		context.stroke();
		context.strokeStyle = "#c04876";
		context.fill();
		context.fillStyle = "#c04876";
	}
} //end draw()

setInterval(function() {
	update();
	draw();
}, 1000 / 22);