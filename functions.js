// normal functions 

function hello(name = "") {
    console.log(`Welcome ${name}`);
}

hello("bharath");

// anonymous functions , functions without a name 

(
    function () {
        alert("Hello , I am anonymous");
    }
);

// arrow functions 

const numbers = [1,2,3,4,5];
console.log(numbers.map( num => console.log(num) ));
