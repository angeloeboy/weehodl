// about section
const about = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-section .text",
        scroller: document.body, 
      }
})


about.from('.feature-section .hidden-text', {
  y:"100%", 
  ease:Power4.easeOut,
  duration: 2,
  stagger: 0.3,
  opacity: 0,
  skewY: "5px"
}).from($(".globe-vid"), {
  opacity: 0,
  duration: 1
}, 2)



const featuresInfo = gsap.utils.toArray('.features-info-text');

featuresInfo.forEach((item, i) => {

  
  about.from(item, 2, {
    x: -50,
    opacity: 0,
    delay: i * 0.5,
    ease: Circ.easeOut,
  }, 1)

});




//services section
const services = gsap.timeline({
  scrollTrigger: {
      trigger: ".services-section .text",
      scroller: document.body, 
      start: "top 70%",
  }
})

services.from('.services-section .hidden-text', {
  y: "100%", 
  ease:Power4.easeOut,
  opacity: 0,
  stagger: 1,
  duration: 2
})


//partners section
const partners = gsap.timeline({
    scrollTrigger: {
        trigger: ".partners-section .text",
        scroller: document.body, 
        start: "top 80%",
    }
  })
  
  partners.from('.partners-section .hidden-text', {
    y:"100%", 
    ease:Power4.easeOut,
    duration: 1
  }).to(".multiple-items", {
      opacity: 1,
      duration: 3,
      delay: 2,
      scrollTrigger: {
        trigger: ".multiple-items",
        scroller: document.body, 
        start: "top center",
    }
  })




//footer section
const footer = gsap.timeline({
    scrollTrigger: {
        trigger: "footer .text",
        scroller: document.body, 
    }
  })
  
  footer.staggerFrom('footer .hidden-text', 1, {y:"100%", ease:Power4.easeOut}, 0.1)