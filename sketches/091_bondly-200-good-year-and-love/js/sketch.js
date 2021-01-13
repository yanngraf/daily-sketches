var f;
var path, path2, path3;
var polys, polys2, polys3;
var drawing = false;
var gui, params, params2, params3;
var anchorX, anchorY;

let xoff = 0.0;

var firstname = "just";
var lastname = "sausage";
//var thirdname = "Best";

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
        //path3 = f.toPath(params3.message, 0, 100, params3.size)
    
        polys = path.toPolygons({ spacing:params.spacing })
        polys2 = path2.toPolygons({ spacing:params2.spacing })
        //polys3 = path3.toPolygons({ spacing:params3.spacing })
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
  createCanvas(canvasWidth, canvasHeight);
  //myCanvas.parent("idnameofdiv");

  background(230,230,230)

  // init all parameters
  params = new Parameters();
  params2 = new Parameters2();
  //params3 = new Parameters3();
  
  anchorX =  random(0,windowWidth);
  anchorY = random(0,windowHeight);

  getPoints();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF

}


function draw(){

    xoff = xoff + 0.03;
    let n = noise(xoff);

    background(params.background)
    noFill();
    // to draw points around a circle.
    //convert polar coordinates to cartesian coordinates
    var xPointer = r * sin(angle)+400;
    var yPointer = r * cos(angle)+400;

    if (drawing){
        push()
        translate(params.xoffset, params.yoffset)
        strokeWeight(params.stroke_weight )
        stroke(params.color)

        for (var i=0; i < polys.length ; i++){
           var poly = polys[i];
            for(var j = 0; j < poly.state.vectors.length; j++) {
                var vec = poly.state.vectors[j];
                size=random(10,50)

                strokeWeight(params.stroke_weight )
                stroke(params.color)

                ellipse(vec.x, vec.y, n*60, n*60);

                strokeWeight(1);
                stroke(1);
                ellipse(vec.x, vec.y, n*100, n*100);

                //line(xPointer , yPointer, vec.x, vec.y);
                //line(anchorX-params.xoffset , anchorY-params.yoffset, vec.x, vec.y);
            }

        }

        translate(params2.xoffset, params2.yoffset)
 

        for (var i=0; i < polys2.length ; i++){
            var poly = polys2[i];
             for(var j = 0; j < poly.state.vectors.length; j++) {
                 var vec = poly.state.vectors[j];
                 //ellipse(vec.x, vec.y,10);
                //  line(vec.x, vec.y, vec.x+(n*200), vec.y);
                //  line(vec.x, vec.y, vec.x-(n*200), vec.y);
                strokeWeight(params2.stroke_weight )
                stroke(params.color)

                ellipse(vec.x, vec.y, n*40, n*40);


                strokeWeight(1);
                stroke(1);
                ellipse(vec.x, vec.y, n*100, n*100);

                 //line(anchorX-params2.xoffset , anchorY-params.yoffset, vec.x, vec.y);
                
             }
         }


        //  translate(params3.xoffset, params3.yoffset)
        //  strokeWeight(params3.stroke_weight )
        //  stroke(params3.color)
 
        //  for (var i=0; i < polys3.length ; i++){
        //      var poly = polys3[i];
        //       for(var j = 0; j < poly.state.vectors.length; j++) {
        //           var vec = poly.state.vectors[j];
        //           line(xPointer, yPointer-params2.yoffset-params3.yoffset, vec.x, vec.y);
        //           //line(anchorX-params3.xoffset , anchorY-params.yoffset, vec.x, vec.y);
        //       }
        //   }
 
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

  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
  
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
    this.spacing = 10;
    this.size = 310;
    this.stroke_weight = 10;
    this.background = [66,75,84]; 
    this.color = [255,193,224,200];



    this.xoffset = 145
    this.yoffset = windowHeight/4 + 150;
}



var Parameters2 = function(){

    this.font = "fonts/AvenirNextLTW01-Medium.woff"
    this.message = lastname;
    this.spacing = 10;
    this.size = 220;
    this.stroke_weight = 10;
    this.color = [252,193,224,100];
    this.color = [219,255,35,100];

    this.xoffset = 0
    this.yoffset = 280
}


var Parameters3 = function(){

    this.font = "fonts/AvenirNextLTW01-Medium.woff"
    this.message = thirdname;
    this.spacing = 10;
    this.size = 310;
    this.stroke_weight = 2;
    this.color = [248,198,48,55];

    this.xoffset = 10
    this.yoffset = 280
}