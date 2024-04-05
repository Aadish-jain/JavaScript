let score = 100
// console.log(score)

const balance = new Number (124.458378)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.length)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))         // return number in decimal as string value | usually used in E-commerce website to show prices

const otherNumber = 1223 //123.85 //1289.56

// console.log(otherNumber.toPrecision(3))  // gives precise values

const hundred = 10000000
// console.log(hundred.toLocaleString())            //commas as per US standards
// console.log(hundred.toLocaleString('en-IN'))     //commas as per IN standards

// console.log(Math)
// console.log(Math.PI)          //PI is a property
// console.log(Math.abs(-12))    //abs() is function
// console.log(Math.asin(1))     // is function
// console.log(Math.round(11.12))
// console.log(Math.round(11.8))
// console.log(Math.ceil(11.8))
// console.log(Math.floor(11.5))

// console.log(Math.min(2,1,3,4,5))
// console.log(Math.max(2,1,3,4,5))

console.log(Math.random())     // value between 0 and 1
console.log((Math.random() * 10) + 1 )   // random value greater than 1
                                // + 1 is used to avoid 0.001 value => 0.001 * 10 => 0.01 + 1 => 1.01

console.log((Math.floor(Math.random() * 10) + 1 ))   // give lower value without decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // gives random value between 10 - 20



