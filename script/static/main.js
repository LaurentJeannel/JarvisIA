var audioContext = null;
var meter = null;
var canvasContext = null;
var WIDTH=1000;
var HEIGHT=5;
var rafID = null;

window.onload = function() {

    // grab our canvas
	canvasContext = document.getElementById( "meter" ).getContext("2d");
	
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "true",
                    "googAutoGainControl": "true",
                    "googNoiseSuppression": "true",
                    "googHighpassFilter": "true"
                },
                "optional": []
            },
        }, gotStream, didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

}


function didntGetStream() {
    alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a new volume meter and connect it.
    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);

    // kick off the visual updating
    drawLoop();
}

function drawLoopold( time ) {
  //try{console.log(alarmeaudio,'11111122221111')}catch(err){}
    // clear the background
    canvasContext.clearRect(0,0,WIDTH,HEIGHT);

    // check if we're currently clipping
    if (meter.checkClipping()){
        canvasContext.fillStyle = "red";
    }
    else{
        canvasContext.fillStyle = "green";
    }
    // draw a bar based on the current volume
    canvasContext.fillRect(0, 0, meter.volume*WIDTH*1.4, HEIGHT);

    // set up the next visual callback
    

 rafID = window.requestAnimationFrame( drawLoop );     

}//fin draw loop

function drawLoop( time ) {
    // clear the background
    canvasContext.clearRect(0,0,WIDTH,HEIGHT);

    // check if we're currently clipping
    if (meter.checkClipping())
        canvasContext.fillStyle = "red";
    else
        canvasContext.fillStyle = "green";

    // draw a bar based on the current volume
    canvasContext.fillRect(0, 0, meter.volume*WIDTH*1.4, HEIGHT);
try{
      if(meter.volume>0.3){console.log("alarme = "+alarmeaudio)
          
         if (alarmeaudio=="Active"){
          alarmeaudio='off'
          var xmlhttpalarme;
          var xmlhttpalarme=new XMLHttpRequest();
var url1="http://127.0.0.1:8080/sarah/alarme?alarme=activation"
         
         // var url1 = "http://127.0.0.1:8888/?emulate=activationnepastouchersouspeinedeplantage12345";
         // var url="https://127.0.0.1:4300/sarah?reco=Mathilde activationnepastouchersouspeinedeplantage12345"
          //var url1 = "https://127.0.0.1:4300/sarah?" + "reco" + "=" + "activationnepastouchersouspeinedeplantage12345"
          xmlhttpalarme.open("GET",url1,true);

          xmlhttpalarme.send();
          console.log(url1)
       //console.log(SARAH)
          //return false
          }
      }
}
catch(err) {console.log('alarme non active')}

    // set up the next visual callback
    rafID = window.requestAnimationFrame( drawLoop );


}
