var red=0;
var green=0;
var blue=0;
var alpha=0;

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
};

function changeColor(val,color){
  var m = document.getElementById("mydiv");
    switch (color) {
        case 0: red = val; break;
        case 1: green = val; break;
        case 2: blue = val; break;
        case 3: alpha = val; break;
    }

    m.style.backgroundColor='rgba('+red+','+green+','+blue+','+alpha+')';
};
