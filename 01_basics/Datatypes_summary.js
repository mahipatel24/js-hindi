//  # Primitive Datatypes 
//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp  = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);

// const bigNumber = 23547889652682265841649n

// Reference (Non Primitive Datatypes)
// Arrays, Objects, Functions,

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "mahi",
    age: 21,
}

const myFunction = function(){
  // console.log("hello world");   
}

// console.log(typeof heros);


//********************************************************************************** */
// memory types
// Stack (Primitive) , Heap (Non Primitive)

let myYoutubename ="maahipatel.com"

let anthorname = myYoutubename
anthorname="chaiaurcode"
console.log(myYoutubename);
console.log(anthorname);

let userOne = {
  email:"user@gamil.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mahi@google.com"

console.log(userOne.email);
console.log(userTwo.email);