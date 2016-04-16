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
    star.style.width = 300;
    star.style.height = 300;
    star.style.left = 0;
    star.style.bottom = 0;
  } else if (val > 0) {
    val = val * 2;
    star.style.backgroundColor = 'rgba(0,0,'+val+',0.3)';
    star.style.width = val + 300;
    star.style.height = val + 300;
    star.style.left = val * 1.7;
    star.style.bottom = val * 0.8;
    // star.style.right = 0;
    // star.style.top = 0;
  } else {
    val = val * -2;
    star.style.width = val * -1 + 300;
    star.style.height = val * -1 + 300;
    star.style.backgroundColor = 'rgba('+val+',0,0,0.3)';
    star.style.left = val * -2;
    star.style.bottom = val * -0.8;
    // star.style.bottom = 0;
  }
}

function showError(show) {
  document.getElementById("message").style.visibility = show ? "visible" : "hidden";
  document.getElementById("message").innerHTML = "Number must be between -100 and 100!"
}
