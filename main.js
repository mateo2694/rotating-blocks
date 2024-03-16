import "./style.css";
import artLogo from "./assets/art-240.svg";
import p5 from "p5";

document.querySelector("#app").innerHTML = `
  <img src=${artLogo} alt="Sketch logo" />
  <div id="canvas-container" />
`;

let sketch = (sk) => {
  sk.setup = () => {
    sk.createCanvas(400, 400);
    sk.background(180);
    sk.rectMode(sk.CENTER);
  };

  sk.draw = () => {
    sk.translate(sk.width / 2, sk.height / 2);
    sk.rect(0, 0, 100, 50);
  };
};

new p5(sketch, document.getElementById("canvas-container"));
