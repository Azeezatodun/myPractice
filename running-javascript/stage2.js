console.log("Hello!!!....");
//setTimeOut
// setTimeout(() => {
//   console.log("...are you still there?");
// }, 3000);

// console.log("GOODBYE!!!");

//setInterval not as commonly used
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// filter method

// const goodMovies = movies.filter(movie =>{
//     return movie.score >80;
// }); OR
// const goodMovies = movies.filter(m=> m.score >80);
// cont goodTitles = goodMovies.map(m => m.titles)
// //movies.filter(m=>m.score >80).map(m=>m.title)
// const badMovies = movies.filter(m=> m.score <70);
//const bad = movies.filter(({score}) => score<70) eg of default param
// const recentMovies = movies.filter(m=> m.year >2000);

const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let total = 0;
//  for (let price of prices){
//     total +=price
//  }
//  console.log(total)
const total = prices.reduce((total, price) => {
  return total + price;
});
//const total = prices.reduce((total, price) => total + price);
const minPrice = prices.reduce((min, price) => {
  if (price > min) {
    return price;
  }
  return min;
});

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 20); //initial value for reduce to start is 20

//destructing an array
const scores = [456, 345, 234, 123, 012];
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// destructuring form object(more commonly used)
const first = username.firstName;
const last = username.lastName;
// the order does not matter here unlike in an array cos name will be used
const { firstNme, lastNmae, email } = user;
//incase you want to remain
const { firstName: maidenName } = user;
//a default can be added
const { city, state, died = "N/A" } = user;
//destructing param used in function and parameter
function fullName(user) {
  return `${user.firstNme} ${user.lastName}`;
}
//defult param
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstNme} ${lastName}`;
}
//another method
function fullName({ firstName, lastName }) {
  return `${firstNme} ${lastName}`;
}
