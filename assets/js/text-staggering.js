

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

gsap.from($(".about-us-text"), {
  opacity: 0,
  y: 15,
  duration: 1,
 
})

gsap.from($(".community-section"), {
  opacity: 0,
  y: 15,
  duration: 1,
  scrollTrigger: {
    trigger: $(".community-section"),
    scroller: document.body, 
    start: "top 100%",
  }
})



var fundedValue={val:0} , funded = 12;

gsap.to(fundedValue,2,{
  val:funded,
  roundProps:"val",
  onUpdate:function(){
    document.getElementById("funded").innerHTML=`$${fundedValue.val}.5M`
  },
  scrollTrigger: {
    trigger: $(".stats"),
    scroller: document.body, 
  }
});

var investorNum={val:0} , investors = 1202;

gsap.to(investorNum,2,{
  val:investors,
  roundProps:"val",
  onUpdate:function(){
    document.getElementById("investor").innerHTML=investorNum.val
  },
  scrollTrigger: {
    trigger: $(".stats"),
    scroller: document.body, 
  }
});


var kolsValue={val:0} , kols = 272;

gsap.to(kolsValue,1,{
  val:kols,
  roundProps:"val",
  onUpdate:function(){
    document.getElementById("kols").innerHTML=kolsValue.val
  },
  scrollTrigger: {
    trigger: $(".stats"),
    scroller: document.body, 
  }
});

var shillersValue={val:0} , shillers = 387;

gsap.to(shillersValue,1,{
  val:shillers,
  roundProps:"val",
  onUpdate:function(){
    document.getElementById("shillers").innerHTML=shillersValue.val
  },
  scrollTrigger: {
    trigger: $(".stats"),
    scroller: document.body, 
  }
});


const statsInfo = gsap.utils.toArray('.stat-item');

statsInfo.forEach((stat, i) => {

  
  gsap.from(stat,{
    y: "-5%",
    opacity: 0,
    ease: Circ.easeOut,
    scrollTrigger: {
      trigger: $(".stats"),
      scroller: document.body, 
      start: "top center",
    }
  }, 1)

});

const featuresInfo = gsap.utils.toArray('.features-info-text');

featuresInfo.forEach((item, i) => {

  
  about.from(item, 2, {
    x: "-5%",
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
      start: "top 100%",
  }
})


services.from('.services-section .hidden-text', {
  y: "100%", 
  ease:Power4.easeOut,
  opacity: 0,
  stagger: 1,
  duration: 2
})


// partners section


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




  