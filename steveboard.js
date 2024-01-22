let delayTime=0;
function fartIt(whichSteveSound){
 const audio = new Audio("sounds/" + whichSteveSound +".mp3");
 audio.play();
}
var steveButtons = document.querySelectorAll(".steve div.button, .steve button");
Array.from(steveButtons).forEach(steveButton => {
 steveButton.addEventListener("click", e => {
  const whichSteveSound = steveButton.getAttribute("id");
  checkDelay();
  setTimeout(function(){fartIt(whichSteveSound)}, (delayTime*1000));
 });
});

function checkDelay(){
 delayTime = document.querySelector("[name='delay']:checked").value;
}
