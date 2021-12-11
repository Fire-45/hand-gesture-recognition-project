Webcam.set({
    width = 300,
    height= 300,
    image_format = 'png',
    png_quality: 90

})

Webcam.attach("#camera");

function TakeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = "<img id = 'result' src = '"+data_uri+"'>"
    })
}
    console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pEihr8EQY/model.json",modelLoaded);
