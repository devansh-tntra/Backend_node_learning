// Quick Memory Trick: NNSSBBU (Number, Null, String, Symbol, Boolean, BigInt, Undefined)

let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literal
console.log(typeof name); // "string"


let age = 25;
let price = 99.99;
let invalid = "abc" / 2; // NaN (Not-a-Number)
console.log(typeof price); // "number"


let big = 9007199254740991n;
console.log(typeof big); // "bigint"


let isLoggedIn = true;
let hasDiscount = false;
console.log(typeof isLoggedIn); // "boolean"

let address;
console.log(address);        // undefined
console.log(typeof address); // "undefined"



let selectedUser = null;
console.log(selectedUser);        // null
console.log(typeof selectedUser); // "object" (Famous historical JavaScript bug!)


let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (always unique!)


const user = {
    name: "Rahul",
    age: 24,
    isActive: true
};
console.log(typeof user); // "object"

const fruits = ["Apple", "Banana", "Mango"];
console.log(typeof fruits);           // "object"
console.log(Array.isArray(fruits));  // true (Best way to check for an Array)



function add(a, b) {
    return a + b;
}
console.log(typeof add); // "function"


// 1. Primitive: Independent copy
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (Original didn't change)

// 2. Reference: Shared address
let obj1 = { name: "Aman" };
let obj2 = obj1;
obj2.name = "Pooja";
console.log(obj1.name); // "Pooja" (Original changed!)