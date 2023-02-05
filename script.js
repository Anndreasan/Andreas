/* Menyn är den som jag lagt fokus på för att få till med javascript. popup fönstret, klockan och timer lades till för att ville se vad mer jag kunde addera av det jag lärt mig */
//Hamburgare meny
console.log(openNav);
function openNav() {
  document.getElementById("myNav").style.width = "40%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
const navbar = document.querySelector('#navbar');


//Klocka
console.log(updateClock);
function updateClock1() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  document.getElementById("clock1").innerText = time;
}

setInterval(updateClock1, 1000);

//start timer
console.log(startTimer);
let startTime;

function startTimer() {
  startTime = new Date();
  setInterval(updateClock, 1000);
}
function updateClock() {
  const currentTime = new Date();
  const timeDifference = currentTime - startTime;
  const timeInSeconds = Math.round(timeDifference / 1000);
  document.getElementById("clock").innerText = `tid på sidan: ${timeInSeconds} seconds`;
}
window.onload = startTimer;

//Välkommen popup fönster
console.log(setTimeout)
var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
  document.querySelector(".popup-container").style.display = "none";
});
setTimeout(function() {
  document.querySelector(".popup-container").style.display = "block";
}, 4000);




