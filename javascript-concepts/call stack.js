// callstack (execution stack)
// js single-threaded hai -> ek time pe ek hi kaam karta hai
// jab function call karte hai -> wo stack ke top pe chala jata hai
// function complete hone ke baad stack se nikal jata hai(pop ho jata hai)

function a() {
  console.log('a');
}
function b() {
  a();
  console.log('b');
}
function c() {
  b();
  console.log('c');
}
function d() {
  c();
  console.log('d');
}

d();
