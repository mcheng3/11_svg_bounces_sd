var pic = document.getElementById("pic");
var hasMadeFirst = false;
var id;

var animateCircle = function(){
    var r = 0;
    cancel();
    var drawCircle = function(){
	clear();
	var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", 375);
	c.setAttribute("cy", 250);
	c.setAttribute("r", 250*(0.5*Math.sin(r/50)+0.5));
	c.setAttribute("fill", "lightsteelblue");
	pic.appendChild(c);
	console.log(c);	r+=1;
	
    };
    id = window.setInterval(drawCircle, 10);
};

var animateDVD = function(){
    cancel();
    var x = 50;
    var y = 50
    var xVel = 1.2;
    var yVel = 1.2;
    console.log(x);
    console.log(y);
    var drawDVD = function(){
	clear();
	var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 50);
	x+=xVel;
	y+=yVel;
	if(x < 50 || x > 700){
	    xVel *= -1;
	}
	if(y < 50 || y > 450){
	    yVel *= -1;
	}
	c.setAttribute("fill", "lightsteelblue");
	pic.appendChild(c);
    };
    id = window.setInterval(drawDVD, 10);
};


var clear = function(){
    //window.clearInterval(id);
	pic.innerHTML = "";
	hasMadeFirst = false;
};

var cancel = function(){
    window.clearInterval(id);
    clear();
}

pic.addEventListener("click", animateCircle);
document.getElementById("circle").addEventListener("click",  animateCircle);
document.getElementById("clear").addEventListener("click", cancel);
document.getElementById("dvd").addEventListener("click", animateDVD);
