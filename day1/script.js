// initial to final using to in gsap
// first give element , second object and give css in this object
// gsap.to(".div1", {
//   x: 1000,
//   duration: 3,
//   rotate:360,
//   delay:1,
//   backgroundColor : "red"
// });
// it's final to initial position to come

// gsap.from(".div1", {
//   x: 1000,
//   duration: 3,
//   rotate:360,
//   delay:1,
//   backgroundColor : "red"
// });
// var timeline = gsap.timeline();
// timeline.to("#box1", {
//   x: 1200,
//   duration: 3,
//   rotate: 360,
//   delay: 1,
//   //   backgroundColor : "red"
//   scale: 0.5,
// });
// timeline.to("#box2", {
//   x: 1200,
//   duration: 3,
//   rotate: 360,
//   // delay: 1,
//   //   backgroundColor : "red"
//   scale: 0.5,
// });
// timeline.to("#box3", {
//   x: 1200,
//   duration: 3,
//   rotate: 360,
//   // delay: 1,
//   //   backgroundColor : "red"
//   scale: 0.5,
// });
var tl = gsap.timeline();
tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
});
tl.from("#main h1", {
  x: -500,
  opacity: 0,
  stagger: 0.3,
});
tl.from("img", {
  x: -200,
  opacity: 0,
  stagger: 0.3,
});
