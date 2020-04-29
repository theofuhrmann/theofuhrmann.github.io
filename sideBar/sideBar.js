function setup() {
  var canvas = createCanvas(400, windowHeight);
  canvas.parent('sketch');
}

function draw() {
  blendMode(BLEND);
  background(255);
  //noStroke();
  blendMode(MULTIPLY);
  noStroke();
  translate(-0.9*width/2,0.9*height/2);
  fill(0,255,255);
  drawLiq(19,35,23,10000);
  fill(255,255,0);
  drawLiq(15,45,20,20000);
  fill(255,0,255);
  drawLiq(17,25,17,50000);
}


function drawLiq(vNnum, nm, sm, fcm){
  push();
  rotate(frameCount/(fcm*1000));
  let dr = TWO_PI/vNnum;
  beginShape();
  for(let i = 0; i  < vNnum + 3; i++){
    let ind = i%vNnum;
    let rad = dr *ind;
    let r = height + noise(frameCount/nm/50 + ind) * height*0.085 + sin(frameCount/sm + ind)*height*0.025;
    r *= 1.25;
    curveVertex(cos(rad)*r, sin(rad)*r);
  }
  endShape();
  pop();
}
