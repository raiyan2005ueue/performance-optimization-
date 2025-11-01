let outerdiv = document.querySelector('div');
const throttlefunction = (func, delay) => {
  let prev = 0;
  return function (...args) {
    let now = Date.now();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
outerdiv.addEventListener(
  'mousemove',
  throttlefunction((details) => {
    var imagediv = document.createElement('div');
    imagediv.classList.add('imagediv');
    imagediv.style.left = details.clientX + 'px';
    imagediv.style.top = details.clientY + 'px';

    var image = document.createElement('img');
    image.setAttribute(
      'src',
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
    );
    imagediv.appendChild(image);
    document.body.appendChild(imagediv);
    gsap.to(image, {
      y: '0',
      ease: Power1,
      duration: 0.5,
    });
    gsap.to(image, {
      y: '100%',
      delay: 0.5,
      ease: Power1,
    });
    setTimeout(() => {
      imagediv.remove();
    }, 1000);
  }, 150)
);
