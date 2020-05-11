// let scl = 10;
let xscl = 20;
let yscl = 60;

let speed = 0.0010; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];
// let word = ['G','O','O','D','y','e','a','r'];

// let x = 0;
// let y = 0;


let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}


function setup() {
  createCanvas(800, 800);
 // background("#e3e3e3");
  background(250, 250, 250);

  //print(table.getRowCount() + ' total rows in table');

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


//cycle through the table
  
  // for (let curMonth = 1 ; curMonth < 13 ; curMonth++ ) {

  //   for (let curDay = 1 ; curDay < 31 ; curDay++) {

  //     print(table.getString(r, c));
      

  //     text(table.getString(r, c), x+(c*20), y+(r*10));

  //   }


  // }

  let xpos = 10;
  let ypos = 1;
  let totalDotRadius = 0;

  let currentDay =0;
  let previousDay = 0;

  for (let r = 0; r < table.getRowCount(); r++) {
    

    xpos = table.getString(r, 1) * xscl;
    ypos = table.getString(r, 0) * yscl;

    let dotRadius = map(table.getString(r, 2), 0,250, 10, 40);
    
    currentDay = table.getString(r, 1);


    if (previousDay == currentDay || previousDay == 0 ) {
      totalDotRadius = totalDotRadius+dotRadius;
    } else {
      

      totalDotRadius = 0;
    }

    fill(color(100,0,100,10));
      ellipse(xpos, ypos, totalDotRadius);
    //ypos = scl*r ;
    noStroke();
    fill(color(10,10,10,10));
    text(table.getString(r, 2), xpos, ypos);
    ellipse(xpos, ypos, dotRadius);


    console.log(totalDotRadius + " -  " +previousDay + " " +currentDay);

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