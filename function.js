// All about Function

// 1. normal printing function
const greeting = function(){
    console.log("Hello!");
}
// 2. normal returning function
const add = function (n1, n2) {
    return n1+n2
}
// 3. function with default argument
const checkLogIn = function (name = 'User'){ // default name = 'User'
    console.log(`${name} is loggedIN`);
}