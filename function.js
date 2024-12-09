// All about Function

// 1. normal printing function
const greeting = function(){
    console.log("Hello!");
}
// 2. normal returning function
const add = function (n1, n2) {
    return n1+n2 // Note : return statement should always be at the end of the function
}
// 3. function with default argument value
const checkLogIn = function (name = 'User'){ // default name = 'User'
    console.log(`${name} is loggedIN`);
}

// 4. taking Object as argument

const obj1={
    name: 'kundan',
    age: 20
}
const objectTaker= function(object){    // takes objects as a input
    console.log(`${object.name} is ${object.age} years old.`)
    return
}
//objectTaker(obj1)

const arr1 = new Array(1, 6, 2, 62, 5)

const arrayTaker = function (array) {
    console.log(array[3]);
    return
}
//arrayTaker(arr1)

/************** Intresting point **********************/

console.log(addOne(19)); // running before declaring the function.

function addOne(num) { // function declared but not assigned. Thus, we can use it before declaration too!
    return num+=1
}

const add1 = function (n1, n2) { // but not here, cuz function is assigned to "add1", thus we can use after declaration only!
    return n1+n2 
}



// Arrow Function

