const buy = getElementById("btn1");

let products =["Nike Shoes","Nike Shorts","Nike socks"];
let price =["$160","$55","$28"];

buy.addEventListner("click",(e)) = > {
  console.log("e: ",e);
for (let i = 0; i < products.length; i++){
  let currentLi = document.createElement("li");
  currentLi.textContent = products[i];
  console.log(currentLi);
  price.appendChild(currentLi);
  }
});