let xoff = 0.0;
let yoff = 0.0;

let mobile = false;

function setup() {
  var canvas = createCanvas(375, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function windowResized() {
  if (windowWidth < 800) {
    resizeCanvas (windowWidth, 300);
    mobile = true;
  } else {
    resizeCanvas(400, windowHeight);
    mobile = false;
  }
}

function draw() {
  blendMode(BLEND);
  background(217, 195, 165);
  noStroke();
  blendMode(MULTIPLY);
  fill(253, 253, 149);
  wave(250, 375, 0.05, mobile);
  fill(104, 145, 195);
  wave(250, 375, 0.03, mobile);
  fill(246, 146, 188);
  wave(250, 375, 0.07, mobile);
}

function wave(x0, x1, t, m) {
  if (mobile) {
    beginShape();
    let xoff = 0;

    for (let x = 0; x <= width; x += 15) {
      let y = map(noise(xoff, yoff), 0, 1, 100, 200);
      vertex(x, y);
      xoff += t;
    }
    let y = map(noise(xoff, yoff), 0, 1, 100, 200);
    vertex(width, y);
    yoff += 0.002;
    vertex(width, 0);
    vertex(0, 0);
    endShape(CLOSE);
  }
  else {
    beginShape();
    let yoff = 0;

    for (let y = 0; y <= height; y += 15) {
      let x = map(noise(yoff, xoff), 0, 1, x0, x1);
      vertex(x, y);
      yoff += t;
    }
    let x = map(noise(yoff, xoff), 0, 1, x0, x1);
    vertex(x, height);
    xoff += 0.002;
    vertex(0, height);
    vertex(0, 0);
    endShape(CLOSE);
  }
}
