var pic = document.getElementById("pic");
var hasMadeFirst = false;
var id;

var animateDVD = function(e){
    cancel();
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);
    var drawDVD = function(){
	clear();
	var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 50);
	c.setAttribute("xVel", 1.2);
	c.setAttribute("yVel", 1.2);
	x+=parseFloat(c.getAttribute("xVel"));
	y+=parseFloat(c.getAttribute("yVel"));
	if(x < 50 || x > 700){
	    console.log(parseFloat(c.getAttribute("xVel")) * -1);
	    c.setAttribute("xVel", parseFloat(c.getAttribute("xVel")) * -1);
	}
	if(y < 50 || y > 450){
	    c.setAttribute("yVel", parseFloat(c.getAttribute("yVel")) * -1);
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

document.getElementById("clear").addEventListener("click", cancel);
pic.addEventListener("click", animateDVD);
