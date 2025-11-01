window.addEventListener('mousemove', function (details) {
  let rect = document.querySelector('.box');

  var xval = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100 + rect.getBoundingClientRect().height / 2,
    window.innerHeight - (100 + rect.getBoundingClientRect().height / 2),
    details.clientY
  );
  gsap.to(rect, {
    top: xval,
    ease: Power4,
  });
});
