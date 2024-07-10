var items = document.querySelectorAll(".item1")
var container = document.querySelectorAll(".container1")


items.forEach(function(e){
    e.addEventListener('dragsstart' , function(elem){
            elem.dataTransfer.setData('text/plain', elem.target.id);
    })
});