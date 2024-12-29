
function mousePressed() {
  console.log(`Mouse clicked at: (${mouseX}, ${mouseY})`);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let font;
let fontsize = 40;


let laughter;

let x = 100;
let y = 100;
let yspeed = 25.5;
let xspeed = 25.5;

redValue = 0;
redValueGoingUp = true;
  greenValue = 0;
  blueValue = 200;

var leftPad_y = 100
var rightPad_y = 100
point_increment = 100

player_left_score = 0
player_right_score = 0

// Load two images
function preload() {
  laughter = loadImage('../images/guy.png');
  pickle = loadImage('../images/pickle.png');
}

function draw() {

  pad_height = height/4;
  pad_width = pad_height/4;
  leftPad_height = height/4;
  //leftPad_y = (height/2)-(leftPad_height/2);

  
  background(redValue, greenValue, blueValue);
  image(laughter, x, y, 100, 160);
  

  // RECTANGLE CODE STARTS HERE

  // Draw rectangle on top of square
  // This appears in front of the square because the function is called
  // after (further down)
  // Switching the order of square and rect will make the square appear on
  // top of the rectangle
  // x, y, width, height
  noFill(); // Set fill to transparent
  leftPad = rect(0, leftPad_y , pad_width, pad_height);
  leftPad_pickle = image(pickle, 0, leftPad_y , pad_width, pad_height);
  rightPad = rect(width-pad_width, rightPad_y  , pad_width, pad_height);

  // REACTANGLE CODE ENDS HERE


  
  // Move x and y
  x = x + xspeed;
  y = y + yspeed;

  console.log("pad width",pad_width);
  width_minus_pad = width - (2*pad_width);
  // If image hits right PAD
  if (x <= pad_width && (y >= leftPad_y) && y <= (leftPad_y + pad_height)) {
    // Turn around!
    xspeed = -xspeed;
  // If image hits left PAD
  } else if (x > width_minus_pad && (y >= rightPad_y && y <= rightPad_y + pad_height)) {
    // Turn around!
    xspeed = -xspeed;
  }
  
  //
  // SCORING SYSTEM
  //
  if (x < 0) {
    player_right_score += point_increment
    x = width/2
    y = height/2
  }
  if (x > width) {
    // Turn around!
    player_left_score += point_increment
    x = width/2
    y = height/2
  }
  fill("white");
  text("Jackson", (width/2)-90, 20);
  text(player_left_score, (width/2)-70, 80);
  text("Miles", (width/2)+90, 20);
  text(player_right_score, (width/2)+90, 80);

  //// OLD CODE THAT CAUSED IT TO BOUNCE OFF THE WALLS
  // // If image hits right or left edge
  // if (x < 0 || x > width) {
  //   // Turn around!
  //   xspeed = -xspeed;    
  // }
  // if (x < 0 || x > width) {
  //   // Turn around!
  //   xspeed = -xspeed*4;    
  // }

  // If image hits top or bottom edge
  if (y < 0 || y > height - 160) {
    // Turn around!
    yspeed = -yspeed;    
  }
  
  //
  // THIS CHANGES COLOR OF BACKGROUND
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
  }

}



function keyPressed() {

  if (keyCode === LEFT_ARROW) {

    x -= 5; // Move left

  } else if (keyCode === RIGHT_ARROW) {

    x += 5; // Move right

  } else if (keyCode === UP_ARROW) {
    console.log('UP_ARROW'),leftPad_y;
    rightPad_y -= 50;
    console.log('UP_ARROW'),leftPad_y;

  } else if (keyCode === DOWN_ARROW) {

    rightPad_y += 50;

  }
  /////////////////////////////
  else if (key === 'a') {

    x -= 5; // Move left

  } else if (key === 'd') {

    x += 5; // Move right

  } else if (key === 'w') {
    console.log('UP_ARROW'),leftPad_y;
    leftPad_y -= 50;
    console.log('UP_ARROW'),leftPad_y;

  } else if (key === 's') {

    leftPad_y += 50;

  }

} 