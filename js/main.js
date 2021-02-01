$(document).ready(function () {
  // init scrollMagic
  const controller = new ScrollMagic.Controller()

  // pin the intro

  const pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '.top',
      triggerHook: 0,
      duration: '75%'
    })
    .setPin('.top', {
      pushFollowers: false
    })
    .addTo(controller)

  const pinIntroScene2 = new ScrollMagic.Scene({
      triggerElement: '.center',
      triggerHook: 0.4,
    })
    .setPin('.top', {
      pushFollowers: false
    })
    .addTo(controller)

  // parallax scene

  //   .setTween(TweenMax.from('.bg', 1, {
  //     y: '-40%',
  //     ease: Power0.easeNone
  //   }))
  var parallaxTl = new TimelineMax()
  parallaxTl.from('.bgc-wrap', '1', {
      autoAlpha: 0,
      ease: Power0.easeNone
    }, 0)
    .from('.bg', 2, {
      y: '-40%',
      ease: Power0.easeNone
    }, 0)
  const slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '.bgc',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(parallaxTl)
    .addIndicators({
      name: 'bgc  scene',
      colorStart: 'blue',
      colorEnd: 'red'
    })
    .addTo(controller)

  // build a scene
  $('.box').each(function (item, i) {
    const ourscene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        // duration: '100%', //起始到結束的範圍
        triggerHook: 0.6, //判定位置
        // reverse: false //是否重複
      })
      .setClassToggle(this, 'fade-in')
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 0,
        colorStart: 'blue',
        colorEnd: 'red'
      }) //判定規則
      .addTo(controller)
  })
})