// just like strings, Number is also an object. Hence, it comes with lots of methods.

let x = new Number(50.9327)
let y = -50
// both the above methods gives u ability to use methods!

// imp methods of Number() object
x.toString().length // converts the number object to string. Hence we can use string methods over it
x.toPrecision(4)  // precise it from the specified digits
// Output : 50.93
x.toFixed(1) // prints the number of digits after decimal according to the give input
// Outupt : 50.9

let b = 1000000000
console.log(b.toLocaleString('en-US'))  // helps to add readibility by adding (,)
// Output :  1,000,000,000
// by default it's in IN standards, but we can specify too!
console.log(Number.MAX_SAFE_INTEGER)  // Number stores sum value for direct use!


/********* Math Library ********/

Math.sqrt(x) // prints square root 
Math.abs(x) // converts negative integers into positive integers
console.log(Math.PI) // stores PI value for direct use

let m = 29.17
Math.round(m) // round off the number // 29.20
Math.ceil(m) // round off to upper limit // 29.20
Math.floor(m) // round off to lower limit // 29.10

// imp Math library

Math.random() // gives random value 0<=n<=1 // mostly decimal numbers
Math.floor((Math.random() * 10) + 1 ) // gives random value 0 < n<=10 // give positive numbers
Math.floor((Math.random() * (max-min+1) + 1)) // gives random between given limits min and max