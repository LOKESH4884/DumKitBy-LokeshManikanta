
// document.querySelector(".w").addEventListener("click",function(){
//   var audio1 = new Audio("sounds/tom-3.mp3");
//   audio1.play();
// });
//
// document.querySelector(".a").addEventListener("click",function(){
//   var audio2 = new Audio("sounds/tom-1.mp3");
//   audio2.play();
// });
//
// document.querySelector(".s").addEventListener("click",function(){
//   var audio3 = new Audio("sounds/tom-2.mp3");
//   audio3.play();
// });
//
// document.querySelector(".d").addEventListener("click",function(){
//   var audio4 = new Audio("sounds/tom-4.mp3");
//   audio4.play();
// });
//
// document.querySelector(".j").addEventListener("click",function(){
//   var audio5 = new Audio("sounds/snare.mp3");
//   audio5.play();
// });
//
// document.querySelector(".k").addEventListener("click",function(){
//   var audio6 = new Audio("sounds/kick-bass.mp3");
//   audio6.play();
// });
//
// document.querySelector(".l").addEventListener("click",function(){
//   var audio7 = new Audio("sounds/crash.mp3");
//   audio7.play();
// });

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}



document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
   switch (key) {
      case "w":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
      case "a":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      case "s":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
      case "j":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
      case "k":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;
      case "l":
         var crash =new Audio("sounds/crash.mp3");
         crash.play();
         break;
      default: console.log(key);
}
}

function buttonAnimation(currentKey){
  var  activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);
}
