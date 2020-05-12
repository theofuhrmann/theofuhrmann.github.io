let xoff = 0.0;

function setup() {
  var canvas = createCanvas(375, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function windowResized() {
	resizeCanvas(400, windowHeight);
}

function draw() {
  blendMode(BLEND);
  background(217,195,165);
  noStroke();
  blendMode(MULTIPLY);
  fill(253, 253, 149);
  wave(250,375, 0.05);
  fill(104, 145, 195);
  wave(250,375, 0.03);
  fill(246, 146, 188);
  wave(250,375, 0.07);
}

function wave(x0, x1, t) {
  beginShape();
  let yoff = 0;
  
  for (let y = 0; y <= height; y += 15) {
    let x = map(noise(yoff, xoff), 0, 1, x0, x1);
    vertex(x, y);
    yoff += t;
  }
  let x = map(noise(yoff, xoff), 0, 1, x0, x1);
  vertex(x,height);
  xoff += 0.002;
  vertex(0, height);
  vertex(0,0);
  endShape(CLOSE);
}
