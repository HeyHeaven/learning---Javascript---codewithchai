let greeting = new String('                 good morning!               ')
let hey = new String('hey, ')
let name = new String('Kundan')

console.log(`${hey}${name} ${greeting}`);
console.log(greeting.trim().length)

console.log(greeting.trim().substring(0, 5));  // substring don't take negative numbers. // also you can use one string method over another string too.
console.log(greeting.trim().slice(-13,5)); // slice takes negative numbers too.



