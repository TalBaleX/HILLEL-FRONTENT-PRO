const form = document.querySelector("#form");
const timers = document.querySelector("#timers");

function createNewTimer(m, s) {
  let time = m * 60 + +s;

  let newTimer = document.createElement("div");
  newTimer.classList.add("timer");

  let timeSpan = document.createElement("div");
  timeSpan.classList.add("time-display");

  let span10minutes = document.createElement("span");
  let span1minute = document.createElement("span");
  let divider = document.createElement("span");
  divider.innerText = ":";
  let span10seconds = document.createElement("span");
  let span1second = document.createElement("span");

  let stopButton = document.createElement("button");
  stopButton.innerText = "Stop";
  stopButton.classList.add("stop-button");

  function updateTimerDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let minutesStr = String(minutes).padStart(2, "0");
    let secondsStr = String(seconds).padStart(2, "0");

    span10minutes.innerText = minutesStr[0];
    span1minute.innerText = minutesStr[1];
    span10seconds.innerText = secondsStr[0];
    span1second.innerText = secondsStr[1];
  }

  function intervalFunc() {
    updateTimerDisplay();
    if (time > 0) {
      time--;
    } else {
      clearInterval(interval);
    }
  }
  intervalFunc();
  const interval = setInterval(intervalFunc, 1000);

  stopButton.addEventListener("click", () => {
    clearInterval(interval);
    newTimer.remove();
  });

  newTimer.append(timeSpan);
  timeSpan.append(span10minutes);
  timeSpan.append(span1minute);
  timeSpan.append(divider);
  timeSpan.append(span10seconds);
  timeSpan.append(span1second);
  newTimer.append(stopButton);
  timers.append(newTimer);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewTimer(
    +form.elements.minutes.value || 0,
    +form.elements.seconds.value || 0
  );
});
