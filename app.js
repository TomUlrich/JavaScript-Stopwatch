'use strict';

const time_div = document.querySelector('.time');
const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');
const reset_btn = document.querySelector('.reset');
const seconds_span = document.querySelector('#seconds');
const tens_span = document.querySelector('#tens');

let tens = 0;
let seconds = 0;
let interval;

start_btn.onclick = runWatch;
stop_btn.onclick = stopWatch;
reset_btn.onclick = resetWatch;

// runWatch
function runWatch() {
  // every 10ms (hundredth of a second)
  interval = setInterval(displayTime, 10);
  start_btn.disabled = true;
}

function displayTime() {
  tens++;
  if (tens <= 9) {
    tens_span.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    tens_span.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    seconds_span.innerHTML = '0' + seconds;
    tens = 0;
    tens_span.innerHTML = '0' + 0;
  }
  if (seconds > 9) {
    seconds_span.innerHTML = seconds;
  }
}

// stopWatch
function stopWatch() {
  clearInterval(interval);
  start_btn.disabled = false;
}

// resetWatch
function resetWatch() {
  tens = 0;
  seconds = 0;
  seconds_span.innerHTML = '00';
  tens_span.innerHTML = '00';
}
