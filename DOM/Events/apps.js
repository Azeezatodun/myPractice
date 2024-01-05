const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me");
  console.log("I hope it worked");
};
function scream() {
  console.log("AHHHH!!!!");
  console.log("leave me alone");
}
btn.onmouseenter = scream;
document.querySelector("h1").onclick = function () {
  alert("you clicked me");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("HEY YOU CLICKED ME");
});
