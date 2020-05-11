// let scl = 10;
let xscl = 23;
let yscl = 60;

let speed = 0.0010; // good speed: 0.00005
let noiseVal;
let counter = 0;




let xpos = 0;
let ypos = 0;
let xOffset = 30;

let dotRadius = 0;
let totalDotRadius = 0;
let totalDuration = 0;

let currentMonth = 0;
let previousMonth = "";


let currentDay = 0;
let previousDay = 0;




function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}


function setup() {
  createCanvas(800, 800);
  background(250, 250, 250);

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}







function draw() {

  background(250, 250, 250 , 15);


  for (let r = 0; r < table.getRowCount(); r++) {

    currentMonth = table.getNum(r, 0);
    currentDay = table.getNum(r, 1);
    currentDuration = table.getNum(r, 2);


    xpos = currentDay * xscl + xOffset;
    ypos = currentMonth * yscl;
   
    totalDuration = totalDuration + currentDuration;
    dotRadius = map(currentDuration, 0, 600, 10, 30);

    noStroke();
    fill(color(random(0,200),0,random(0,50),30));
    ellipse(xpos+random(-20,20), ypos+random(-20,20), dotRadius);

    if (currentDay != previousDay) {

      dotRadius = map(totalDuration, 0, 600, 10, 30);
      stroke(1);
      fill("white")
      ellipse(xpos, ypos, dotRadius);
      
      totalDuration = 0;
    }

    previousMonth = currentMonth;
    previousDay = currentDay;
  }

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}

