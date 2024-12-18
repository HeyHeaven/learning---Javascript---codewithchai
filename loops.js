// all about for, while, do.. while loops

// 1.a. for loop
for (let i = 0; i <= 15; i++) { // simple syntax as usual. 
    const element = i;   // Note: scope for anything declared in this scope not iterable from outside scope
    //console.log(element);
}

// 1.b. nested for loop
for (let i = 1; i <= 5; i++) {// yes. we can use same variable for different for loops.. cuz of scooping
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// 1.c "for of" loop
const arr = [2, 6, 3, 2, 623, 54]
const str = 'kundan'
const map1 = new Map();
map1.set('IN','Indian')
map1.set('DU','Dubai')
map1.set('US','United State')
for (const [i, j] of map1) { // here object is anything that is iterable. eg. arr, string, and map etc.
    //console.log(j);
}
// 1.d. "for in" loop - is for non iterable elements .. like objects

const obj1 = {
    name: "Kundan",
    age: 21,
    gender: "male"
}
for (const i in obj1) {
        // const element = obj1[key];
        console.log(i);
}

// while loop
let i=0; // declaring the iterator
while (i<=5) { // some condition to stop loop
    // console.log(i);
    i++;       // something to inscrement loop
}

// do .. while loop
let j=19
do {
    // console.log(j);
    j++;
} while (j < 18);  // here, even though condition was false, it still runs the loop once.

