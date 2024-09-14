const name = "maahi"
const cgpa = 7.91

//console.log(name + cgpa + " Value"); 

// console.log(`hello my name is ${name} and my cgpa is ${cgpa}`);

const gameName = new String ('maahi-pa-tel')
// console.log(gameName);

// console.log(typeof gameName);


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // which charater in which position
console.log(gameName.indexOf('h')); // which poistion in which character 

// divide into substring
const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="   Maahi   "
console.log(newStringOne);
console.log(newStringOne.trim()); // only apply whitespace 

const url = "https://maahi.com/maahi%20patel"
console.log(url.replace('%20','-')); // use the replace the elements

console.log(url.includes('chin tapak dum dum')); // find the word is available or not
  
console.log(gameName.split('-')); // split the line on '-' based or white space also



