var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var particle = [];
var flowField = [];
function setup() {
  createCanvas(300, 300);
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowField = new Array(cols * rows);

  for (var i = 0; i < 100; i++) {
    particle[i] = new Particle();

    background(255);
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;

      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowField[index] = v;
      xoff += inc;
    //   stroke(0, 40);
    //   push();
    //   translate(x * scl, y * scl);
    //   rotate(v.heading());
    //   strokeWeight(1);
    //   line(0, 0, scl, 0);
    //   pop();
    }
    yoff += inc;
    zoff += 0.001;
  }
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowField);
    particle[i].update();
    particle[i].show();
    particle[i].edges();
  }
  //noLoop();
}
