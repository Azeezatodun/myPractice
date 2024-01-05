// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }
// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}.`);
// }

// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }
// exercise ARGUEMENT FUNCTIONS
// function rant(message) {
//   console.log(`${message}`.toUpperCase());
//   console.log(`${message}`.toUpperCase());
//   console.log(`${message}`.toUpperCase());
//}
function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
// return keyword
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}
function lastElement(arr) {
    if (!arr.length) {
        return null;
    }
    return arr[arr.length - 1];
}
function lastElement(array){
    if (array.length ===0){
        return null;
        
    }else{
        return array[array.length-1];
    }
}
function capitalize(string){
    let newString = (string.slice(0,1).toUpperCase()) +(string.slice(1));
    return newString;
}
function sumArray(arr){
    let total = 0;
     for (let i=0; i < arr.length;i++){
         total +=arr[i];
     } return total;
 }






