// let scl = 10;
let xscl = 20;
let yscl = 60;

let speed = 0.0010; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];
let table;



let xpos = 0;
let ypos = 0;

let dotRadius = 0;
let totalDotRadius = 0;
let totalDuration = 0;

let currentMonth = 0;
let previousMonth = 0;


let currentDay = 0;
let previousDay = 0;




function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}


function setup() {
  createCanvas(800, 800);
  background(250, 250, 250);

  //print(table.getRowCount() + ' total rows in table');

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}







function draw() {

  // background(250, 250, 250 , 15);


  var bubble = {};
  history.push();
  
  w = 0




  

  for (let r = 0; r < table.getRowCount(); r++) {

    currentMonth = table.getString(r, 0);
    currentDay = table.getString(r, 1);
    currentDuration = table.getString(r, 2);


    xpos = currentDay * xscl;
    ypos = currentMonth * yscl;
   
    console.log("currentDuration : " +currentDuration+" Total duration: " + totalDuration);


    if (currentMonth != previousMonth) {

      totalDuration = 0;
      totalDotRadius = 0;

      console.log ("new month");
    }


    if (previousDay == currentDay || previousDay == 0 ) {
      
      totalDuration = totalDuration + currentDuration;
      //totalDuration = Math.round(totalDuration);
      //console.log("total radius: " + totalDuration);

      totalDotRadius = totalDotRadius+dotRadius;

    } else {
      
      //

      dotRadius = map(totalDuration, 0, 600, 5, 10);


      fill(color(100,0,100,10));
      //ellipse(xpos, ypos, dotRadius);
      fill("black");

      textSize(12);
      //console.log("total radius: " + totalDuration);

      text(totalDuration, xpos, ypos);

      

    }

  
    //ypos = scl*r ;
    noStroke();
    fill(color(10,10,10,10));
    //text(table.getString(r, 2), xpos, ypos);
    //ellipse(xpos, ypos, dotRadius);


    //console.log(totalDuration + " -  " +previousDay + " " +currentDay);

    previousMonth = currentMonth;
    previousDay = currentDay;
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