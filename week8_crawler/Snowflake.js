class Crawler {
    constructor(x, y, stepSize){
    	this.x = x
    	this.y = y
    	this.stepSize = stepSize
    }  

	move(){
	    let dir = random();
	    if (dir<0.25){
	    	this.x = this.x + this.stepSize;
	    }
	    else if (dir < 0.5){
	    	this.x = this.x - this.stepSize;
	    }

	   
	    else if (dir < 0.75){
	    	this.y = this.y + this.stepSize;
	    }
	    else {
	    	this.y = this.y - this.stepSize;
	    }
	}

	show(){
		fill("white")
		ellipse(this.x,this.y,30,30);
	    
	}
}









