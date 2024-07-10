var carouselSlide = document.querySelector('.image');
var carouselImages = document.querySelectorAll('.image img');

var counter = 0;
var size = carouselImages[0].clientWidth;

var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');

function goToNextImage() {
    if (counter >= carouselImages.length - 1) {
        counter = -1;
    }

    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function goToPrevImage() {
    if (counter <= 0) {
        counter = carouselImages.length;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', goToNextImage);
prevBtn.addEventListener('click', goToPrevImage);

setInterval(goToNextImage, 3000);
