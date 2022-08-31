// new Promise((resolve,reject)=>{
// the promise will continue to pend until either reject or resolved is called in
// the can both be called as a function eg resolved() or reject ()
// })

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("Request Error!");
    }, 1000);
  });
};
fakeRequest("/dog/1")
  .then((data) => {
    console.log("DONE WITH REQUEST");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("OH NO!,err");
  });
