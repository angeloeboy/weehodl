gsap.registerPlugin(ScrollTrigger);


// const coin = document.querySelector(".coins");
// const coinOne = document.querySelector(".coins-2");
// const coinTwo = document.querySelector(".coins-3");
// const coinThree = document.querySelector(".coins-4");
// const coinFour = document.querySelector(".coins-5");


// const randomX = random(5, 15);
// const randomY = random(10, 20);
// const randomDelay = random(0, 5);
// const randomTime = random(3, 5);
// const randomTime2 = random(5, 50);
// const randomAngle = random(8, 12);

// const animate = (item) => {
//     gsap.set(item, {
//         x: randomX(1),
//         y: randomX(1),
//         rotation: randomAngle(-1)
//       });
//       moveX(item, 1);
//       moveY(item, -1);
//       rotate(item, 1);
// }

// function rotate(target, direction) {
  
//   TweenLite.to(target, randomTime2(), {
//     rotation: randomAngle(direction),
//     delay: randomDelay(),
//     ease: Sine.easeInOut,
//     onComplete: rotate,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveX(target, direction) {
  
//   TweenLite.to(target, randomTime(), {
//     x: randomX(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveX,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveY(target, direction) {
  
//   TweenLite.to(target, randomTime(), {
//     y: randomY(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveY,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function random(min, max) {
//   const delta = max - min;
//   return (direction = 1) => (min + delta * Math.random()) * direction;
// }


// gsap.timeline()
//     .from(".subtitle", {
//         x: -20,
//         duration: 1,
//         opacity: 0,
//         delay: 1,
//     })
//     .from(".subtitle span", {
//       css: {
//         'width' : "0px"
//       },  
//       ease:Power4.easeOut,
//       duration: 1,
//       delay: 1,
//       opacity: 0
//     }, 0.15)
//     .from('.hero-section .hidden-text',  {
//         y:"5%", 
//         ease:Power4.easeOut,
//         opacity: 0,
//         duration: 2
//     }, 1.5)
//     .from(".coin", {
//         opacity: 0,

//     }, 2).add(
//       animate(coin),
//       animate(coinOne),
//       animate(coinTwo),
//       animate(coinThree),
//       animate(coinFour),
//   )    

// //coins hover effects
// const logotext = new TimelineMax();
// const text = document.querySelectorAll(".coin");
// logotext.staggerFrom(text, 0.95, {transformOrigin:"50% 50%", opacity:0, scale:0.85,  ease:Power2.easeOut}, 0.020);

// var hover = false;

// text.forEach(function(element, i) {
  
//   element.addEventListener("mouseover", function( event ) {
//     if(!hover) {
//       TweenMax.to(element, 1, {transformOrigin:"50% 50%", scale:1.1});
//     }
//     hover = true;
//   }, false);
  
//   element.addEventListener("mouseleave", function( event ) {
//     hover = false;
//     TweenMax.to(element, 1, {transformOrigin:"50% 50%", scale:1});
//   }, false);
// });

// let scrolled = false;

// ScrollTrigger.create({
//   trigger: $(".testing-2"),
//   start: "top",
//   onUpdate: (self) => {
//     if(self.progress.toFixed(3) < 0.1){
//       scrolled = false

//     }else{
//       scrolled = true
//     }

//     if(self.progress.toFixed(3) > 0.1 && self.progress.toFixed(3) < 0.4 ){
//       $("#myVideo2")[0].play()
//       setTimeout(() => {
//         $("#myVideo2")[0].pause()
//       }, 1000);
//     }

//     if(self.progress.toFixed(3) == 0 && scrolled){
//       $("#myVideo2")[0].play()
//       setTimeout(() => {
//         $("#myVideo2")[0].currentTime = 0;

//       }, 1000);
//     }

//   }
// })

// gsap.to($(".text-animation"), {
//   y: "-44%",
//   scrollTrigger: {
//     trigger: ".text-animation",
//     scroller: document.body, 
//     start: "center center",
//     scrub: 1
// }
// })

// $("#myVideo")[0].pause()
// $("#myVideo2")[0].pause()

// $(document).ready(function(){
//   setTimeout(() => {
//     $(".text-animation")[0].play()
    
//   }, 1000);
// });

// let playSecondVid = () => {
//   $("#myVideo")[0].play()
// }

// let changeVid  = () => {



//   $("#myVideo").fadeOut();

//   setTimeout(() => {
//   $("#myVideo2").fadeIn();
    
//   }, 500);


// }

ScrollTrigger.create({
  trigger: $(".testing-2"),
  start: "top",
})

gsap.to($("nav"), {
  css: {"background-color": "#0d0d0d"},
  scrollTrigger: {
    trigger: ".testing-2",
    scroller: document.body, 
    start: "center center",
    scrub: true
}
})

$(window).load(() => {

  // setTimeout(() => {
  //   $(".testing-2 .firstFrame").attr("src","assets/image/Weehodl_Wolf_No-BG.gif")
  // }, 1000);

  // setTimeout(() => {
  //   $(".testing-2 .lastframe").css("opacity","1")  
  //   $(".testing-2 .firstFrame").css("opacity","0")  
  //   $(".testing-2 .lastframe").css("z-index","3")  

  // }, 9000);
  




})



let interval = setInterval(() => {
  var image = document.getElementById('animation');
  var isLoaded = image.complete && image.naturalHeight !== 0;

  if(isLoaded){
      setTimeout(() => {
    $(".testing-2 .firstFrame").attr("src","assets/image/Weehodl_Wolf_No-BG.gif")
  }, 1000);

  setTimeout(() => {
    $(".testing-2 .lastframe").css("opacity","1")  
    $(".testing-2 .firstFrame").css("opacity","0")  
    $(".testing-2 .lastframe").css("z-index","3")  

  }, 9000);
    clearInterval(interval)
  }
  
}, 1000);


