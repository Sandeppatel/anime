var items = document.querySelectorAll(".item1");
var left = document.querySelector(".container1");
var right = document.querySelector(".container2");

items.forEach(item => {
    item.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
});

right.addEventListener("dragover", function(e) {
    e.preventDefault();
});

right.addEventListener("drop", function(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text/plain");
    var draggableElement = document.getElementById(id);
    right.appendChild(draggableElement);
});

left.addEventListener("dragover", function(e) {
    e.preventDefault();
});

left.addEventListener("drop", function(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text/plain");
    var draggableElement = document.getElementById(id);
    left.appendChild(draggableElement);
});

