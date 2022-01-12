//menu

const serviceslink= document.querySelector('#services');
const partnerslink= document.querySelector('#partners');
const portfolio= document.querySelector('#portfolio');
const contact= document.querySelector('#contact');

var scrollServices = serviceslink.offsetTop;
var scrollPartners = partnerslink.offsetTop - 500;
var scrollPortfolio = portfolio.offsetTop - 500;
var scrollContact = contact.offsetTop - 500;

let width = $(window).width();
console.log(width)

let menuClickedFunction = () => {

  if(width <= 800){
    if(!menuClicked){
      $(".menus").css("display", "flex")
  
      setTimeout(() => {
        $(".menus").toggleClass("active")
      }, 300);
  
      menuClicked = true
  
      menuLinks.forEach((link, i) => {
        gsap.from(link, {
          x: 20,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.2
        })
      })
  
    }else{
      $(".menus").toggleClass("active")
  
      menuLinks.forEach((link, i) => {
        gsap.to(link, {
          x: 0,
          duration: 0.5,
          delay: i * 0.2
        })
      })
  
      setTimeout(() => {
        $(".menus").css("display", "none")
  
      }, 300);
      menuClicked = false
  
    }
  }


  

} 

$(".services-link").click(() => {
  bodyScrollBar.scrollTo(0,serviceslink.offsetTop - 200, 1000 )
  menuClickedFunction();
})

$(".partners-link").click(() => {
  bodyScrollBar.scrollTo(0,partnerslink.offsetTop - 71, 1000 )
  menuClickedFunction();

})

$(".portfolio-link").click(() => {
  menuClickedFunction();
  bodyScrollBar.scrollTo(0,portfolio.offsetTop - 71, 1000 )
})

$(".contact-link").click(() => {
  menuClickedFunction();
  bodyScrollBar.scrollTo(0,contact.offsetTop - 100, 1000 )
})




let menuClicked = false

const menuLinks = gsap.utils.toArray('.menus li');



$(".menu-icon").click(() => {

  menuClickedFunction();
})


// gsap.to("body", {
//   backgroundColor: '#F5F5F5',
//   duration: 0.5,
//   scrollTrigger: {
//       trigger: ".partners-section",
//       toggleActions: "play none none reverse",
//       scroller: document.body, 
//   },
// })

// gsap.to(".services-section", {
//   css: { 'filter': 'invert(100%)' },
//   duration: 0.5,
//   scrollTrigger: {
//       trigger: ".partners-section",
//       toggleActions: "play none none reverse",
//       scroller: document.body, 
//   },
// })




//Feature section
// let wordsTitle = $(".feature-section .first").text().split(" ");
// $(".feature-section .first").text("")

// wordsTitle.map((wordsTitle) => {
//   $(".feature-section .first").append(`<div> <span>${wordsTitle} </span></div> `)
// })

// const featuresInfoTitle = gsap.utils.toArray('.feature-section .first span');

// featuresInfoTitle.forEach( (span, i) => {

//   gsap.from(span, {
//     y: "100%",
//     duration: 1,
//     delay: i * 0.1,
//     scrollTrigger: {
//         trigger: $('.feature-section .first span'),
//         scroller: document.body, 
//         start: "top center",
//     },
//   })
// })


// let offerTitle = $(".services-section .title").text().split(" ");
// $(".services-section .title").text("")

// offerTitle.map((offerTitle) => {
//   $(".services-section .title").append(`<div> <span>${offerTitle} </span></div> `)
// })

// const offerTitleSpan = gsap.utils.toArray(".services-section .title span");

// offerTitleSpan.forEach( (span, i) => {

//   gsap.from(span, {
//     y: "100%",
//     duration: 1,
//     delay: i * 0.1,
//     scrollTrigger: {
//         trigger: $(".services-section .title"),
//         scroller: document.body, 
//         start: "top center",
//     },
//   })
// })



//services

if($(window).width() > 500){
  const serviceItem = gsap.utils.toArray('.service-item');

  serviceItem.forEach((item, i) => {

    gsap.from(item, { 
      duration: 0.5,
      y: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: item,
        toggleActions: "play pause none none",
        scroller: document.body, 
        start: "top 100%",
      }
    })


  });
}



//projects
let projectsText = $(".second").text().split(" ");
$(".second").text("")

projectsText.map((word) => {
  $(".second").append(`<div> <span>${word} </span></div> `)
})

const projectsSectionSpan = gsap.utils.toArray('.second div');

projectsSectionSpan.forEach( (span, i) => {

    gsap.from(span, {
      y: "100%",
      duration: 0.8,
      opacity: 0,
      delay: i * 0.08,
      skewY: "1px",
      scrollTrigger: {
          trigger: span,
          scroller: document.body, 
      },
    })

    
})


