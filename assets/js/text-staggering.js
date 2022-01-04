// about section
const about = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-section .text",
        scroller: document.body, 
  
      }
})


about.from('.feature-section .hidden-text', 2, {
  y:"100%", 
  ease:Power4.easeOut,
  duration: 1,
  delay: 0.3,
  stagger: 0.1
})




//services section
const services = gsap.timeline({
  scrollTrigger: {
      trigger: ".services-section .text",
      scroller: document.body, 
      start: "top center",
  }
})

services.staggerFrom('.services-section .hidden-text', 1, {y:"100%", ease:Power4.easeOut}, 0.5)



//projects section
const projects = gsap.timeline({
  scrollTrigger: {
      trigger: ".projects-section .text",
      scroller: document.body, 

  }
})

// projects.staggerFrom('.projects-section .hidden-text',1, {y:"100%", ease:Power4.easeOut}, 0.1)
//     .from(".projects-section p", {
//         opacity: 0,
//         x: -10
//     })


projects.from(".projects-section p", {
    opacity: 0,
    x: -10
}).staggerFrom('.projects-section .hidden-text',1, {y:"100%", ease:Power4.easeOut}, 0.1)
   


//partners section
const partners = gsap.timeline({
    scrollTrigger: {
        trigger: ".partners-section .text",
        scroller: document.body, 
        start: "top center",
    }
  })
  
  partners.staggerFrom('.partners-section .hidden-text',1, {y:"100%", ease:Power4.easeOut}, 0.1)

  gsap.to(".multiple-items", {
      opacity: 1,
      x: -10,
      scrollTrigger: {
        trigger: ".partners-section .text",
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