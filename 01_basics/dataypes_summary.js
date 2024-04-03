// DataTypes
// Primitive => Number, string, Boolean, null, undefined, BigInt, Symbol

const score = 100
const newScore = 100.32
console.log(score);


let IsLoggedIn = false
console.log(IsLoggedIn);

let undefNumber;
console.log(undefNumber);

undefNumber = 10
console.log(undefNumber);

const Id = Symbol("1234")
const NewId = Symbol("1234")

console.log(Id);
console.log(NewId);
//Both Id and NewId are not equal 
console.log(Id == NewId)        //equal
console.log(Id === NewId)       //strict equal

//BigInt
// const BigNumber = 3455838679720724875487857784758    // Number is too long for int
const BigNumber = 3455838679720724875487857784758n    //n at last is to make BigNumber of type BigInt

console.log(BigNumber, typeof BigNumber);


// Non-Primitive (Reference)
// Arrays, Objects, functions

//Arrays

const heros = ["Hero", "Hanuman", "SaktiMan"]

console.log(typeof heros);
console.log(heros);
console.log(heros[0]);
console.log(heros[1]);
console.log(heros[2]);
console.log(heros[4]);


//Objects

let Obj = {
    name: "aadish",
    id: 12,
}
console.log(Obj)

//Functions

const myFunction = function () {
    console.log("Hello WOrld")
}

console.log(myFunction)
console.log(myFunction())

// *******************************************************************

// Memory Stack(Primitive)  & Heap(Non-Primitive) 

// Copy of data in primitive datatype (in stack)
let myName = 'Aadish Jain'
let myName1 = myName

console.log(myName)
console.log(myName1)

myName1 = "Jain"

console.log(myName1)

//Heap -> call by reference two variable/object refer to one value
let NewObj = {
    name: "Jainji",
    email: "AadishJain@google.com"
}

let NewObj1 = NewObj

console.log(NewObj);
console.log(NewObj1);

NewObj1.name = "Aadish-AJ"   // changing the name of NewObj1 but NewObj's name is also changed now
console.log(NewObj);
console.log(NewObj1);