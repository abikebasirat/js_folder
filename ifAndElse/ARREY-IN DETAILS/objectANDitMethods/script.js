// OBJECTS

// Objects are used to represent real life detas

//object is an unordered collection of related data in from of key and value pairs


const firstName = "Soliu"

const person = {
    firstName,
    surname: "Hayzed",
    age: 158,
    children:{
        firstChild:"Eef",
        secondChild:"Nafisah"
    }
}
console.log(person)


// ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT

const human = {
    firstName: "Abdullha",
    "DLT Africa location": "pegamut"
}


human.pet = {name:"cobra", age:3}
human.job = "headmaster"
human.favoFood = "Garri"

console.log(human.firstName)
console.log(human.pet.name)
console.log(human["firstName"])
console.log(human["DLT Africa location"])

console.log(human)

// OBJECT BUILT IN METHOD

const pet = {
    petName:"dog",
    petSound:() => {
        console.log("woof! woof!")
        
    }
}

pet.petSound()


const dog = {
    name: "Fluffy",
    age:2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }
}
dog.listAllProperties()


const myObject = {
    myMethod1: () =>{}, // ARROW FUNCTION
    myMethod2: function () {}, // FUNCTION DECLEARATION

};

const animal = {
    name: "fluffy orange",
    age: 10,

    brak: () => {
console.log("woof! woof!")
    }
}

console.log(animal.name);
console.log(animal.age);
animal.brak()


/***************OBJECT METHOD**************/
// Object.keys()

const employees = {
    boss: "Kenny" ,
    secretary: "Basirat" ,
    Sales: "Abike" ,
    account: "Nafisah" ,
    Cleaner: "Ade",
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)


// object value()
const session = {
    id: 1,
    date: "27-feb-2024",
    device: "Mobile",
    browser: "Chrome"

}
const sessionValue = Object.values(session);
console.log(sessionValue);



//Object entries

const operatingSystem = {
    name: "Linux",
    version: 18.40,
    license: "open source"

}

const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo)



//freeze method

const user = {
    username: "john",
    password: 12345,
}

const userInfo = Object.freeze(user);
console.log(userInfo)

userInfo.username = "Sliu"
console.log(userInfo)


const  userOne = {
    userName: "john",
    password: 12345

}
// seal method
const userInfo1 = Object.seal(userOne)
userInfo1.userName = "AZ"
userInfo1.age = 32
console.log(userInfo1);



let x
let y

const  persons = {
    name:"AZ",
    age: 23,
    isAdmin: true,
    address: {
        street: "pegamut",
        city:"ibadan",
        state: "Oyo"

    },

    hobbies: ["Music", "Sport"]
}

// accessing an array inside an object

x = persons.hobbies[0]
y = persons.hobbies[1]
// let y = persons["hobbies"][1]
console.log(x, y)


// updating and property
persons.name = "Bode"
console.log(persons)


persons.address = "Ireoluwa"
console.log(persons)



// delete a properties

delete persons. address.state
console.log(persons)

delete persons.address.city
console.log(persons)


// adding a function to an object with only function
persons.great = function(){
    console.log(`Hello, my name is ${this.name}`)
}
persons.great();


// value and refrence
//copying  primitive value


//COPING NUMBERS
let x1 = 1
let y1 = x1;

x1 = 2
console.log(x1)
console.log(y1)

// coping  string
let firstPerson = "Mark"
let secondPerson = firstPerson
firstPerson = "Austin";
console.log(firstPerson)
console.log(secondPerson)


//copying complex value

//copying arrays
const animals = ["dog","cart"];
const otherAnimals = animals

animals.push("goat");
console.log(animals === otherAnimals)
 


// coping object

const data = {
    firstName: "kenny",
    lastName:"Abike"
}
const otherdata = data
console.log(otherdata === otherdata)



// EQUALIYT

const person1 = {
    firstName: "Sliu"
}

const otherPerson1 = {
    firstName: "Soliu"
}
console.log(person1 !== otherPerson1) // false

const otherPerson3 = person1
console.log(person1 === otherPerson3); // true
