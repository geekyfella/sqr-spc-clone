var tl = gsap.timeline()


tl.from("#SS-Logo",{
    y:-10,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:0.3,
})

tl.from("#child-nav01",{
    y:-10,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:0.3,
})

tl.from("#child-nav02",{
    y:-10,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:0.3,
})

tl.from("#everything, #tobooknowsell, #anything",{
    y:100,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:0.3,
})

gsap.from("#kathak-img",{
    x:-10,
    duration:0.5,
    delay:1,
    opacity:0,
})

gsap.from("#small-business-img",{
    x:10,
    duration:0.5,
    delay:1,
    opacity:0,
    // scrollTrigger:{
    //     trigger:"#small-business-img",
    //     scroller:"body",
    //     scrub:true,
    //     markers:false,
    // }
})