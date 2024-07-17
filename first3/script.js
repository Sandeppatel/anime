document.addEventListener("DOMContentLoaded", function() {
    const containerPart1 = document.querySelector(".part1");
    const containerPart2 = document.querySelector(".part2");
    const containerPart3 = document.querySelector(".part3");

 var container = document.querySelector(".container")


 const data = {
    dataitems1: {
        pate1: ["shop the latest", "ipad", "iphone", "apple - Innovative Tech", "mac"],
        pate2: ["home", "about", "desk", "alone"],
        pate3: ["find your nearest store", "explore new arrivals", "learn about Apple Watch", "discover iPad features"],
    },
    dataitems2: {
        pate1: ["shop the latest", "ipad", "iphone", "apple - Latest Gadgets"],
        pate2: ["home", "about", "desk", "alone"],
        pate3: ["buy iPhone", "explore iPad", "check out MacBooks", "visit Apple Store"],
    },
    dataitems3: {
        pate1: ["shop the latest", "mac", "watch", "iphone", "apple - Cutting Edge Technology"],
        pate2: ["home", "about", "alone"],
        pate3: ["Apple Innovations", "Apple Events", "MacBook Pro Details", "iPhone Accessories"],
    },
    dataitems4: {
        pate1: ["iphone", "apple - Discover New Features", "mac", "watch", "iphone"],
        pate2: ["home", "about", "desk", "alone"],
        pate3: ["Explore New Apple Products", "Apple Support", "MacBook Buying Guide", "iPhone Reviews"],
    },
    dataitems5: {
        pate1: ["shop the latest", "ipad", "iphone", "apple - Join the Future of Tech", "mac", "watch", "iphone"],
        pate2: ["home", "about", "desk", "alone"],
        pate3: ["Shop Apple Products", "Learn about iPad", "Explore iPhone Features", "Visit Apple Store Online"],
    },
    dataitems6: {
        pate1: ["shop the latest", "ipad", "iphone", "apple - Apple’s Latest Innovations"],
        pate2: ["home", "about", "desk", "alone"],
        pate3: ["Apple Product Launches", "Find the Right Apple Product", "Apple Technology Insights", "Explore New Gadgets"],
    },
};


    // Function to update the container content
    function updateContent(dataItem) {
        const selectedData = data[dataItem];
        
        if (selectedData) {
            containerPart1.innerHTML = selectedData.pate1.map(item => `<h4>${item}</h4>`).join("");
            containerPart2.innerHTML = selectedData.pate2.map(item => `<h4>${item}</h4>`).join("");
            containerPart3.innerHTML = selectedData.pate3.map(item => `<h4>${item}</h4>`).join("");
        }
    }

    // Set initial content based on the first h4 element in the text section
    const firstH4 = document.querySelector(".text h4");
    if (firstH4) {
        updateContent(firstH4.getAttribute("data-item"));
    }


    

    // Add click event listeners to all h4 elements in the text section
    document.querySelectorAll(".text h4").forEach(function(h4) {
        h4.addEventListener("mouseenter", function() {
            const dataItem = h4.getAttribute("data-item");
            updateContent(dataItem);
            
            container.style.height = "35%";
            container.style.display = "block";
            container.style.transition = "height 2s ease";
            container.classList.add('show');

        });
        h4.addEventListener("mouseleave", function(){
            container.style.height = "0%";
            container.classList.remove('show');
            container.style.display = "none";
        })
    });
});
