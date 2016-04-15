var red=0;
var green=0;
var blue=0;
var alpha=0;

function showValue(newValue)
{
	document.getElementById("range").value=newValue;
};

function updateValue(val) {
  if (val >= -100 && val <= 100) {
    if(event.keyCode == 13) {
      document.getElementById("scrollbar").value=val;
    }
  } else {
    try {
      throw "Number must be between -100 and 100!"
    }
    catch(err) {
      message.innerHTML = err;
      setTimeout(fade_out, 500);
    }
  }

};

function fade_out() {
  $("#message").fadeOut().empty();
}

function changeColor(val,color){
  var m = document.getElementById("mydiv");
    switch (color) {
        case 0: red = val; break;
        case 1: green = val; break;
        case 2: blue = val; break;
        case 3: alpha = val; break;
    }

    m.style.backgroundColor='rgba('+red+','+green+','+blue+','+alpha+')';
    m.style.height=val;
    m.style.width=val * 2;
};
