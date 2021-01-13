let scl = 172;
let speed = 0.0010; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];


function setup() {
  createCanvas(800, 800);
 // background("#e3e3e3");
  background(250, 250, 250);

 
  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background(250, 250, 250 , 15);
  //drawHistory();

  var bubble = {};
  history.push();
  
  w = 0

  for(var y = 300; y < height-scl; y=y+scl){
  
    for (var x = 0; x < width-scl; x = x+scl) {
      
      beginShape()
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;

      counter = counter + speed;

      fill('#fe3060');

      // not used
      var bubble = {xPos: center_x, yPos: center_y};
      history.push(bubble);


      if (history.length > 2000) {
        history.shift(bubble);
      }
      // not used

      
      if (w < 4) {
        // first 4 letters
        textFont('Helvetica',350);
        text(word[w], center_x-55, center_y);
      
      } else {
        // last 4 letters
        fill('#271184');
        textFont('Times', noiseValX);
        text(word[w], center_x+50, center_y);
      }
      w++
    }    
  }

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}



// Draws the trail painted from the history
function drawHistory() {
  
  //var l = 0;

  for (var i = 0; i < history.length; i++) {
    
    //if (i > word.length) { l = 0; } 
    //else { l++; }
    var pos = history[i];
    //fill(pos.z);
    //ellipse(pos.x, pos.y, 40);

    //console.log(pos);
    //fill('orange');
    //var c = color(i,i,i);
    //fill(i*4,i*10,i*15);
    stroke("white");
    fill(color(20,10,100,50));
    
    //ellipse(pos.xPos, pos.yPos,16,16);
    //ellipse(pos.xPos+scl, pos.yPos,3,3);

    fill(50);
    stroke(59);
    text(word[i+2], pos.xPos, pos.yPos);
  }
}