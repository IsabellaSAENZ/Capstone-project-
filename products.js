let array = [
  {
    name: "shirt",
    image: "Nikeshirt.png",
    price: 35
  },
  {
    name: "shoes",
    image: "Nike shoes.png",
    price: 67
  },
  {
    name: "shorts",
    image: "Nike shorts.png",
    price: "80",
  },
  {
    name: "socks",
    image: "Nike socks.png",
    price: "22",
  },
  {
   name: "Men shoes",
   image: "Nike men.png",
    price: "200",
  },
];

let products = document.getElementById("products");

array.map( (item) =>{

  let string = ` <div class="card my-3" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" >
  <div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text">Price: ${item.price}</p>
  </div>
</div> `;
  products.innerHTML += string;
} );