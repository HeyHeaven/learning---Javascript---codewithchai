// Primitive data - Stack memory
// Non-Primitive data - Heap memory

// stack memory - call by value
// heap memory - call by reference

// call by value 
let one = "Kundan"
let two = one
two = "Thakur"
console.log(one);
// Output - "Kundan" -- it doesn't change actual variable's value

// call by reference

let a = {
    email: "email@xyz.com",
    upi: "abc@upi"
}
let b = a
b.upi = "xyz@upi"
console.log(a.upi);
// Output - xyz@upi -- it does change actual variable's value using given reference




