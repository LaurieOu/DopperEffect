var show = false;

function showValue(newValue)
{
	document.getElementById("range").value=newValue;
  changeStarColor(newValue);
};

function updateValue(val) {
  if(event.keyCode == 13) {
    if (val >= -100 && val <= 100) {
        show = false;
        star = document.getElementById("star");
        document.getElementById("scrollbar").value=val;

        showError(show);
        changeStarColor(val);
    } else {
      show = true;
      showError(show);
    }
  }

};

function changeStarColor(val) {
  if(val == 0) {
    star.style.backgroundColor = 'rgba(0,0,0,0)';
  } else if (val > 0) {
    star.style.backgroundColor = 'rgba(0,0,'+val+',0.8)';
  } else {
    val = val * -1;
    star.style.backgroundColor = 'rgba('+val+',0,0,0.8)';
  }
}

function showError(show) {
  document.getElementById("message").style.visibility = show ? "visible" : "hidden";
  document.getElementById("message").innerHTML = "Number must be between -100 and 100!"
}
