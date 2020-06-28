function moveHands() {
  with (new Date()) {
    h = 30 * ((getHours() %12) + getMinutes()/60); // 30 degrees hour
    m = 6 * getMinutes();
    s = 6 * getSeconds(); // 6 degrees every second (6*60 = 360 for full circle)
    document.getElementById("seconds").style.cssText =
      "-webkit-transform:rotate(" + s + "deg);";
    // style cssText returns the style declaration as a string
    /* aka when setting it = to a string version of the code we want,
    it will slap it in the css doc as that new code line*/
    document.getElementById("minutes").style.cssText =
      "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("hours").style.cssText =
      "-webkit-transform:rotate(" + h + "deg);";

    setTimeout(moveHands, 1000); // calls function every second
    // out of milliseconds
  }
}

/*
function changeBackground() {
  with (new Date()) {
    if (getSeconds()%2 == 0) {
      /* 0<=getHours()<=7 || 19 <= getHours()<= 24 
      document.getElementById("background").style.cssText =
        "background-color: #231a35;" // purple
    } else {
      document.getElementById("background").style.cssText =
        "background-color: #538ca3;" // blue
    }

    setTimeout(changeBack, 1000); // every 30 mins: 1800000
  }
}  */


window.onload = moveHands;
window.onload = changeBackground;
