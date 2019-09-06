let scl = 041;
let speed = 0.000018; // good speed: 0.00005
let intensity = 100;
let noiseVal;
let counter = 0;
let counter2 = 0;

function setup() {
  createCanvas(800, 800);
  background("#FAFAFA");
  stroke("#5D4037");
  stroke(0);

  noiseDetail(2, 0.);
  noFill();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {
  background(255, 250, 250 , 20);
  
  for (var x = 0; x < width; x = x+scl) {

    beginShape()

    for(var y = 0; y < height; y=y+scl){


      intensity = map(sin(x), 0, 1,0,scl*2);
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl+intensity);
      noiseValY = map(noiseValY,0,1,0,scl+intensity);

      center_x = x+noiseValX;
      center_y = y+noiseValY;


      vertex(x+scl, y);
      vertex(center_x, center_y);
      vertex(x+scl, y+scl);
      counter = counter + speed;
    }    
    endShape();   
  }

  
  
  for(var y = 0; y < height; y=y+scl){

    beginShape()
    
      for (var x = 0; x < width; x = x+scl) {
      intensity = map(sin(y), 0, 1,0,scl*3);
      noiseValX = noise(x+counter2,y);
      noiseValY = noise(y,x+counter2);      
      noiseValX = map(noiseValX,0,1,0,scl+intensity);
      noiseValY = map(noiseValY,0,1,0,scl+intensity);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
      
      
      vertex(x, y);
      vertex(center_x, center_y);
      vertex(x+scl, y);
      counter2 = counter2 + (speed/4) ;
    }    
    endShape();   
  }


  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}