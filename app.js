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


      // Check to change background
      if ( getHours()<=7 || getHours() >=19) { // if it's night: before 7am, after 7pm
        /* getSeconds()%2 == 0 */
        document.getElementById("background_day").style.cssText =
          "opacity: 0;";
      } else {
        document.getElementById("background_day").style.cssText =
          "opacity: 1;";
      }

    setTimeout(moveHands, 1000); // calls function every second
    // out of milliseconds
  }
}

window.onload = moveHands;

// Solution: window.onload can only run one function at a time? 
