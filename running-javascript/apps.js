// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5");
// } else {
//   console.log("YOUR NUMBER IS GREATER THAN (OR EQUALS) 0.5");
// }
// console.log(random);
// const dayOfWeek = prompt("ENTER A DAY");
// if (dayOfWeek === "Monday") {
//   console.log("I HATE MONDAYS!");
// } else if (dayOfWeek === "Saturday") {
//   console.log("I LOVE SATURDAYS");
// } else if (dayOfWeek === "Friday") {
//   console.log("FRIDAYS ARE DECENT");
// } else {
//   console.log("MEH");
// }

// 0-5 FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

// const age = -11;
// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("free");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age >= 10 && age < 65) {
//   console.log("$20");
// } else {
//   console.log("INVALID AGE!");
// }

// if (age < 5) {
//   console.log("You are a baby. You get in for free!!");
// } else if (age < 10) {
//   console.log("You are a child.  You pay $10");
// } else if (age < 64) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

//
//LOGICAL AND....
// const password = prompt("Enter your password");
// if(password.length >=6 && password.indexOf(' ')===-1){
//     console.log('VALID PASSWORD')
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }

// const firstName = prompt("enter your first name");
// if (!firstName) {
//   console.log("TRY AGAIN!");
// }

// const age = 8;
//  if (!(age >= 0 && age < 5 || age >= 65)) {
//   console.log("YOU ARE NOT A BABY OR A SENIOR!");
// }
// const day = 7;
// switch (day) {
//   case 1:
//     console.log("MONDAY");
//     break;
//   case 2:
//     console.log("TUESDAY");
//     break;
//   case 3:
//     console.log("WEDNSDAY");
//     break;
//   case 4:
//     console.log("THURSDAY");
//     break;
//   case 5:
//     console.log("FRIDAY");
//     break;
//   case 6:
//   case 7:
//     console.log("WEEKEND");
//     break;
//     defult: {
//       console.log("I DONT KNOW THAT");
//     }
// }
// if (day === 1){
//
// }
//  else if (day === 2){
//     console.log("TUESDAY")
// }
// else if (day === 3){
//     console.log("WEDNSDAY")
// }
// else if (day === 4){
//     console.log("THURSDAY")
// }
// else if (day === 5){
//     console.log("FRIDAY")
// }
// else{
//     console.log("I DONT KNOW THAT")
// }

//FOR LOOPS

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`i is :${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`    j is: ${j}`);
//   }
// }
// WHILE LOOP
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }
// //example
// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code....");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code....");
// }
// console.log("CONGRATS YOU GOT THE SECRETE!!!!");
// let input = prompt("Hey,say something");
// while (true) {
//   input = prompt(input);
//   if (input === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

// BUILDING A GUESSING GAME

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   parseInt(prompt("Enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess:"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//      if(guess==='q') break;
//       attempts++
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else {
//     guess = prompt("Too low! Enter a new guess:");
//   }
// }
// if(guess==='q'){
//   console.log("OK, YOU QUIT!")
// } else {
//   console.log("CONGRATS YOU WIN!10")
//   console.log(`YOU GOT IT! It took you ${attempts} guesses`);
// }

//FOR....OF LOOP

const subreddit = ["cringe", "books", "chicken", "funny"];
for (let i = 0; i < subreddit.length; i++) {
  console.log(`Visit reddit.com/r/${subreddit[i]}`);
}
for (let sub of subreddit) {
  console.log(`Visit reddit.com/r/${sub}`);
}
const numbers = [1,2,3,4,5,6,7,8,9];
Object