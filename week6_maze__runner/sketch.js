let r = 35;
let d = 70;


function setup() {
    createCanvas(d * 10, d * 10);
    background(50, 80, 200);
    rectMode(CENTER);
    frameRate(1);
    strokeWeight(10);

}


function draw() {
    background(50, 80, 200);
    for (let i = 0; i < 10; i = i + 1) {
        for (let j = 0; j < 10; j = j + 1) {
            drawShape(r + (d * i), r + (d * j), d, d);

        }

    }

}


function drawShape(x, y, w, h) {
    let choice = random();
    let x1 = x-w/2;
    let x2 = x+w/2;
    let y1 = y-h/2;
    let y2 = y+h/2;
    stroke(0,random(255),0);





    if (choice > 0.5) {
       // fill('blue');
       // ellipse(x, y, w, h);
       line(x1,y1,x2,y2)

    }
    else {
       // fill('red');
        //rect(x, y, w, h);
        line(x2,y1,x1,y2)


    }




}

