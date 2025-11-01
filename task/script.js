var rect = document.querySelector('#box');
rect.addEventListener('mousemove', function (details) {
  let rectanglelocation = rect.getBoundingClientRect();
  //   console.log(rectanglelocation);
  //   console.log(details.clientX);
  let insiderectval = details.clientX - rectanglelocation.left;
  if (insiderectval < rectanglelocation.width / 2) {
    let redcolour = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolour}, 0,0)`,
      ease: Power4,
    });
  } else {
    let bluecolour = gsap.utils.mapRange(
      rectanglelocation.width / 2,
      rectanglelocation.width,
      0,
      255,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolour})`,
      ease: Power4,
    });
  }
});

rect.addEventListener('mouseleave', function () {
  gsap.to(rect, {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  });
});
