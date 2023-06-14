x=0;
y=0;
apple="";
draw_Apple="";
speak_data="";
number="";
screen_width=0;
screen_height=0;

function preload(){
    apple=loadImage("apple.png")
}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening. Please Speak.";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);


var content= event.results[0][0].transcript;

document.getElementById("status").innerHTML="The speech has been recognized as: "+content;

number=Number(content);
if(Number.isInteger(number)){
    document.getElementById("status").innerHTML="Started drawing an apple.";
    draw_Apple="Set";
}
else{
    document.getElementById("status").innerHTML="The speech has not been recognized as a number.";
}
}
function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width, screen_height-150);
    canvas.position(0,150);
}

function draw(){
    if(draw_Apple == "set"){
        for(var i= 1;i<= number;i++){
            x= Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
            image(apple,x,y,50,50);
        }
        document.getElementById("status").innerHTML=number+"Apple(s) is/are drawn";
        draw_Apple="";
        speak_data=number+"Apple(s) drawn."
        draw_Apple="";
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    speak_data="";
}