// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", function () {
//   const newColor = makeRandColor();
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// });

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };

//THE EVENT OBJECT
document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});
const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
  }
});
// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });
