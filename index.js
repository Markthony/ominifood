// variables
// var car = "Toyota";
// var age = 19;
// let names = "Anthony";
// console.log(names);
// names = Anthony;
// var homeTown = "Badagry";
// homeTown = "Lagos";

// var a = 6
// var b = 4
// var c = b + 1

// var, let, const

// Data types

// Strings;
var car = "Toyota";

// Numbers;
// var age = 15;
// var pi = 3.12;

// Arrays;
const scoreList = [1, 2, 3, 4, 5, 6, 7];
const cars = ["Toyota", "Lexus", "Mercedes"];
const randoms = [1, "heyy", 4, "apples", "12 Eggs"];

// cars[2];

// Objects;

var person = {
  name: "Anthony",
  age: 19,
};

var home = {
  home: "Badagry",
};

// Dot Notation
// console.log(person.age);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.assign(person, home));

// Boolean

// Date
// const date = new Date();

// console.log(date.toLocaleTimeString());

// functions

function calcNextAge(currentAge) {
  // set of instructions

  if (!currentAge) {
    console.log("Reached 1");
    // return console.log("Please input your current age");
    throw new Error("Please input your current age");
  }

  return currentAge + 1;
}

console.log("This is your next", calcNextAge(19));

// conditionals

// function evenNumbers(number) {
//   if (number === 1) {
//     console.log("Odd");
//   } else if (number === 2) {
//     console.log("Even");
//   } else if (number === 3) {
//     console.log("Odd");
//   } else {
//     console.log("Omo i don taya");
//   }
// }

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// console.log(evenNumbers(20));

// function evenNumbers(number) {
//   if (number % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// Ternary Operator
function isEvenNumbers(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEvenNumbers(2003));

// ES5, ES6 ES8 ES Next
