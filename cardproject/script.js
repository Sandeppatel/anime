var main =   document.querySelector('.main')
var cards  = document.querySelector('.cards')

var select = document.querySelector('select')
var option = document.querySelector('option')

var arr = ["priority" , "reating" ];

var count = "";
arr.forEach(function(e){
   count += `<option value="">${e}</option>`
})

select.innerHTML = count ;



 const products = [
    {
      name: "Smartphone",
      images: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 699.99,
      description: "A high-end smartphone with a powerful processor and sleek design.",
      model: "XYZ123",
      text : "price:",
    },
    {
      name: "Laptop",
      images: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1199.99,
      description: "A lightweight laptop with a long battery life and high-resolution display.",
      model: "ABC789",
      text : "price:",

    },
    {
      name: "Smartwatch",
      images: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 199.99,
      description: "A stylish smartwatch with fitness tracking and notification features.",
      model: "LMN456",
      text : "price:",

    }
  ];


  var container = "";
products.forEach(function(val){
   container += `<div class="card  w-56 bg-zinc-600 p-4 rounded-xl">
                <img class="h-40 w-60 bg-red-400 object-cover rounded-xl " src="${val.images}" alt="">
                <h3 class="text-xl font-semibold">${val.name}</h3>
                <p class="text-lg font-normal ">${val.description}</p>
                <h4 class="text-lg font-semibold">${val.model}</h4>
                <div class="praice  flex items-center justify-between">
                    <h4 class="text-lg font-semibold">${val.text}</h4>
                    <h4 class="text-lg font-semibold">${val.price}</h4>
                     
                </div>
            </div>`
})
cards.innerHTML =  container ; 