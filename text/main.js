var canvas = $("canvas")[0],
    context = canvas.getContext('2d'),
    text = 'HTML5';

context.font = '50pt Arial';
context.globalAlpha = 0.5; // which must be a number between 0(fully transparent), and 1.0(fully opaque).
context.lineJoin = 'round';
context.fillStyle = '#093';
context.strokeStyle = '#093';

context.fillText(text, canvas.width/2 - 150, canvas.height/2 + 75);
// context.strokeText(text, canvas.width/2 - 150, canvas.height/2 + 75);

context.strokeRect(75, 100, 200, 200);
context.fillRect(325, 100, 200, 200);

function trunShadowsOff() {
  context.shadowColor = undefined;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
}

function trunShadowsOn() {
  context.shadowColor = 'rgba(0,0,0,0.8)';
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 10;
}

trunShadowsOn();
context.canvas.onmousedown = function(e) {
  context.clearRect(0, 0, canvas.width, 320);
};
