let scl = 151;
let speed = 0.005; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];

function setup() {
  createCanvas(800, 800);
  background("#e3e3e3");
  stroke("#0F0362");
  noiseDetail(2, 1);
  noFill();
  noStroke();
  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  //background(250, 250, 250 , 20);

  drawHistory();

  var bubble = {};
  history.push();
  
  for(var y = 20; y < height-scl; y=y+scl){
  
    for (var x = 20; x < width-scl; x = x+scl) {
      
      beginShape()
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
    

      counter = counter + speed;

      //fill('#EAFAFA');
      //ellipse(center_x, center_y,6,6);
      //ellipse(center_x+scl, center_y,3,3);


      var bubble = {xPos: center_x, yPos: center_y};
      history.push(bubble);


      if (history.length > 2000) {
        history.shift(bubble);
      }
    }    
   
  }

  

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}



// Draws the trail painted from the history
function drawHistory() {
  for (var i = 0; i < history.length; i++) {
    var pos = history[i];
    //fill(pos.z);
    //ellipse(pos.x, pos.y, 40);

    //console.log(pos);
    //fill('orange');
    //var c = color(i,i,i);
    fill(i*8,i*10,i*12);
    //stroke("green");
    //ellipse(pos.xPos, pos.yPos,16,16);
    //ellipse(pos.xPos+scl, pos.yPos,3,3);

    rect(pos.xPos, pos.yPos,20,20);
    ellipse(pos.xPos+scl, pos.yPos,3,3);

  }
}