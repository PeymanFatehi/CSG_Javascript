var piraat = {
x:110,
y:100,

stapGrootte: 10,

  teken() {
    fill('steelblue');
    ellipse(this.x,this.y,100);

},


beweeg() {
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.stapGrootte;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.stapGrootte;
  }
  if (keyIsDown(UP_ARROW)) {
    this.y -= this.stapGrootte;
  }
  if (keyIsDown(DOWN_ARROW)) {
    this.y += this.stapGrootte;
  }

}
}  

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
}

function draw() {
  background(200);
  piraat.beweeg();
  piraat.teken();
};
