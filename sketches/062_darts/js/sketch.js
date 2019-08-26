let scl = 120;
let rounding = 1;
let direction = 1;
let speed = 0.001; // good speed: 0.00005


let noiseVal;
let counter = 0;

function setup() {
  createCanvas(800, 800);
  stroke(255);
  strokeWeight(2);
  background(0);

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {
  
  background(0,0,0,20);
  noFill(fill);
  
  for (var x = 0; x < height; x = x+scl) {

    for(var y = 0; y < width; y=y+scl){

      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
      
      line (x,y,center_x,center_y);
      line (center_x,center_y,x+scl,y);
      line (x,y+scl,center_x,center_y);
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}