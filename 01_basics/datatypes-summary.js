// # Primitive

// 7 types : String, NUmber, Boolean, Null, Undefined,  Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id=== anotherId);

const bigNumber = 42354543543564326426n



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagra", "doga"];
let myObj = {
    name: "nabin",
    age: 22,
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof id)



// ****************************************

// Stack (Primitve), Heap(Non-Primitive)

let myYoutubeName = "rokayadhurvey@gmail.com"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@api"
};

let userTwo = userOne

userTwo.email = "nabin@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)