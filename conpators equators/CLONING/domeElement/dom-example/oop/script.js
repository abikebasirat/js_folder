
const calculateRectangleArea = function(length, width) {
    return length * width;
};

// Example usage:
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is: " + area);

// oop => object oriented programing.

// object literal
let person = {
    first_name : "Salman",
    lasst_name : "Kofoshi",

    getFunction : function(){ // method  => a property whose value is a function
        return `My name is ${person.first_name} ${person.lasst_name}`

    },

    phoneNumber : {
        mobile : "12345",
        landline: "6789"
    }
}
console.log(person.getFunction())
console.log(person.phoneNumber.landline)


// Object constructor.
function personTwo(first_name,lasst_name){
    this.first_name = first_name,
    this.lasst_name = lasst_name
}

let person1 = new personTwo("Hayzed", "Mabululu");
console.log(person1)


// The new keyword
// create a new keyword object

const student = {}  // simple object

const studentTwo =new Object();

console.log(studentTwo)

const arr = [1, 2, 3, 4,];
const newArr = new Array(1, 2, 3, 4)

console.log(arr, newArr);


// Date
const myBaiday = new Date("may 28,2001");
console.log(myBaiday)


const myNumber = new Number(100.00)
console.log(myNumber.toFixed(0))

console.log(Object)


//***** THIS KEYWORD *****///
// it is used to reference the objerct that is executing 
// the refrence function, in order word , every function has a 
// function to its current execution context

 function Sentence(words){  // constructor function syntax
    this.words = words;
    console.log(this)

}

const $_ = new Sentence(`Hello there! we're learning about this keyword`)

function Car(color, brand, wheels){
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this)
}

const blueCar = new Car ("Blue","BMW","4", "🚕");
const redCar = new Car ("Blue","BMW","4", "🚗");


// create a cohort function with params (name, age, favFood,phonNo,baiday), 
// create new instances for three diffefent cohorts, log the param argument onto the console  
// bifthday should be a new date instance.

function cohort(name,age,favFood,phonNo,baiday) {
 this.name = name;
this. age = age;
 this.favFood = favFood;
 this.phonNo = phonNo;
 this.baiday = baiday;

 console.log(this)
}

const name = new cohort("kenny",29,"Rice", 90876265, new Date("may 29,2001"))
const twoName = new cohort("Basirat",20,"Eba", 90876265, new Date("may 29,2001"))
const threeName = new cohort("Abike",28,"Semo", 90876265, new Date("may 29,2001"))

// class is a schema for an oboject that can save many many many value just
// 1 dirernd function fist one class decleration and 
// 2 class exprenction

// Class keyword.
// class declaration.

class Shape1 {
    constructor(width,height){
        this.width = width;
        this.height = height;

        console.log(this);
    }
}

const areas = new Shape1(10, 2);

// class expression
// i => anonymous

const Shape = class {
    constructor(width,height){
        this.width = width;
        this.height = height;

        console.log(this);
    }
}

const areas1 = new Shape1(10, 2);

// ii => unanonymous
const BigBoy = class Bigie {
    constructor(name,age){
        this.name = name;
        this.age = age;
    
    }

    // getter function

    get him(){
        return this.coder();
    }

    // method

    coder(){
        return {name:this.name, age:this.age}
    }

}
const instance = new BigBoy("Paiko", 40)
console.log(instance.him)

//Example
const School = class Academy {
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    get principal(){
        return this.seniorBoy()
    }

    seniorBoy(){
        return{name:this.name, location:this.location}
    }
}

const headMaster = new School("Hayzed", "Pegamut")
console.log(headMaster.principal)

// with an unanonymous class function named rectshape, create a construtor with params of length
// and breath, get the area of a rectangle using getter function and calulate method , 
// create a new  instance for rectshape with its relative argument ....

const RectShape = class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    get area(){
        return this.Calc()

    }
        Calc(){
        return this.length * this.breadth
        }

    }

const square = new RectShape(10, 10)
console.log(square.area)


//     name: "class captain",
//     age: 540,
//     isBlack: false
// }

// const detailTwo = {
        // const detailOne = {
        //     name: "Baba Oloye",
        //     age: 640,
        //     isBlack:true
        // }
        
        // Difference between const and class
        class Detail {
            constructor(name,age, isPretty){
                this.name = name;
                this.age = age;
                this.isPretty = isPretty;
            }
        }

        const detailOne = new Detail("Bash",12, false);
        const detailTwo = new Detail("Nafi",10, false);
        const detailThree = new Detail("Bode",2, true);

        const array = [detailOne,detailTwo]
        array.push(detailThree)
        array.shift(detailOne)
        console.log(array)

        const createPerson = (name , age, isHands) =>{
            // const userSchema = {
            // name, age, isHands
            // }
            // return{name, age, isHands}
            return {name, age, isHands}

        }

        const  PersonCreated = createPerson("Bode", 45, true)
        const  PersonCreated2 = createPerson("soliu", 450, true)
        console.log(PersonCreated)
        console.log(PersonCreated2)


        //inheritance java sript is the ability of a class to derive properties and xtics from another clsss, while having its own properties as well

        //INHERITANCE
        class Animal {
            alive = true;

            isBeautiful = "This animal is beautiful";

            eat(){
                console.log(`This${this.name} can eat`)
            }

            sleep(){
                console.log(`This${this.name} can sleep`)
            }
        }

        

        class Rabbit extends Animal{
            name = "Rabbit"
            run(){
                console.log(`This${this.name} can run`)
            }
        }
        class Goat extends Animal{
            name = "goat"
        }

        const rabbit = new Rabbit()
        rabbit.eat()
        console.log(rabbit)

        const goat = new Goat()
        goat.eat();
        console.log(goat.isBeautiful)
    

        