
let snowflakes = [];

function setup() {
   
   createCanvas(windowWidth,windowHeight);
   
  
  
  
}


function draw() {

    background(random(255),random(255),random(255));
   
    for(let x=0; x<s.length; x++){
        snowflakes[x].move();
        snowflakes[x].show();
    }
   
}

function mouseClicked(){
    snowflakes.push(new Snowflake(mouseX,mouseY,10))
}

