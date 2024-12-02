// About Date library

let currentDate = new Date()
console.log(currentDate); // simply gives the date and time in a complex format

console.log(currentDate.toDateString()); // Sun Dec 01 2024
console.log(currentDate.toLocaleString()); // 1/12/2024, 10:26:02 am -- has both Date and Time
    console.log(currentDate.toLocaleDateString()); // 1/12/2024 -- most preferable to India
    console.log(currentDate.toLocaleTimeString()); // 10:28:16 am -- most preferable to India
    
let currentTime = Date.now() // also gives time from starting to current!
console.log(currentTime); // gives in miliseconds
console.log(Math.round(currentTime/1000));


let createDate = new Date(2024, 11, 1, 11)
let createDate1 = new Date("1-12-2024")
console.log(createDate.toLocaleString());

// we can also customize the way .toLocaleString prints date

currentDate.toLocaleString('default', {
    weekday: "long"
})
console.log(currentDate.toDateString());





