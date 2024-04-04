const name = "aadish"
const id = "19"

//Old way
console.log(name + " with id: " + id)

//New way
console.log(`Hello my name is ${name} and id is ${id}`)

//Another new way using object with 'new' keyword
const newname = new String("Aadish Jain")

console.log(newname)
// console.log(newname[0])
// console.log(newname[100])
// console.log(newname.__proto__)    
// console.log(newname.length)
// console.log(newname.toLowerCase())
// console.log(newname.toUpperCase())
// console.log(newname.charAt(3))   //passing index
// console.log(newname.indexOf("a"))
// console.log(newname.substring(1, 5))   // 1 to 4 index
// console.log(newname.substring(5))      // starts from 5th index

console.log(newname.slice(1, -5))
console.log(newname.slice(1, 5))
console.log(newname.slice(-1, -10))

const newString = '             What is your name?                '
console.log(newString)
console.log(newString.trim())

const url = "www.aadish%20no%20id.com"

console.log(url)
console.log(url.replace('%20', '-'))
console.log(url.replaceAll('%20', '-'))
console.log(url.includes('jain'))
console.log(url.includes('%20'))
console.log(url.includes('-'))
console.log(url.split('%20'))



