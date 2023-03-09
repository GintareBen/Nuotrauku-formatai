function setup() {
    // first frame
    createCanvas(windowWidth, windowHeight); 
    background("crimson")//x,y
  }
  function windowResized() {
    // first frame
    createCanvas(windowWidth, windowHeight);
    background("crimson") //x,y
}
//   frames per seconds
  function mouseDragged() {
    fill(random(255), random(255), random(255));
    stroke("white")
    strokeWeight(5)
    ellipse(mouseX, mouseY, 55); // x,y, radius
  }