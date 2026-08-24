const accountId=144533
let accountEmail="hiteshri@gmail.com"
var accountPassword="12345"
/*
prefer not to use var
because of issues in  block scope and functional scope
*/
accountCity="jaipur"
let accountState

// accountId=4//not allowed with const//const cannot be change
console.log(accountId);
accountEmail="hamia@gmail.com"
accountPassword="543211"
accountCity="agra"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])