const accountId = 144553
let accountEmail ="rokayadhurvey@gmail.com"
var accountPassword = "12345"
 let accountCity = "Jaipur"
 let accountState;

// accountId = 2 // cannot be changed

console.log(accountId);

accountEmail = "rokayadhurvey102@gmail.com"
accountPassword = "100055"
accountCity = "jumla"

console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/