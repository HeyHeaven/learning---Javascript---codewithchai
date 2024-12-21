// About Array

// ways of creating array
// let arr1 = new Array(2, 4, 3, 6, 1, 28,82,52,24)
// let arr2 = [2, 4, 3, 6, 1]
// let arr3 = [2, 4, 3, "arr1", 8]

// methods for Array operations

// arr1.push(10) // adds at end
// arr1.pop() // deletes at end

// arr2.unshift(5) // adds at starting -- not efficient
// arr2.shift() // deletes from starting

// arr2.join() // converts the array into string


/** Important **/

// console.log(arr1);
// arr1.slice(0, 4) // gives items from 2 to 3, original Array is Unchanged
// arr1.splice(0, 4) // gives items form 2 to 3, removes these item from original Array
// console.log(arr1);

// ways of combining two or more arrays :

//1.
let arr1 = new Array(2, 4, 3, 6, 1)
let arr2 = [92, 42, 23]
let arr3 = [9, 4]
// let arr3 = arr1.concat(arr2) // gives output of new combined array // works only when there is only two arrays to combine
// output : [2,  4,  3,  6, 1, 92, 42, 23]
//2.
let arr4 = [...arr1, ...arr2, ...arr3] // (...) is called Spread method // helps to concatinate two or more arrays

let arr5 = [10, 3, [29, 53, 2, 7,["kundan", [23, 5], "thakur"], 29, 4], 2, 52]

//console.log(arr5.flat(Infinity)); // combines all the 2d, 3d arrays into one array
// Output :
// [10,3,29,53,7,'kundan',23,5,'thakur',29,4,2,52]


// Static Methods of Array
Array.isArray(arr5); //tells if input data is Array or not?
//console.log(Array.of("kundan", "thakur", arr1).flat(Infinity)) // converts the set of item into a array
/* Output : [
    10,       3,  29,
    53,       2,  7,
    'kundan', 23, 5,
    'thakur', 29, 4,
    2,        52
  ] */
//console.log(Array.from("kundan")) // converts the single input item into a array


// some very useful methods for Arrays - forEach, map, filter

// 1. forEach - helps you to access and perform operations on it and print it, but doesn't return anything.

let return1 = arr1.forEach((num) => {
  return num + 1;  // doesn't return no shit.
});
//console.log(return1); // output: undefined

// 2. map - same as forEach but does return value.

return1 = arr1.map((num) => {
  return num+1
})
//console.log(return1); // output: [3, 5, 4, 7, 2]

// 3. filter - to just filter the out from a array, it does return the value to.

return1 = arr1.filter((nums) => {
  return nums >= 3
})
//console.log(return1);

// 4. reduce - just use to perform arthematic operations the elements of array and return final answer.. most to sum-up the cart value, on e-commerce site.

const initial = 4;
return1 = arr1.reduce((preTotal, curVal) => (preTotal - curVal), initial)
console.log(return1);














