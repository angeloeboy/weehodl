gsap.registerPlugin(ScrollTrigger);


const coin = document.querySelector(".coins");
const coinOne = document.querySelector(".coins-2");
const coinTwo = document.querySelector(".coins-3");
const coinThree = document.querySelector(".coins-4");
const coinFour = document.querySelector(".coins-5");


const randomX = random(5, 15);
const randomY = random(10, 20);
const randomDelay = random(0, 5);
const randomTime = random(3, 5);
const randomTime2 = random(5, 50);
const randomAngle = random(8, 12);

const animate = (item) => {
    gsap.set(item, {
        x: randomX(1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });
      moveX(item, 1);
      moveY(item, -1);
      rotate(item, 1);
}

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


gsap.timeline()
    .from(".subtitle", {
        x: -20,
        duration: 1,
        opacity: 0,
        delay: 1,
    })
    .from(".subtitle span", {
      css: {
        'width' : "0px"
      },  
      ease:Power4.easeOut,
      duration: 1,
      delay: 1,
      opacity: 0
    }, 0.15)
    .from('.hero-section .hidden-text',  {
        y:"5%", 
        ease:Power4.easeOut,
        opacity: 0,
        duration: 2
    }, 1.5)
    .from(".coin", {
        opacity: 0,

    }, 2).add(
      animate(coin),
      animate(coinOne),
      animate(coinTwo),
      animate(coinThree),
      animate(coinFour),
  )    

//coins hover effects
const logotext = new TimelineMax();
const text = document.querySelectorAll(".coin");
logotext.staggerFrom(text, 0.95, {transformOrigin:"50% 50%", opacity:0, scale:0.85,  ease:Power2.easeOut}, 0.020);

var hover = false;

text.forEach(function(element, i) {
  
  element.addEventListener("mouseover", function( event ) {
    if(!hover) {
      TweenMax.to(element, 1, {transformOrigin:"50% 50%", scale:1.1});
    }
    hover = true;
  }, false);
  
  element.addEventListener("mouseleave", function( event ) {
    hover = false;
    TweenMax.to(element, 1, {transformOrigin:"50% 50%", scale:1});
  }, false);
});

ScrollTrigger.create({
  trigger: $(".testing-2"),
  start: "top",
  onUpdate: (self) => {
    console.log(self.progress.toFixed(3))
    if(self.progress.toFixed(3) > 0.3){
      $("#myVideo2")[0].defaultPlaybackRate = 3.0;
      $("#myVideo2")[0].play()
    }

  }
})