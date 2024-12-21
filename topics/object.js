// about Objects

const sym1 = Symbol('sym1')

// let obj1 = new Object(){} -- this is singleton
let obj1 = {              // -- this is not singleton 
    "full name": "kundan thakur",
    age: 21,
    gender: "male",
    
    [sym1]: "key1",
    greeting: function () {
        console.log(`hey, ${this["full name"]}`);
    }
}

//const x = Object.create(obj1)

// ways of accessing Object elements

// 1. dot method
// console.log(x.greeting());
// console.log(obj1.gender);

// 2. [] method
// console.log(obj1["age"]);
// console.log(obj1["full name"]);
// console.log(obj1[sym1]);

// Nesting Object inside a Object

const obj2 = {
            obj3: {
                obj4: {
                    name:"dipesh"
        }
    }
}
//console.log(obj2.obj3.obj4.name);

// Combining Two or More Objects into One Object

// 1.
const x = {
    name: "kundan"
}
const y = {
    age: 20
}
const z = {
    BOD: new Date("12-01-2024").toLocaleDateString()
}
const a = Object.assign({}, x, y, z)
console.log(a);

// 2.

const b = {...x, ...y, ...z} // spread method
console.log(b);

// Some Object Methods

console.log(Object.keys(obj1)) // gives array of keys
// Output : [ 'full name', 'age', 'gender', 'greeting' ]

console.log(Object.values(obj1)) // gives array of values
// Output : [ 'kundan thakur', '20', 'male', 'Function : greeting!' ]

console.log(Object.entries(obj1)); // gives array of entities ("key: value" pair)
// Output :
/* [ 'full name', 'kundan thakur' ],[ 'age', 21 ],[ 'gender', 'male' ],[ 'greeting', [Function: greeting] ] */

// Object De-structuring

const obj5 = {
    "full name": "kundan thakur",
    age: 21,
    gender: "male",
    
    [sym1]: "key1",
    greeting: function () {
        console.log(`hey, ${this["full name"]}`);
    }
}

const { gender: gen} = obj5 // gender can now act as an independent variable
console.log(gen);

