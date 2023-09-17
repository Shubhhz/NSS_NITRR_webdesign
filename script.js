
gsap.to(".main",{
    backgroundColor:"#000",
    
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -15%",
        end:"top -70%",
        scrub:2,
        // markers:true,
         
        
    }
})
