 var storiya =  document.querySelector(".storiyan")
  var story = document.querySelector(".story")
  var full =  document.querySelector(".full")
  var dpimg =  document.querySelector(".full-nav .left img")
  var h1  =  document.querySelector(".left h4");
  var time = document.querySelector(".left time")
var arr  = [
    {
        name : "sandeep patel",
        dp : "https://images.unsplash.com/photo-1639566420586-1b6d3d295f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://plus.unsplash.com/premium_photo-1664046912483-911576992f5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        name : "pratima patel",
        dp : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://images.unsplash.com/photo-1635282037653-707173ae1753?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        name : "anuj patel",
        dp : "https://images.unsplash.com/photo-1688572865439-be9cd43b6986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://images.unsplash.com/photo-1616089804112-f0a475d1b193?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        name : "amarjeet patel ",
        dp : "https://images.unsplash.com/photo-1685364461068-22263cd7478e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        name : "vikash patel ",
        dp : "https://images.unsplash.com/photo-1686393858329-8bdb28e5025f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        name : "amardeep saket",
        dp : "https://plus.unsplash.com/premium_photo-1675130119337-9754958e7457?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storya : "https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
]
var container = "";

arr.forEach(function(val , idx ) {
    container += ` <div class="story">
                <img id="${idx}" src="${val.dp}">
            </div>
            `
});
document.querySelector(".storiyan").innerHTML = container ;

var growth = 0;

storiya.addEventListener('click' ,(dets)=>{
    var  sto = arr[dets.target.id].storya;
      full.style.display = "initial";
      full.style.backgroundImage = `url(${sto})`;
      h1.innerHTML = arr[dets.target.id].name
      dpimg.setAttribute("src" , arr[dets.target.id].dp)

      arr[dets.target.id].dp
      setTimeout(() => {
        full.style.display = "none";
      }, 2000);

      setInterval(() => {
        growth++;
        time.setAttribute = growth;
      }, 1000);

})
