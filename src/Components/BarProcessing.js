import React from "react";
import Sketch from "react-p5";
import "../App.css";

class BarProcessing extends React.Component {
  xoff = 0.0;
  yoff = 0.0;
  mobile = false;

  setup = (p5, parentRef) => {
    if (window.innerWidth < 800) {
      this.canvas = p5.createCanvas(window.innerWidth, 200).parent(parentRef);
      this.mobile = true;
    } else {
      this.canvas = p5.createCanvas(375, window.innerHeight);
    }
    this.canvas.position(0, 0);
    this.canvas.style("z-index", "-1");
    this.canvas.style("position", "fixed");
  };

  windowResized = (p5) => {
    if (p5.windowWidth < 800) {
      p5.resizeCanvas(window.innerWidth, 200);
      this.mobile = true;
    } else {
      p5.resizeCanvas(375, window.innerHeight);
      this.mobile = false;
    }
  };

  draw = (p5) => {
    p5.blendMode(p5.BLEND);
    p5.background(217, 195, 165);
    p5.noStroke();
    p5.blendMode(p5.MULTIPLY);
    p5.fill(253, 253, 149);
    this.wave(p5, 250, 375, 0.05, this.mobile);
    p5.fill(104, 145, 195);
    this.wave(p5, 250, 375, 0.03, this.mobile);
    p5.fill(246, 146, 188);
    this.wave(p5, 250, 375, 0.07, this.mobile);
  };

  wave = (p5, x0, x1, t, m) => {
    if (m) {
      p5.beginShape();
      this.xoff = 0;

      for (let x = 0; x <= p5.width; x += 15) {
        let y = p5.map(p5.noise(this.xoff, this.yoff), 0, 1, 100, 200);
        p5.vertex(x, y);
        this.xoff += t;
      }
      let y = p5.map(p5.noise(this.xoff, this.yoff), 0, 1, 100, 200);
      p5.vertex(p5.width, y);
      this.yoff += 0.002;
      p5.vertex(p5.width, 0);
      p5.vertex(0, 0);
      p5.endShape(p5.CLOSE);
    } else {
      p5.beginShape();
      let yoff = 0;

      for (let y = 0; y <= p5.height; y += 15) {
        let x = p5.map(p5.noise(yoff, this.xoff), 0, 1, x0, x1);
        p5.vertex(x, y);
        yoff += t;
      }
      let x = p5.map(p5.noise(yoff, this.xoff), 0, 1, x0, x1);
      p5.vertex(x, p5.height);
      this.xoff += 0.002;
      p5.vertex(0, p5.height);
      p5.vertex(0, 0);
      p5.endShape(p5.CLOSE);
    }
  };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        windowResized={this.windowResized}
        style={{ position: "sticky" }}
      />
    );
  }
}

export default BarProcessing;
