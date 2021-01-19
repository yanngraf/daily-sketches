var f;
var path, path2;
var polys, polys2;
var drawing = false;
var gui, params, params2;
var anchorX, anchorY;

var firstname = "Hey";
var lastname = "Jerome";

// To draw the pointer in circle
var r;		//radius
var angle 
var step  //distance between steps in radians

// this function loads a font, and create an array of polygons
// a polygon being itself an array of vectors with x/y coordinates
function getPoints(){
    drawing = false;
    // create new font : we use rune
    f = new Rune.Font(params.font) 
    // load the font
    f.load(function(err){       
        path = f.toPath(params.message, 0, 0, params.size)
        path2 = f.toPath(params2.message, 0, 100, params2.size)
    
        polys = path.toPolygons({ spacing:params.spacing })
        polys2 = path2.toPolygons({ spacing:params2.spacing })
        drawing = true;
    });

    drawing = false;


    //initialize variables for drawing the cirle
    r     = 200;
    angle = 0;
    step  = TWO_PI/160; //in radians equivalent of 360/6 in degrees

}


function setup(){

  frameRate(60);
  var canvasWidth = 1080;
  var canvasHeight = 1080;
  createCanvas(canvasWidth, canvasHeight, SVG);
  //myCanvas.parent("idnameofdiv");

  background(230,230,230)

  // init all parameters
  params = new Parameters();
  params2 = new Parameters2();
  
  anchorX =  random(0,windowWidth);
  anchorY = random(0,windowHeight);

  getPoints();

//   // --------------- for exporting video/GIF
//   capturerSetup ();
//   // --------------- for exporting video/GIF

}


function draw(){

    background(params.background)

    if (drawing){
        push()
        translate(params.xoffset, params.yoffset)
        strokeWeight(params.stroke_weight )
        stroke(params.color)

        for (var i=0; i < polys.length ; i++){
           var poly = polys[i];
            for(var j = 0; j < poly.state.vectors.length; j++) {
                var vec = poly.state.vectors[j];
                //line(anchorX-params.xoffset , anchorY-params.yoffset, vec.x, vec.y);
                line(anchorX-params.xoffset , anchorY-params.yoffset, vec.x, vec.y);
            }

        }

        translate(params2.xoffset, params2.yoffset)
        strokeWeight(params2.stroke_weight )
        stroke(params2.color)

        for (var i=0; i < polys2.length ; i++){
            var poly = polys2[i];
             for(var j = 0; j < poly.state.vectors.length; j++) {
                 var vec = poly.state.vectors[j];
                 line(anchorX-params2.xoffset , anchorY-params.yoffset, vec.x, vec.y);
             }
         }

        pop()
        //noLoop();
    }
  
  // to draw points around a circle.
  //convert polar coordinates to cartesian coordinates
  var x = r * sin(angle)+400;
  var y = r * cos(angle)+400;
  
  anchorX = x;
  anchorY = y;
  
  //increase angle by step size
  angle = angle + step;

//   // --------------- for exporting video/GIF
//   capturerDraw ();
//   // --------------- for exporting video/GIF
  
}

function mouseDragged(){
    if (mouseX < windowWidth-400){
        // anchorX = mouseX
        // anchorY = mouseY
    }
}


var Parameters = function(){

    this.font = "fonts/AvenirNextLTW01-Medium.woff"
    this.message = firstname;
    this.spacing = 20;
    this.size = 310;
    this.stroke_weight = 5;
    this.background = [34,22,43]; 
    this.color = [248,198,48,55];



    this.xoffset = 145
    this.yoffset = windowHeight/4 + 180;
}



var Parameters2 = function(){

    this.font = "fonts/AvenirNextLTW01-Medium.woff"
    this.message = lastname;
    this.spacing = 25;
    this.size = 260;
    this.stroke_weight = 30;
    this.color = [229,79,109,50];

    this.xoffset = 10
    this.yoffset = 220
}


// Export to SVG function
function keyTyped() {
    if (key === "j") {
      noLoop();
      save("mySVG.svg");
    } 
  }