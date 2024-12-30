/** 
Promise is an object representing the eventual completion or failure
of an asynchronous operation. It's a way to handle asynchronous operations
more cleanly  and avoid the "callback hell" that can occur with nested callbacks.
**/

const promise1 = new Promise((resolve, reject) => { // we created and assigned Promise into variable 
    setTimeout(() => {
        // console.log("Promise With Variable assignment");
        resolve()
    }, 1000)
})

promise1.then(() => {
    // console.log("resolved Promise 1");
}
)

new Promise((resolve, reject) => {  // defined and exactuted Promise without assignment
    setTimeout(() => {
        // console.log("Promise Without Variable assignment");
        resolve()
    }, 1000)
}).then(()=> {
    // console.log('resolved Promise 2');
    
})


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (error != true) {
            resolve('Promise2 executed') // we can pass input through resolve
        } else {
            reject('ERROR :  incountered')
        }
    }, 2000)
})

async function asyncCall() {
    try {
        console.log('executing Promise 2');
        const result = await promise2
        console.log(result);
    } catch (error) {
        console.log(error);
    }
        
        
};
asyncCall() // we create and than run the async function that handles the promise response and reject.

promise2
    .then((input) => {
        console.log(input);
    })
    .catch((input) => {
        console.log(input);
    })



