
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toUTCString())

// console.log(typeof myDate) // Date() is object type

let newDate = new Date(2023, 0, 1, 5, 3)     //months starts with zero => 2023 year
                                                                        //   0 jan 1 date 5 hrs 3 mins

// console.log(newDate.toString())


let newformatDate = new Date("2024-04-12")      //yyyy-mm-dd    mm starts with 01 for January
// console.log(newformatDate.toDateString())

let newformatDate2 = new Date("04-05-2024")    //mm-dd-yyyy  
// console.log(newformatDate2.toString())
let newformatDate3 = new Date("04-05-2024-01:03")    //mm-dd-yyyy-hrs:mins     
// console.log(newformatDate3.toString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)      //shows in milliseconds from 1st jan 1970 to present date

let myCreatedDate = new Date("2024-04-05")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getTime())  //date shows in milliseconds from 1st jan 1970

// console.log(Math.floor(Date.now()/1000))     // current date shown in seconds


let nDate = new Date("2024-01-01")

console.log(nDate)
console.log(nDate.getDate())
console.log(nDate.getDay())
console.log(nDate.getMonth() + 1)  //+1 is for Jan to show end user (in JS 0 means Jan)

// we can use properties in functions to how we need to show the data as below
console.log(nDate.toLocaleString('default', {
    weekday : "long",
    hour : "numeric",
    day : "2-digit",
    month : "long",
    year : "numeric"
}))