gsap.from(".projects-container", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
      trigger: ".projects-container",
      toggleActions: "play none none none",
      scroller: document.body, 
      start: "top bottom",
  },
})

//project items animation
const project = gsap.utils.toArray('.project-item');

project.forEach((project) => {
  let clicked = false;


  if($(window).width() > 500){
    $(project).children(".project-infos").children(".more").click(() => {

      if(clicked){
        let leave = gsap.timeline();
        leave
        .to($(".description"), {
          css: {"max-height": "0px", "padding-bottom": "0px"},
        })
        .to($(project).children(".project-infos"), {
          css: {"width": "100%", "z-index": "initial"},
          duration: 0.1
        })
        .to($(project), {
          css: {"z-index": "initial"},
        })
        .to($(project).children(".project-infos"), {
          opacity: 0,
          duration: 0.5
        }, 0.1)
        clicked = false
      }else{
        let tl = gsap.timeline();
        tl
        .to($(project), {
          css: {"z-index": "70"},
          duration: 0.1
        }, 0.1)
        .to($(project).children(".project-infos").children(".description"), {
          css: {"max-height": "500px", "padding-bottom": "50px"},
          duration: 0.4
        },0.2)
  
        clicked = true
      console.log("clicked")
      }
  
     
    })
  
  
    $(project).mouseenter(() => {
      gsap.to($(project).children(".project-infos"), {
        opacity: 1,
        duration: 0.3
      })
    })
  
  
    $(project).mouseleave(() => {
  
      if(clicked){
        let leave = gsap.timeline();
        leave
        .to($(".description"), {
          css: {"max-height": "0px", "padding-bottom": "0px"},
        })
        .to($(project).children(".project-infos"), {
          css: {"width": "100%", "z-index": "initial"},
          duration: 0.1
        })
        .to($(project), {
          css: {"z-index": "initial"},
        })
        .to($(project).children(".project-infos"), {
          opacity: 0,
          duration: 0.5
        }, 0.1)
      }else{
        let leave = gsap.timeline();
        leave
        .to($(project).children(".project-infos"), {
          opacity: 0,
          duration: 0.5
        }, 0.1)
      }
  
      clicked = false
  
    })
  }else{
    $(project).click(() => {
      let id = $(project).attr("data-id");
      $(".projects-infos-container .project").css("display", "none");

      $('.projects-infos-container div[data-id=' + id + ']').fadeIn();
      $(".projects-infos-container").fadeIn();


    })


    $(".projects-infos-container .close").click(() => {
      $(".projects-infos-container").fadeOut();
      $(".projects-infos-container .project").fadeOut();

    });

  }

  
})





//video hover
let vidCircle = $(".feature-section .circle");
let videoHover = $(".video");

$(".video").click(() => {
  console.log("fdsfs")
})

gsap.set(vidCircle, { scale: 0, xPercent: -50, yPercent: -50 });

videoHover.mouseenter((e) => {
  gsap.to(vidCircle, 0.1, { scale: 1, opacity: 1 });
});


videoHover.mouseleave((e) => {
  gsap.to(vidCircle,  {
    opacity: 0,    
    ease: Power0.easeNone,  
    duration: 0.1,
  });

});

videoHover.mousemove((e) => {
    positionCircle(e);
});


function positionCircle(e) {

  var relX = e.offsetX 
  var relY = e.offsetY

  gsap.to(vidCircle, 0.05, { x: relX, y: relY, opacity: 1});
}



//play video on hover
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
    $('video', this).on("ended", () => {
      $('video', this).get(0).play(); 
    })
}

function hideVideo(e) {
    $('video', this).
    get(0).pause(); 
}


//carousel 
// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   adaptiveHeight: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 1000,

//   responsive: [
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,

        
//       }
//     }

//   ]
// });

if($(window).width() <= 500){



  function testimonialsSlick() {
    if (typeof $.fn.slick == 'function') {
      window.clearInterval(slickInterval)
      console.log("refresh the scrollTrigger")

      setTimeout(() => {
        ScrollTrigger.refresh()
        
      }, 300);  

   }
}
var slickInterval = window.setInterval(testimonialsSlick, 300);

  $('.services-section .services-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    appendArrows: $(".arrows"),
    prevArrow: $(".prev"),
    nextArrow: $(".next"),

    slidesToShow: 1,
      dotsClass: 'dots'
  });
  $(".dots button").text("")


  
}






$("#wolf-animation")[0].pause();

$(document).ready(() => {
  $("#wolf-animation")[0].currentTime = 0;
  setTimeout(() => {
   $("#wolf-animation")[0].play();
    
  }, 1500);

})


//scroll to top
$(".scroll-to-top").click(() => {
  bodyScrollBar.scrollTo(0, 0, 1000 )
})

$("nav .logo-container").click(() => {
  bodyScrollBar.scrollTo(0, 0, 1000 )
})








