const tnslider = tns({
    container:".slider",
    items:1,
    slideBy:"page",
    speed:700,
    nav: true,
    navPosition:"bottom",
    autoPlay:false,
    controlsContainer:"#controls",
    prevButton:".previous",
    nextButton:".next",
    responsive: {
      1150: {
        items: 2
      },
    },
    mouseDrag: 'mouseDrag',
})