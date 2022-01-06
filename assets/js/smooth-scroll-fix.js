gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('.scroller');
let bodyScrollBar = Scrollbar.init(document.body, { damping: 0.05, delegateTo: document });
// let bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document });

 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});


bodyScrollBar.addListener(ScrollTrigger.update);


const fixedElem = document.querySelector('nav')
  bodyScrollBar.addListener(status => {
    const { offset } = status

    fixedElem.style.top = `${offset.y}px`
  })


$("nav p").click(() => {
  gsap.to(".menus", {
    opacity: 0,
    y: "-100%"
  })
})