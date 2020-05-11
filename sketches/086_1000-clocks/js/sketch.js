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
let radiusOffest = 10;
let currentMonth = 0;
let previousMonth = "";


let currentDay = 0;
let previousDay = 0;


let dotColors = ['#E3D26F', '#CA895F', '#A15E49', '#4E3822', '#2F1B25', '#81C14B', '#2E933C', '#297045', '#204E4A', '#C4BBB8', '#F5B0CB', '#DC6ACF', '#745C97', '#39375B', '#E3D26F', '#CA895F', '#A15E49', '#4E3822', '#2F1B25', '#81C14B', '#2E933C', '#297045', '#204E4A', '#C4BBB8', '#F5B0CB', '#DC6ACF', '#745C97', '#39375B'];



function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}


function setup() {
  createCanvas(800, 800);
  background(250, 250, 250);
  //background("black");

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}







function draw() {

  //background(250, 250, 250, 45);
  background("black");


  for (let r = 0; r < table.getRowCount(); r++) {

    currentMonth = table.getNum(r, 0);
    currentDay = table.getNum(r, 1);
    currentDuration = table.getNum(r, 2);
    currentClient = table.getNum(r, 3);



    xpos = currentDay * xscl + xOffset;
    ypos = currentMonth * yscl;
   
    totalDuration = totalDuration + currentDuration;
    dotRadius = map(currentDuration, 0, 600, 20, 30);
    dotColor = map(currentClient, 0, 26, 0, 255);
    dotColor2 = map(currentClient, 0, 26, 255, 0);

    noStroke();
    fill(color(random(0,250),0,random(0,50),90));
    fill(color(dotColor,0,dotColor2));

    console.log(dotColors[currentClient]);

    fill(dotColors[currentClient]);
    ellipse(xpos+random(-radiusOffest,radiusOffest), ypos, dotRadius);

    if (currentDay != previousDay) {

      dotRadius = map(totalDuration, 0, 600, 10, 30);
      //stroke(1);
      //fill("white")
      //fill(color(random(0,250),0,random(0,20),90));
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

