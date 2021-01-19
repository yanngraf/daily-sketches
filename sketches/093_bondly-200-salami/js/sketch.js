var f;
var path, path2, path3;
var polys, polys2, polys3;
var drawing = false;
var gui, params, params2, params3;
var anchorX, anchorY;

let xoff = 0.1;

var firstname = "more";
var lastname = "salami";
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
  createCanvas(1080, 1080);
  background(255, 224, 254)

  // init all parameters
  params = new Parameters();
  params2 = new Parameters2();

  getPoints();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF

}


function draw(){


    background(255, 240, 246)

    xoff = xoff + 0.01;
    let n = noise(xoff);
    noFill();


    if (drawing){
        push()
        translate(params.xoffset, params.yoffset)
        strokeWeight(params.stroke_weight )
        // stroke(100,00,100)

        for (var i=0; i < polys.length ; i++){
           var poly = polys[i];
            for(var j = 0; j < poly.state.vectors.length; j++) {
                var vec = poly.state.vectors[j];
               // size=random(1,500)

                strokeWeight(params.stroke_weight )
                stroke(218, 129, 125);
                

                ellipse(vec.x, vec.y, n*100, n*60);

                strokeWeight(1);
                stroke(183,66,57)
                ellipse(vec.x, vec.y, n*100, n*100);
            }

        }

        translate(params2.xoffset, params2.yoffset)
 

        for (var i=0; i < polys2.length ; i++){
            var poly = polys2[i];
             for(var j = 0; j < poly.state.vectors.length; j++) {
                 var vec = poly.state.vectors[j];

                strokeWeight(params2.stroke_weight )
                stroke(218, 129, 125);
                ellipse(vec.x, vec.y, n*40, n*40);


                strokeWeight(1);
                stroke(183,66,57)
                ellipse(vec.x, vec.y, n*100, n*100);

                 //line(anchorX-params2.xoffset , anchorY-params.yoffset, vec.x, vec.y);
                
             }
         }
        pop()
    }


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
    this.spacing = 20;
    this.size = 310;
    this.stroke_weight = 10;
    this.background = [66,75,84]; 
    this.color = [255,193,224];
    this.xoffset = 145
    this.yoffset = windowHeight/4 + 150;
}



var Parameters2 = function(){

    this.font = "fonts/AvenirNextLTW01-Medium.woff"
    this.message = lastname;
    this.spacing = 30;
    this.size = 200;
    this.stroke_weight = 50;
    this.color = [219,255,35];
    this.xoffset = 0
    this.yoffset = 280
}


// // Export to SVG function
// function keyTyped() {
//     if (key === "j") {
//       noLoop();
//       save("mySVG.svg");
//     } 
//   }