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
    
// concatenating string and number 

const name = "Bharath";
const score = 100;
console.log(name + score); // implicitly number is converted to string 

// string methods 
// strings  

const lesson = "Always try to learn from someone who is better at the business";
console.log(lesson.length);
console.log(lesson[0]);
console.log(lesson.includes("try"));
console.log(lesson.includes("Good"));
console.log(lesson.includes("ty"));
console.log(lesson.indexOf("try"));
console.log(lesson.indexOf("r"));
console.log(lesson.slice(2,4));
console.log(lesson.toUpperCase());
console.log(lesson.toLowerCase());
console.log(lesson.replace("better" , "good"));


