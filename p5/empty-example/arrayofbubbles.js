// define bubbles as an array
let bubbles = [];

// setup your bubble objects
function setup() {
   createCanvas(600, 400);
   for (let i = 0; i < 100; i++) {
     bubbles[i] = {
       x: random(0, width),
       y: random(0, height),
       c: 175,
       bubbleSize: 20
     };
   }
}
function draw (){
   background(0);
   for(let i=0; i<bubbles.length; i++)
   {
      fill(bubbles[i].c);
      ellipse (bubbles[i].x, bubbles[i].y, bubbles[i].bubbleSize);
      bubbles[i].x += random(-2,2);
      bubbles[i].y += random(-2,2);
   }
}