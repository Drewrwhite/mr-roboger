
//Business Logic

function beepBoop(number) {

  const digitArray = [];

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes(3)) {
      digitArray[index] = "Won't you be my neighbor?";
    } else if (index.toString().includes(2)) {
      digitArray[index] = "Boop!";
    } else if (index.toString().includes(1)) {
      digitArray[index] = "Beep!";
    } else {
      digitArray[index] = index.toString();
    }
  }

  let digitOut = " ";

  digitArray.forEach(function (element) {
    digitOut = digitOut + element + " ";
  });

  return digitOut.slice(0, digitOut.length);

}

//User Interface Logic

$(document).ready(function () {
  $("#digitInput").submit(function (event) {

    const numInput = $("input#number").val();
    const song = beepBoop(parseInt(numInput));
    $("#misterRobogerSong").text(song);

    $("#submitButton").hide();
    $("#againButton").show();



    event.preventDefault();

  });
});
