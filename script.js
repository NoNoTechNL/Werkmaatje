const countdownEl = document.getElementById("timer");
const pause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
const start1 = document.getElementById("btn-start1");
const start2 = document.getElementById("btn-start2");
const start3 = document.getElementById("btn-start3");
const start4 = document.getElementById("btn-start4");

const startingMinutes = 45;
let time = startingMinutes * 60;

setInterval(updateTimer, 1000);

// this is the function for the countdown of the timer
// function updateTimer() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   countdownEl.innerHTML = `${minutes}:${seconds}`;
//   time--;
// }

// these are the event listeners for checking to see if everything works and for the buttons to do what they're supposed to.
reset.addEventListener("click", () => {
  countdownEl.innerHTML = "45:00";
  console.log("reset works");
});

start1.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 1");
});

start2.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 2");
});

start3.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 3");
});

start4.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 4");
});

// I dont know if this works yet because function for countdown needs to work first, otherwise timer will keep on going.

pause.addEventListener("click", function () {
  console.log("pause works");
  //   store current value in a variable and update the timer
  //   The current function returns null
  let currentTime = countdownEl.nodeValue;
  console.log(currentTime);
  countdownEl.innerHTML = currentTime;
});
