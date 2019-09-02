let scl = 400;
let rounding = 1;
let direction = 1;
let speed = 0.001; // good speed: 0.00005


let noiseVal;
let counter = 0;

function setup() {
  createCanvas(800, 800);
  stroke(255);
  strokeWeight(2);
  background(66,65,65);

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {
  
  background(66,65,65,8);
  background(66,65,65,50);
  noFill(fill);
  
  for (var x = 0; x < width; x = x+scl) {

    for(var y = 0; y < height; y=y+scl/1){

      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
      


      stroke(random(150,205),random(0,50),random(50,100));
      line (x,y,center_x,center_y);
  
      line (center_x,center_y,x+scl,y);
      //stroke("#FF2181");
      line (x,y+scl,center_x,center_y);
      
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }

  for (var x = 0; x < width; x = x+scl) {

    for(var y = 0; y < height; y=y+scl/1){

      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl/2);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
      


      stroke(random(150,205),random(0,50),random(50,100));
      line (x,y,center_x,center_y);
  
      line (center_x,center_y,x+scl,y);
      //stroke("#FF2181");
      line (x,y+scl,center_x,center_y);
      
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}