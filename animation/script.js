gsap.to(".page2 .img" , {
 Transform : "translateX(-350%)",
 buration : 4,
  scrollTrigger : {
    scroller : "body",
    trigger : ".page2",
    markers : true ,
    start : "top 0%",
   end  : "top -60%",
    scrub : 2 ,
    pin : true ,
   
  }
})