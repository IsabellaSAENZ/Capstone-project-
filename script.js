const buttonOne = getElementById("btn1");
const buttonTwo = getElementById("btn2");

buttonOne.addEventListner("click", () =>{
  console.log("JUST DO IT!");
  alert("JUST DO IT!");
});

function contact(){
  document.getElementById("contact").innerHTML = "318-687-4433";
}