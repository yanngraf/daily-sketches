let scl = 32;
let rounding = 1;
let direction = 1;
let speed = 0.00001; // good speed: 0.00005


let noiseVal;
let counter = 0;

function setup() {
  createCanvas(800, 800);
  noStroke();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background(0);

  for (var x = 0; x < width; x = x+scl) {

    beginShape()

    for(var y = 0; y < height; y=y+scl){

      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
    
      color = map(noiseValX, 0, scl, 20, 255);
      color2 = map(noiseValY, 0, scl, 200, 255);
      fill(color,color2,20);
   
      vertex(x+scl, y);
      vertex(center_x, center_y);
      vertex(x+scl, y+scl);
      counter = counter + speed;
    }    
    endShape(CLOSE);   
  }

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}