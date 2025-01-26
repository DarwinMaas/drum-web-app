//create an eventListener that listens keydown
document.addEventListener("keydown", function (e) {
  playSound(e.key);
});

//create a function that adds an eventListener to all button elements
for (var i = 0; i <= document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonText = this.innerHTML; //this refers to the current element in the loop
    playSound(buttonText);
  });
}

//create a function that plays the sound using a switch statement
function playSound(buttonClicked) {
  switch (buttonClicked) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("key is not registered");
      break;
  }
  console.log(buttonClicked);
}
