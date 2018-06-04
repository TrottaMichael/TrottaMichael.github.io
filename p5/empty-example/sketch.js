{
var bubbleSize = 40;

var bubble1X, bubble1Y;
var bubble2X, bubble2Y

function setup() {
  createCanvas(500,400);
  bubble1 =  random(0, width);
  bubble1Y = random(0, height);
  bubble2X = random(0, width);
  bubble2Y = random(0, height);

}

function draw() {
  background(0);
  fill("blue");

  ellipse(bubble1X, bubble1Y, bubbleSize, bubbleSize);
  ellipse(bubble2X, bubble2Y, bubbleSize, bubbleSize);


  bubble1X += random(-2, 2);
  bubble1Y += random(-2, 2);
  bubble2X += random(-2, 2);
  bubble2Y += random(-2, 2);
}
}