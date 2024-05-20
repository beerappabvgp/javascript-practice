let temperature = 100;
if (temperature > 100) {
    console.log("Too hot!!");
} else {
    console.log("Good weather");
}

// var

val = 10;
console.log(val);
var val;  

exampleVar();

function exampleVar() {
    console.log("Example var");
}

// declare same variable multiple times with var it does not through error 

var name = "bharath";
var name = "Anil";
console.log(name);


// The same cant be done with let 

// let username = "Bharath";
// let username = "Anil";
// console.log(username);


// declaring strings , numbers , booleans

let friendName = "Anil";
let luckyNumber = 100;
let isBestFriend = true;


// declaring arrays

let allMyFriends = ["bharath" , "lakshmi" , "gowtham" , "abhilash"];
console.log(typeof(allMyFriends));
console.log(allMyFriends);

// Accessing the arrays by their location 

console.log(allMyFriends[0]);
console.log(allMyFriends[1]);

// declaring objects    

let person = {
    name : "Bharath",
    age : "22",
    favouriteColor : "Green"
}

console.log(person.name);

// js is dynamically typed language no need to specify variable types that our container stores

// constants in js

const myFatherName = "Gurumurthy";
// cannot modify the contents of myFatherName as it is a constant
const address = {
    street: "palamaner",
    pin: "517408",
    state: "AP"
}
// If we declare some variable as a constant it does not mean that we cant modify the contents inside the variable , it means that we cant change the address location of that variable to some other location.

// updating address object

address.district = "Chittoor";

console.log(address);
console.log(myFatherName);

// Numbers in javascript 

const jerseyNumber = 99;
const phoneNumber = 7993873246;
console.log(typeof(jerseyNumber));
console.log(typeof(phoneNumber));
console.log(Number);


// methods used on numbers 

const salary = 6666666.6666666;
const salaryRoundedToTwo = salary.toFixed(2);
console.log(salaryRoundedToTwo);


// type conversion from string to number
let score = "100";
let totalScore = 100 + Number(score);
console.log(totalScore);

// Increment and decrement operator 
// increment-- first returns the value stored in container and then increments the value by 1

let increment = 1;
console.log(increment++);
console.log(increment);
console.log(increment--);
console.log(increment);


// shortcuts for incrementing and decrementing

increment += 100;
console.log(increment);
increment -= 2;
console.log(increment);

// difference between == and ===
// == checks whether values are same 
// === checks both values and types of values stored in the container.


// Strings

const quote = "A mad passion for programming";
console.log(quote);

const useSingleQuote = "Use single quotes to declare and initialize strings";
console.log(useSingleQuote);


// template literals 
const useBackTicks = `They give you super powers`;
console.log(useBackTicks);

// embed js in template literals 

const greeting = "Welcome to my space";
console.log(`This is my way of greeting ${greeting}`);


// concatenation using + operator

const firstPart = "Good";
const secondPart = "Average";
const film = firstPart + " + " + secondPart;
console.log(film);
    

