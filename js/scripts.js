
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

    digitArray.forEach(function(element) {
      digitOut = digitOut + element + " ";
    });
    
    return digitOut.slice(0,digitOut.length - 1);
  
  
  //User Interface Logic
// window.addEventListener()

document.getElementById("#digitInput").onsubmit(function(event) {


  const numInput = document.querySelector("input#number").value();

  const song = beepBoop(parseInt(numInput));
  document.querySelector("#misterRobogerSong").text(song);

  document.getElementById("#submitButton").hidden();
  document.getElementById("#againButton");

  event.preventDefault();
 
 }
}
}