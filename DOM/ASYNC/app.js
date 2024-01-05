// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// const delayColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };
// delayColorChange("red", 1000, () => {
//   delayColorChange("orange", 1000, () => {
//     delayColorChange("yellow", 1000, () => {
//       delayColorChange("green", 1000, () => {
//         delayColorChange("blue", 1000, () => {});
//       });
//     });
//   });
// });
//fakeDemo
// searchMoviesAPI(
//   "amadeus",
//   () => {
//     if the code runs
//   },
//   () => {
//     if the code doesnt runs
//   },
//   () => {
//     if the API is down and request fails
//   }
// );

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  return "ALL DONE!";
}
// rainbow.then(() => console.log("END OF RAINBOW!"));

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}
printRainbow();
