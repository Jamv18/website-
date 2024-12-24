
function mousePressed() {
  console.log(`Mouse clicked at: (${mouseX}, ${mouseY})`);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let laughter;

let x = 100;
let y = 100;
let xspeed = 6.5;
let yspeed = -1;

redValue = 0;
redValueGoingUp = true;
  greenValue = 0;
  blueValue = 200;

// Load two images
function preload() {
  laughter = loadImage('../images/guy.png');
}

function draw() {
  
  background(redValue, greenValue, blueValue);
  image(laughter, x, y, 100, 160);
  
  // Move x and y
  x = x + xspeed;
  y = y + yspeed;
  
  // If image hits right or left edge
  if (x < 0 || x > width - 100) {
    // Turn around!
    xspeed = -xspeed;    
  }

  if (y < 0 || y > height - 160) {
    // Turn around!
    yspeed = -yspeed;    
  }
   
  if (
      (mouseX >= x-100 && mouseX <= x+100) 
      &&
      (mouseY >= y-100 && mouseY <= y+100)) {
      console.log(`Background color values: ${redValue}, 0, 200`);
      if(redValue >= 255 ){
        redValueGoingUp = false
      }
      if (redValue <= 0){
        redValueGoingUp = true
      }
      if(redValueGoingUp == true){
        redValue = redValue+2
      }
      else{
        redValue = redValue-2
      }
      
      //changeBackground(redValue+10);
  }



// function draw() {
//   background("aqua");
//   //when mouse button is pressed, circles turn black
//   if (mouseIsPressed === true) {
//       fill(0);
//     } else {
//       fill(255);
//     }    
//     //white circles drawn at mouse position
//     circle(mouseX, mouseY, 100);
// }


