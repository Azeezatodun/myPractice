let input = prompt("what would you like to do?");
const todo = ["Buy chicken", "Collect eggs"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("********");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("********");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todo.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("what would you like to do");
}
console.log("OK, QUIT THE APP!");

//RETURNING FUCTIONS
function makeBetweenFunc(min, max) {
  return function (num) {
    return num <= min && num >= max;
  };
}
//so we can use the returning function like:
const childAge = makeBetweenFunc(0, 10);
const isAdult = makeBetweenFunc(11, 30);
const isOld = makeBetweenFunc(31, 100);

//INTRODUCTION TO METHODS
const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num;
  },
  // re-written as square(num){
  //   return num *num;
  // }
  cube: function (num) {
    return num ** 3;
  },
  // re-written as cube(num){
  //   return num**3
  // }
};
// so we can do
myMath.square(2);

const cat = {
  namae: "muss muu",
  color: "grey",
  meow() {
    console.log("meow meow");
    //console.log(`${this.name} says meow meow`)
  },
};
//try/catch
// try{hello.toUpperCasw()};
// catch {console.log("ERROR")}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// MAP METHOD
// const doubles = numbers.map(function(num){
//   return num*2;
// })

// forEach Method
// function print(element) {
//   console.log(element);
// }
// this format is more commom.
// numbers.forEach(function (el) {
//   if (el % 2 === 0) console.log(el);
// });

// another way to print
// for(let el of numbers){
//   console.log(el);
// }
