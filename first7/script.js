
var lastScrollTop = 0 ;
var navbar = document.querySelector(".nav")

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      navbar.style.top = "-10%";  
    }
    else{
        navbar.style.top = "0";
    }
    lastScrollTop  = scrollTop ;
})

var elements = document.querySelectorAll(".text h1");
elements.forEach(function(one) {
    var oneh1 = one.textContent.split("");
    var cullter = "";
    oneh1.forEach(function(e) {
        cullter += `<span>${e}</span>`;
    });
    one.innerHTML = cullter;
});


gsap.from(".text h1" ,{
    y : 500 ,
    duration : 0.7,
    stagger : 0.1,
})

gsap.to("h1 span", {
    duration : 2,
    stagger : 0.2,
    color: "blue",
    scrollTrigger : {
        scroller  : "body",
        trigger : ".text ",
        markers : true ,
        scrub : true ,
        start : "top 0%",
        end : "top -20%",
        pin : true ,

    }
})