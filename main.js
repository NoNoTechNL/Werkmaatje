const displayTime = document.getElementById("timer");
const pause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
const start1 = document.getElementById("btn-start1");
const start2 = document.getElementById("btn-start2");
const start3 = document.getElementById("btn-start3");
const start4 = document.getElementById("btn-start4");

// Timer section

let countdown;

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // for showing a zero in the otherwise empty space
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  // display to the page
  displayTime.textContent = display;
}

function timer(seconds) {
  // clear any existing timers
  clearInterval(timer);

  const now = Date.now();
  const soon = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((soon - Date.now()) / 1000);
    // this is a check to see if the timer should be stopped
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// these are the event listeners for checking to see if everything works and for the buttons to do what they're supposed to.
reset.addEventListener("click", () => {
  alert("this will stop the program");
  displayTime.textContent = "45:00";
  clearInterval(countdown);
});

// When start1 is pressed program 1 should start
start1.addEventListener("click", () => {
  location.href = "#timer";
});

// When start2 is pressed program 2 should start
start2.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 2");
});

// When start3 is pressed program 3 should start
start3.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 3");
});

// When start4 is pressed program 4 should start
start4.addEventListener("click", () => {
  location.href = "#timer";
  console.log("this works 4");
});

// this section uses the pause button just to make the timer work
