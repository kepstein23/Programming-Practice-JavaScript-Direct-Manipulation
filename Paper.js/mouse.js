var myPath;
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var colorIndex = 0;
var strokeWidth = 5;

function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = colors[colorIndex];
	myPath.strokeWidth = strokeWidth
	myPath.add(event.point);
}

function onMouseUp(event) {
	myPath.add(event.point);
	colorIndex++;
	if (colorIndex === colors.length) {
		colorIndex = 0;
	}
	strokeWidth += 5;
}