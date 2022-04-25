TweenMax.staggerFrom(
  ".navbar",
  0.8,
  {
    y: "60",
    ease: Power3.easeInOut,
    opacity: 0,
    delay: 1,
  },
  0.1
);

TweenMax.staggerFrom(
  ".centerbar > div",
  0.8,
  {
    x: "-40",
    ease: Power3.easeInOut,
    opacity: 0,
    delay: 1.2,
  },
  0.1
);

TweenMax.staggerFrom(
  ".bottombar > div",
  0.8,
  {
    y: "60",
    ease: Power3.easeInOut,
    opacity: 0,
    delay: 1,
  },
  0.1
);

TweenMax.staggerFrom(
  ".images > div",
  0.8,
  {
    x: "-200",
    ease: Power3.easeInOut,
    opacity: 0,
    delay: 1.2,
  },
  0.16
);

TweenMax.staggerFrom(
  ".header-container > div",
  3,
  {
    y: "500",
    ease: Elastic.easeOut.config(1.5, 0.4),
    delay: 2,
  },
  0.2
);