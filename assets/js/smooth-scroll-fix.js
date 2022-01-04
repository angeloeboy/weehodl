gsap.registerPlugin(ScrollTrigger);


let bodyScrollBar = Scrollbar.init(document.body, { damping: 0.03, delegateTo: document });
 
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


