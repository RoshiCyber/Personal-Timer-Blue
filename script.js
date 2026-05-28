let seconds = 0;
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");


function updateDisplay(){
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;


display.textContent =
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + "!" +
    String(secs).padStart(2,"0");
}

startBtn.addEventListener("click", () => {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds ++;
        updateDisplay();
    }, 1000);
});

stopBtn.addEventListener("click", ()=> {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
});