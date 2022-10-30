x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apple = "";
content = 0;
function preload() {
  apple = loadImage("apple.png");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function (event) {
 console.log(event); 
  content = event.results[0][0].transcript;
  console.log(content);
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number = Number(content);
  console.log(to_number);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "started drawing apple";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "the speech has not recognised a number";
}
 

    

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
   canvas = createCanvas(550, 550);
    canvas.position(560,100);
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; 1 <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 700);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
