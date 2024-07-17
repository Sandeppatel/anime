const carouselSlide = document.querySelector('.carousel-images');
const carouselImages = document.querySelectorAll('.carousel-images img');

let counter = 1;
const size = carouselImages[0].clientWidth;

// Move the carousel to the second image (first clone)
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Function to go to the next image
function goToNextImage() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Function to go to the previous image
function goToPrevImage() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Event listeners for the next and previous buttons
document.querySelector('.next-btn').addEventListener('click', goToNextImage);
document.querySelector('.prev-btn').addEventListener('click', goToPrevImage);

// Reset carousel position when transitioning ends
carouselSlide.addEventListener('transitionend', () => {
    if (counter >= carouselImages.length - 1) {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if (counter <= 0) {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Automatic transition every 3 seconds
setInterval(goToNextImage, 1000);



var tl = gsap.timeline();
tl.from(".top img , h2", {
    y: -500,
    duration: 1,
    stagger : 0.1,
});

var texth1 = document.querySelector("h1  span")
var p = document.querySelector("p")


var count = 0 ;

var the = setInterval(() => {
    count++;
    texth1.innerHTML = count ;
    if(count ===  50){
        clearInterval(the)
        p.style.opacity = 1;
    }
}, 100);
