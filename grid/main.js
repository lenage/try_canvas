var context = $("#demo")[0].getContext('2d');

// Functions ....................

function drawGrid(context, color, stepx, stepy) {
  context.strokeStyle = color;
  context.lineWidth = 0.5;

  for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.stroke();
  }

  for (var j = stepy + 0.5; j < context.canvas.height; j += stepy) {
    context.beginPath();
    context.moveTo(0, j);
    context.lineTo(context.canvas.width, j);
    context.stroke();
  }
}

// Initialization ....................
drawGrid(context, 'lightgray', 10, 10);
context.beginPath();
context.lineWidth = 10;
context.arc(context.canvas.width/2, context.canvas.height/2, 100, 0, Math.PI*1.5, true);
context.stroke();
