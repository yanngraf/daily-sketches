let scl = 61;
//let rounding = 5;
//let direction = 1;
let speed = 0.0001; // good speed: 0.00005

let noiseVal;
let counter = 0;

function setup() {
  createCanvas(800, 800);
  background("#FAFAFA");
  stroke("#5D4037");

  noiseDetail(2, 0.2);
  //noStroke();
  noFill();
  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background(250, 250, 250 , 20);
  

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
      //fill(color,color2,20);
      //stroke(255,4,2);
      vertex(x+scl, y);
      vertex(center_x, center_y);
      vertex(x+scl, y+scl);
      counter = counter + speed;

      //ellipse(center_x, center_y,3,3);
    }    
    endShape();   
  }


  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}