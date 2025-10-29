//throttle => interval per chalega, action agar hota rha and aapne ek interval
// bataya to utne interval me aapka event chalega
let input = document.querySelector('input');

function throttle(fnc, delay) {
  let prevtime = 0;
  return function (...args) {
    let now = Date.now();
    // console.log(now);
    if (now - prevtime >= delay) {
      prevtime = now;
      fnc(...args);
    }
  };
}

input.addEventListener(
  'input',
  throttle(function (...args) {
    console.log(...args);
  }, 1000)
);
