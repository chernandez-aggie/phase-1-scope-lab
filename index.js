// Write your solution in this file!
//customreName
var customerName = "bob";

//upperCaseCustomerName()
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
   
    return customerName;
}

//setBestCustomer()
function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

//changeLeastFavoriteCustomer()

const leastFavoriteCustomer = 'tod';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'TOD';
    return leastFavoriteCustomer;
}
