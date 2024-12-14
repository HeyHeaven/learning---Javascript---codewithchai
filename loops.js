// all about for, while, do.. while loops

// 1.a. for loop
for (let i = 0; i <= 15; i++) { // simple syntax as usual. 
    const element = i;   // Note: scope for anything declared in this scope not iterable from outside scope
    //console.log(element);
}

// 1.b. nested for loop
for (let i = 1; i <= 5; i++) {// yes. we can use same variable for different for loops.. cuz of scooping
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// while loop
let i=0;
while (i<=5) {
    console.log(i);
    
}

