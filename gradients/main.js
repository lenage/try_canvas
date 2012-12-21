var canvas = $("#demo")[0],
    context = canvas.getContext('2d'),
    gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    // gradient = context.createRadialGradient(canvas.width/2, canvas.height, 10, canvas.width/2, 0, 100);

gradient.addColorStop(0, '#fff');
gradient.addColorStop(1, 'green');

context.fillStyle = gradient;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();
