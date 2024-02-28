console.log("Hello world");


const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Makalele";

console.log(person);
console.log(otherPerson);

// Ahallow cloning
// spread operator (...)

// const numbers = [1, 2, 3, 4, 6];
// console.log(...numbers);

// const newNumber = [...numbers];
// console.log(newNumber)


// To Get the equality

// ARRAY CLONING
const numbers = [1, 2, 3, 4, 5, 6];
const newNumber = [...numbers];
const copiedNumber = numbers

numbers.push(8);

const $numbers =numbers. slice(1,3);

console.log($numbers);
console.log(copiedNumber);
console.log(newNumber);
console.log(numbers);


console.log(numbers === copiedNumber);
console.log(numbers === newNumber);

//object cloning


// to create a new object that copies the top level
// structure of the original object but not in its nested object of array,
// in other word if the original object or array contains nested object 
// or array, the shallow cloe will create new reference to those 
// nested object rather than creating new copies. when u have nested object inside an object
// the reference here will tamper the child object instead of the Main object

// const personDateils = {
//     name: "Zainab",
//     age: 40
// } 

// const  changeDateils = personDateils;
// personDateils.age = 10;
// console.log(personDateils);

// console.log(changeDateils);


// const originalObj = {
//     name:"Bash",
//     age: 20,
//     address:{
//         city:"pegamut",
//         state:"Ogun"
//     }
//};

// const cloneObj = Object.assign({}, originalObj);
// cloneObj.name = "Naphy";
// cloneObj.address.city = "Elejigbo";

// console.log(originalObj);
// console.log(cloneObj);


// Spreading oprator

const arr1 = [1,2,3,4,];
const arra2 = [4,5,6,7];
const arra3 = [8,9,10,11];

const merged = [...arr1, ...arra2, ...arra3];
console.log(merged);

//exaple 4

// const text = {name:"Bode"};
// const numbs = [1,2,3,4];

// const cloneMerged = {...text, data:[...numbs]};

// cloneMerged.name = "Hayzed";
// cloneMerged.data.push(5);

// console.log(text);
// console.log(numbs);
// console.log(cloneMerged);

   
//deep clone is an object in javascript. this means creating a new oject that is
//  entirely sepearated from the original object, such that change in the 
// new object do not affect the original and vice versa. this will creste a new object but
//  nested object will still be reference to the original one 

//DEEP CLONING

// const details = {
//     firstName: "Kenny",
//     car: {
//         brand: "Toyata",
//         wheels: 4,
//         color: "red"
//     }
// }

// const newDetails = {...details};
// newDetails.firstName = "Mika";

// newDetails.car.color = "blue"

// console.log(details);
// console.log(newDetails);


//to do jesing.stringva to convat to the string
//json.stingify() 

const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyata",
        wheels: 4,
        color: "red"
    }
}

const stringfiedDetails = JSON.stringify(details);
console.log(stringfiedDetails);
const newDetails = JSON.parse(stringfiedDetails);
console.log(newDetails);

newDetails.car.color = "Blue"
console.log(details.car.color);
console.log(newDetails.car.color);


const originalObj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Ageege wa",
        area: "Baba Yemi",
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObj));

cloneObj.name = "soliu"
cloneObj.age = 54
cloneObj.address.local = "pegamut";
cloneObj.address.area = "Mujaidun"

console.log(originalObj);
console.log(cloneObj);

