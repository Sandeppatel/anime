document.addEventListener('DOMContentLoaded', () => {
    var text = document.querySelector(".text1").textContent;

    var flag = "";
    var h4text = text.split("");
    h4text.forEach(function(elem) {
        flag += `<span>${elem}</span>`;
    });

    document.querySelector(".text1").innerHTML = flag;

    gsap.from(".text1 span", {
        y: 400,
        duration: 4,
        stagger: 0.1,  // Adjust stagger value for better effect
    });
});
