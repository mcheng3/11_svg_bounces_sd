var pic = document.getElementById("pic");
var hasMadeFirst = false;
var id;

var clear = function(){
    while(pic.firstChild){
	pic.removeChild(pic.firstChild);
    }
    clearInterval(id);
}

var circle = function(e) {
    clearInterval(id);
    var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", e.offsetX + "");
    c.setAttribute("cy", e.offsetY + "");
    c.setAttribute("r", 50+"");
    c.setAttribute("xvel", 1);
    c.setAttribute("yvel",1);
    c.setAttribute("fill","lightsteelblue");
    c.setAttribute("stroke","lightsteelblue");
    pic.append(c);
}
    


var bouncehelp= function(){
    var x,y,xvel,yvel;
    for (var i = 0; i < pic.children.length; i++){
	var c = pic.children[i];
	x=Number(c.getAttribute("cx"));
	y=Number(c.getAttribute("cy"));
	xvel=Number(c.getAttribute("xvel"));
	yvel = Number(c.getAttribute("yvel"));
	c.setAttribute("cx", x+xvel+"");
	c.setAttribute("cy", y+yvel+"");
	if(x <= 50){
	    c.setAttribute("xvel", 1);
	}
	if (x >= 650){
	    c.setAttribute("xvel",0);
	}
	if(y <= 50){
	    c.setAttribute("yvel", 1);
	}
	if (y >= 450){
	    c.setAttribute("yvel",0);
	}
	if (xvel == 1){
	    c.setAttribute("cx", x+5+"");
	}
	else{
	    c.setAttribute("cx", x-5+"")
	}
	if (yvel == 1){
	    c.setAttribute("cy", y+5+"");
	}
	else{
	    c.setAttribute("cy", y-5+"")
	}
    }
}



var play = function(e){
    circle(e);
    id = setInterval(bouncehelp, 10);
}


document.getElementById("clear").addEventListener("click", clear);
pic.addEventListener("click", play);
