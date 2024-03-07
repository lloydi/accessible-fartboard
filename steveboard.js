let delayTime=0;
const captionViewer = document.querySelector('#caption-viewer');
let timeout;

function sayIt(whichSteveSound){
 const audio = new Audio("sounds/" + whichSteveSound +".mp3");
 audio.play();
}
var steveButtons = document.querySelectorAll(".steve div.button, .steve button");
Array.from(steveButtons).forEach(steveButton => {
 steveButton.addEventListener("click", e => {
  const whichSteveSound = steveButton.getAttribute("id");
  checkDelay();
  setTimeout(function(){sayIt(whichSteveSound)}, (delayTime*1000));
  //show caption
  if (captionViewer){
   const soundbiteIDref = steveButton.getAttribute("aria-describedBy")
   const soundbite = document.querySelector("#" + soundbiteIDref).textContent.trim();
   updateStatus(soundbite);
  }
 });
});

function checkDelay(){
 if(document.querySelector("[name='delay']")) {
  delayTime = document.querySelector("[name='delay']:checked").value;
 }
}

function updateStatus(soundbite){
  captionViewer.innerHTML=soundbite;
  clearStatus()
}

function removeStatus(){
  captionViewer.innerHTML="";
  clearStatus()
}

function clearStatus(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    removeStatus();
  },3000);
}
