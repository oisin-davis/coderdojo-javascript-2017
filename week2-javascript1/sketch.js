let message;
let messageX = 0;
let colour = 0;
let colour2 = 100;
let colour3 = 200;


function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log("hey there");
    message = prompt("What are today's specials?");
    
    
}

function draw(){
    messageX = messageX + 1;
    colour = colour + 1;
    colour2 = colour2 + 1;
    colour3 = colour3 + 1;
    if(colour > 255){
      colour = 0 }
    if(colour2 > 255){
        colour2 = 0 }
    if(colour3 > 255){
       colour3 = 0 }
    if(messageX > windowWidth ){
       messageX = 0    }
    background(colour3, colour, colour2);
    stroke(255);
    fill(255);
    textSize(50);
    text(message, messageX, 100);
    
    


}
 
