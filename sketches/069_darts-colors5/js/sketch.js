let scl = 101;
let speed = 0.0001; // good speed: 0.00005
let noiseVal;
let counter = 0;

function setup() {
  createCanvas(800, 800);
  background("#FAFAFA");
  stroke("#0F0362");
  noiseDetail(2, 1);
  noFill();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background(250, 250, 250 , 20);
  
  for(var y = 20; y < height-scl; y=y+scl){
  
    for (var x = 20; x < width-scl; x = x+scl) {
      beginShape()
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
    

      vertex(x+scl, y);
      vertex(center_x, center_y);
      vertex(x+scl, y+scl);
      counter = counter + speed;

      fill('#FF003E');
      ellipse(center_x, center_y,3,3);
      endShape();   

      beginShape()
      vertex(x+scl, y);
      vertex(center_x+scl, center_y);
      vertex(x+scl, y+scl);
      endShape(); 

      ellipse(center_x+scl, center_y,3,3);

    }    
   
  }


  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}