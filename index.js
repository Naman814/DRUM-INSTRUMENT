var i;
for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", click);
}

function click() {
  var innerHTML = this.innerHTML;
  makeSound(innerHTML);
  animation(innerHTML);

}


document.addEventListener("keypress",function(event) {
   makeSound(event.key);
     animation(event.key);

});

function animation(currentKey){

  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(removeAnimation, 100);
  function removeAnimation()
  {
    document.querySelector("."+currentKey).classList.remove("pressed");

  }

}




function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:

  }

}
