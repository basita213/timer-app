let timerDisplay = document.getElementById("timer");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

let interval;
let running = false;
let totalCs = 0; // total centiseconds

function formatTime(cs) {
  const hours = Math.floor(cs / 360000);
  const mins = Math.floor((cs % 360000) / 6000);
  const secs = Math.floor((cs % 6000) / 100);
  const csecs = cs % 100;

  return (
    String(hours).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0") + ":" +
    String(csecs).padStart(2, "0")
  );
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(totalCs);
}

function toggleTimer() {
  if (!running) {
    interval = setInterval(() => {
      totalCs++;
      updateDisplay();
    }, 10); 
    startStopBtn.textContent = "Stop";
  } else {
    clearInterval(interval);
    startStopBtn.textContent = "Start";
  }
  running = !running;
}

function resetTimer() {
  clearInterval(interval);
  running = false;
  totalCs = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
}

startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);
