// creating arrays
 
const products = ["milk" , "apple" , "banana" , "phone"];
console.log(products);
console.log(products.length);
console.log(products.indexOf("apple"));
console.log(products.push("chess board"));
// add elements to the start of the array 

products.unshift("Gadgets");
console.log(products);
console.log(products.pop());
console.log(products.shift());

for (const p of products) {
    console.log(p);
}

const numbers = [1,2,3,4,5];
console.log(numbers.map(function(num){
    return num *= 2;
}));    
console.log(numbers.map((num) => num % 2 == 0));

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
console.log(data.split(","));
console.log(numbers.join(" "));