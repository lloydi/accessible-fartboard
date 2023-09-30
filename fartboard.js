let delayTime=0;
function fartIt(whichFart){
 const audio = new Audio("farts/" + whichFart +".mp3");
 audio.play();
}
var fartButtons = document.querySelectorAll(".fart div.button, .fart button");
Array.from(fartButtons).forEach(fartButton => {
 fartButton.addEventListener("click", e => {
  const whichFart = fartButton.getAttribute("id");
  checkDelay();
  setTimeout(function(){fartIt(whichFart)}, (delayTime*1000));
 });
});

function checkDelay(){
 delayTime = document.querySelector("[name='delay']:checked").value;
}
