//debounce=> ek delay bataoge or utna delay jab bhi ayega
//action ka reaction milega

let input = document.querySelector('input');

function debounce(fnc, delay) {
  let time;
  return function (...args) {
    // ..args is the value from input
    clearTimeout(time);
    time = setTimeout(() => {
      fnc(...args);
    }, delay);
    // console.log(time);
  };
}

input.addEventListener(
  'input',
  debounce(function (...args) {
    // in this function code ...args comes
    //  from returned function
    console.log(...args);
  }, 1000) // this debounce function is called here
  // and returns another function and takes place of debounce function
  // and in that function passed the ...args from input
);
