var show = false;

function showValue(newValue)
{
	document.getElementById("range").value=newValue;
  changeStar(newValue);
};

function updateValue(val) {
  if(event.keyCode == 13) {
    if (val >= -100 && val <= 100) {
        show = false;
        star = document.getElementById("star");
        document.getElementById("scrollbar").value=val;

        changeStar(val);
        showError(show);
    } else {
      show = true;
      showError(show);
    }
  }
};

function changeStar(val) {
  if(val == 0) {
    star.style.background = 'rgba(0,0,0,0)';
    star.style.width = 300;
    star.style.height = 300;
    star.style.left = 39 + '%';
    star.style.bottom = 0;
  } else if (val > 0) {
    val = Math.pow(2.71828, val * 0.05);
    star.style.background = 'rgba('+Math.round(val) * 2+',0,0,0.7)';
    star.style.width = val * -1 + 300;
    star.style.height = val * -1 + 300;
    star.style.left = 39 - val * 0.2 + '%';
    star.style.bottom = val * -0.8;

  } else {
    val = Math.pow(2.71828, val * -0.05);
    star.style.background= 'rgba(0,0,'+Math.round(val) * 2+',0.7)';
    star.style.width = val + 300;
    star.style.height = val + 300;
    star.style.left = val * 0.1 + 39 + '%';
    star.style.bottom = val * 0.8;

  }
}

function showError(show) {
  document.getElementById("message").style.visibility = show ? "visible" : "hidden";
  document.getElementById("message").innerHTML = "Number must be between -100 and 100!"
}
