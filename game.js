var red=0;
var green=0;
var blue=0;
var alpha=0;
var show = false;

function showValue(newValue)
{
	document.getElementById("range").value=newValue;
};

function updateValue(val) {
  if(event.keyCode == 13) {
    if (val >= -100 && val <= 100) {
        show = false;
        showError(show);
        document.getElementById("scrollbar").value=val;
    } else {
      show = true;
      showError(show);
    }
  }

};

function showError(show) {
  document.getElementById("message").style.visibility = show ? "visible" : "hidden";
  document.getElementById("message").innerHTML = "Number must be between -100 and 100!"
}

function fade_out() {
  $("#message").fadeOut();
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
