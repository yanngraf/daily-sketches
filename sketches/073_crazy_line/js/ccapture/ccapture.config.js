// --------------- for exporting video/GIF

// 0 = don't capture, 1 = RECODRD / Capture
let capturerState = 1;

// the frame rate (frames per second)
let fps = 30;


// duration in milliseconds
var duration = 6000;

// the canvas capturer instance
var capturer = new CCapture({ format: 'png', framerate: fps });

// needed to subtract initial millis before first draw to 
// begin at t=0.
var startMillis; 




// Function that goes into Setup
function capturerSetup () {

    if (capturerState === 1) {
        capturer.start();
    }

}

// Function that goes into Draw
function capturerDraw () {

    // only do it is recording
    if (capturerState === 1) {

        if (startMillis == null) {
            startMillis = millis();
        }
    
        
        // compute how far we are through the animation as a value 
        // between 0 and 1.
        var elapsed = millis() - startMillis;
        var t = map(elapsed, 0, duration, 0, 1);
        
        console.log(t);
        
        // if we have passed t=1 then end the animation.
        if (t > 1) {
            noLoop();
            console.log('finished recording.');
            capturer.stop();
            capturer.save();
            return;
        }
        
        // handle saving the frame
        console.log('capturing frame');
        capturer.capture(document.getElementById('defaultCanvas0'));
    }
}