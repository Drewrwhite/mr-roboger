
//Business Logic

function beepBoop(number) {

  const digitArray = [];

  for (let i = 0; i <= number; i++) {
    if(i.toString().includes(3)) {
      digitArray[i] = "Won't you be my neighbor?";
    } else if (i.toString().includes(2)) {
      digitArray[i] = "Boop!";
    } else if (i.toString().includes(1)) {
      digitArray[i] = "Beep!";
    } else {
      digitArray[i] = i.toString();
    }
  }

  let digitOut = "";

  if 
    (digitArray.forEach(function(element) {
      digitOut = digitOut + element + " ";
    })
  
  document.getElementById("misterRobogerSong");  
  
  return numString.slice(0,digitOut.length - 1);


  //User Interface Logic



  event.preventDefault();