const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



var tl = gsap.timeline({scrollTrigger:{
trigger: ".two",
start: "0% 95%",
end: "70% 50%",
scrub: true,
// markers: true,
}})

tl.to("#fanta",{
top: "120%",
left: "0%"
}, 'orange')
tl.to("#orange-cut",{
top:"160%",
left: "23%"
}, 'orange')
tl.to("#orange",{
width: "15%",
top:"160%",
right: "10%"
}, 'orange')
tl.to("#leaf",{
top:"110%",
rotate: "130deg",
left: "70%"
}, 'orange')
tl.to("#leaf2",{
top:"110%",
rotate: "130deg",
left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
trigger: ".three",
start: "0% 95%",
end: "20% 50%",
scrub: true,
// markers: true,
}})

tl2.from(".lemon1",{
rotate: "-90deg",
left: "-100%",
top: "110%"
}, 'ca')
tl2.from("#cocacola",{
rotate: "-90deg",
top: "110%",
left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
rotate: "90deg",
left: "100%",
top: "110%"
}, 'ca')
tl2.from("#pepsi",{
rotate: "90deg",
top: "110%",
left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
width:"18%",
left: "42%",
top: "204%"
}, 'ca')
tl2.to("#fanta",{
width:"35%",
top: "210%",
left: "33%",
}, 'ca')




document.addEventListener("DOMContentLoaded", function() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Define scroll animation
  gsap.to(".container", {
      x: 80,
      duration: 8,
      scrollTrigger: {
          trigger: ".container",
          start: "top 60%",
          end: "top 40%",
          toggleActions: "restart reverse resume complete",
          scrub: 5
      }
  });
});
