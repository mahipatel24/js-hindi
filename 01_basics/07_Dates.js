//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,5,24) // syntax 1
// let myCreatedDate = new Date(2023,5,24,5 ,3 ) // syntax 2
// let myCreatedDate = new Date("2023-01-14") // syntax 3
let myCreatedDate = new Date("06-24-2023") // syntax 4
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));
