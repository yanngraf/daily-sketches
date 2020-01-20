let scl = 352;
let speed = 0.0009; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];

let word = ['G','O','O','D','y','a','e','r','R','T','_','T','O','_','Y','O','U','_','F','O','L','K','S','!','!'];
let

function setup() {
  createCanvas(800, 800);
  background("#e3e3e3");
  // stroke("#0F0362");
  // noiseDetail(2, 1);
  // noFill();
  // fill("white")
  // noStroke();

  textFont('Helvetica',20);
  //text('Helvetica', 12, 60);
  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background(250, 250, 250 , 15);
  background(250, 250, 250);
  //background('black');
  //drawHistory();

  var bubble = {};
  history.push();
  
  w = 0

  for(var y = 2; y < height-scl; y=y+scl){
  
    for (var x = 2; x < width-scl; x = x+scl) {
      
      beginShape()
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX-10;
      center_y = y+noiseValY+150;
    

      counter = counter + speed;

      //fill('#EAFAFA');
      //ellipse(center_x, center_y,6,6);
      //ellipse(center_x+scl, center_y,3,3);


      var bubble = {xPos: center_x, yPos: center_y};
      history.push(bubble);


      if (history.length > 2000) {
        history.shift(bubble);
      }

      //fill('white');
      noFill();
      //fill(250, 250, 250);

      
      stroke('#271184');
      strokeWeight(1);

      stroke('#fe3060');      

      fill('white');
      textFont('Helvetica', (noiseValX*2))

      
      line(0,center_y,2000,center_y );
      line(center_x,0,center_x,2000 );
      strokeWeight(2);
      text(word[w], center_x, center_y);

      textFont('Times', noiseValX);
 
     //stroke(color(random(10,105),random(100,255),random(100,255)));
      fill('#271184');

      line(center_y,0,center_y,2000 );
      line(0,center_x,2000,center_x);
      noStroke();
      text(word[w+4], center_y, center_x );

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
    text(word[i], pos.xPos, pos.yPos);

    
    //rect(pos.xPos, pos.yPos,20,20);
    //ellipse(pos.xPos+scl, pos.yPos,3,3);

  }
}