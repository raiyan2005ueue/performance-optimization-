let btn = document.querySelector('button');
btn.addEventListener('click', async function () {
  let heavy = await import('./code.js');
  heavy.veryheavy();
});
