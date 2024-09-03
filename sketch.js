function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("purple");
    fill("pink");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  