Webcam.set({
    height: 350,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture_image() {
    Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log("ml5 version: " + ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wN0TbFxwb/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}