function fartIt(whichFart){
 const audio = new Audio("https://a11y-tools.com/presentations/SOTB23/Fartboard/" + whichFart +".mp3");
 audio.play();
}
var fartButtons = document.querySelectorAll(".fart div.button, .fart button");
Array.from(fartButtons).forEach(fartButton => {
 fartButton.addEventListener("click", e => {
  const whichFart = fartButton.getAttribute("id");
  fartIt(whichFart);
 });
});
