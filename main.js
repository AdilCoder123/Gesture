prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takephoto()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagetime" src="'+data_uri+'"/>';
        speak();
  
    });
    
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hohOfFWuO/model.json",modelFullyLoaded);
function modelFullyLoaded()
{
    console.log("Model loaded it is gonna kill us")
}

function speak()
{
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is "+prediction1;
    speakdata2="The second prediction is "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);
}