class cars{
    constructor(name, model, price, km, address,imgurl) {
        this.make = name;
        this.model = model;
        this.price = price;
        this.km = km;
        this.address = address;
        this.imgurl = imgurl;
    }
  
   
}

var carcontainer = document.getElementById("card-container");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
event.preventDefault();
if(document.getElementById("name").value == "" || document.getElementById("model").value == "" || document.getElementById("price").value == "" || document.getElementById("km").value == "" || document.getElementById("address").value == "" || document.getElementById("url").value == "") {
    alert("Please fill all the fields!");
    return;
}

var name = document.getElementById("name").value;
var model = document.getElementById("model").value; 
var price = document.getElementById("price").value;
var km = document.getElementById("km").value;
var address = document.getElementById("address").value;
var imgurl = document.getElementById("url").value;

var car = new cars(name, model, price, km, address,imgurl);
var carDiv = document.createElement("div");
carDiv.className = "card";
carDiv.innerHTML = `
<div class="img"><img src="${car.imgurl}"></div>
<h1 class="name">${car.make.toUpperCase()}</h1>
<li class="price">Rs: ${car.price.toUpperCase()}</li>
<li class="model">Model: ${car.model.toUpperCase()}</li>
<li class="km"><i class="fa-solid fa-gauge-high"></i> : <span class="km">${car.km.toUpperCase()}</span></li>
<li class="address"><i class="fa-solid fa-location-dot"></i> : <span class="addr">${car.address.toUpperCase()}</span></li>
<p class="para">A perfect choice for your journeys! This vehicle is well-maintained, gives great mileage, and has a stylish look.</p>
<button class="buy" onclick="buy()">Buy Now</button><button class="edit" onclick="edit(this)">Edit</button> <button class="delete" onclick="this.parentElement.remove()">Delete</button>
`
carcontainer.appendChild(carDiv);

document.getElementById("name").value = "";
document.getElementById("model").value = "";
document.getElementById("price").value = "";
document.getElementById("km").value = "";
document.getElementById("address").value = "";
document.getElementById("url").value = "";


})
function buy() {
    alert("No Money");
  }

  function edit(e) {
    var parent = e.parentElement;
  
    document.getElementById("name").value = parent.querySelector(".name").innerHTML;
    document.getElementById("model").value = parent.querySelector(".model").innerHTML.replace("Model: ", ""); // because you added "Model: " text
    document.getElementById("price").value = parent.querySelector(".price").innerHTML.replace("Rs: ", ""); // remove Rs:
    document.getElementById("km").value = parent.querySelector(".km span.km").innerHTML; // go inside span
    document.getElementById("address").value = parent.querySelector(".address span.addr").innerHTML; // inside span.addr
    document.getElementById("url").value = parent.querySelector("img").src;
  
    parent.remove();
  }
  
  
