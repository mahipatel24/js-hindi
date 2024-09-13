const accountId = 144553
let accountEmail = "maahi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not Allowed
accountEmail = "mp@mp.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);
/*
Prefer Not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])