import {getRandomValue, clearCanvas } from './aux';
import canvas from './canvasSetUp';
import Ball from './Ball';


let balls = []; // define an array to hold the balls

canvas.element.addEventListener('click', function(event) {
  var xspeed = getRandomValue();
  var yspeed = getRandomValue();
  balls.push(new Ball(canvas, event.layerX, event.layerY, xspeed , yspeed)); // add a new instance
});

// Update canvas
(function update() {
  clearCanvas(canvas);

  balls.forEach(function(ball){
    ball.draw(canvas.ctx()); // this will draw current ball
    ball.update(); // this will update its position
  });

  requestAnimationFrame(update);
})();

