import "./style.css";
import artLogo from "./src/assets/art-240.svg";
import p5 from "p5";
// import sketch from "./src/sketch";

document.querySelector("#app").innerHTML = `
  <header class="header">
    <img src=${artLogo} alt="Sketch logo" class="logo" />
    <h1 class="text">Rotating Blocks</h1>
  </header>
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
