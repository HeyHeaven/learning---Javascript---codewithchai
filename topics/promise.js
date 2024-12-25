/** 
Promise is an object representing the eventual completion or failure
of an asynchronous operation. It's a way to handle asynchronous operations
more cleanly  and avoid the "callback hell" that can occur with nested callbacks.
**/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey after 2 sec.");
        
    }, 2000)
})