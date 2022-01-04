

gsap.to("body", {
  backgroundColor: '#F5F5F5',
  duration: 0.5,
  scrollTrigger: {
      trigger: ".partners-section",
      toggleActions: "play none none reverse",
      scroller: document.body, 

  },
})


gsap.to(".services-section", {
  css: { 'filter': 'invert(100%)' },
  duration: 0.5,
  scrollTrigger: {
      trigger: ".partners-section",
      toggleActions: "play none none reverse",
      scroller: document.body, 

  },
})




const featuresInfo = gsap.utils.toArray('.features-info-text');

featuresInfo.forEach((item, i) => {

  let words = $(item).text().split(" ");
  $(item).text("")

  words.map((word) => {
    $(item).append(`<div> <span>${word} </span></div> `)

  })
});


const featuresInfoSpan = gsap.utils.toArray('.features-info-text span');

featuresInfoSpan.forEach( (span, i) => {
    gsap.to(span, {
      y: "0%",
      duration: 1,
      delay: i * 0.01,
      scrollTrigger: {
          trigger: ".features-info-text",
          scroller: document.body, 
      },
    })
})




const serviceItem = gsap.utils.toArray('.service-item');
serviceItem.forEach((item, i) => {
  gsap.to(item, { 
    y: 10,
    opacity: 1,
    delay: i * 0.3,
    scrollTrigger: {
      trigger: ".services-section",
      toggleActions: "play pause none reverse",
      scroller: document.body, 
      start: "top center",

    }
  })

  $(item).mouseover(() => {
    $(item).children(".service-title-container").children(".icon").children("video")[0].play()
  })
  

});





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
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
});



// const fixedElem = document.querySelector('nav')
//   bodyScrollBar.addListener(status => {
//     console.log(status)
//     const { offset } = status

//     fixedElem.style.top = `${offset.y}px`
//   })


// $("nav p").click(() => {
//   gsap.to(".menus", {
//     opacity: 0,
//     y: "-100%"
//   })
// })









const project = gsap.utils.toArray('.project-item');

project.forEach((project) => {



  $(project).children(".project-infos").children(".more").click(() => {
    let tl = gsap.timeline();
      tl
      .to($(project).children(".project-infos"), {
        css: {"width": "150%"}
      }, 0.1)
      .to($(project).children(".project-infos").children(".description"), {
        css: {"max-height": "500px", "padding-bottom": "50px"},
        duration: 1
      })
      .from($(project).children(".project-infos").children(".description").children("p"), {
        x: -10,
        opacity: 0,
      }, 0.5)


    console.log("clicked")
  })


  $(project).mouseenter(() => {
    gsap.to($(project).children(".project-infos"), {
      opacity: 1,
      duration: 0.5
    })
  })


  $(project).mouseleave(() => {
    let tl = gsap.timeline();
    tl
    .to($(".description"), {
      css: {"max-height": "0px", "padding-bottom": "0px"},
    })
    .to($(project).children(".project-infos"), {
      css: {"width": "100%"}
    })
    .to($(project).children(".project-infos"), {
      opacity: 0,
      duration: 0.5
    })


  })
  
})


// $(".more").click(() => {
//   let tl = gsap.timeline();
//     tl.to($(".description"), {
//       css: {"max-height": "500px"},
//       duration: 1
//     })
//     .from($(".description p"), {
//       x: -10,
//       opacity: 0,
//     }, 0.2 )
//     .to(".more", {
//       css
//     })
// })


// $(".project-item").mouseleave(() => {
//   gsap.to($(".description"), {
//     css: {"max-height": "0px"},
//   })


  
//   console.log("fklsdf")
// })





