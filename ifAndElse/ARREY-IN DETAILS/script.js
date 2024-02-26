
// // ARRAY METHODS


// const cohorts = [
//     "soliu", 
// "zainab",
//  "Azeez",
//   "Nafisat", 
//   "sir kenny", 
//   "Basirat",
//    "Lateef"
// ];
// console.log(cohorts)



// // reapleace methods
// const change = (cohorts[1] = "bash");

// // ADD
// cohorts[7] = "Tolu"



// // ES5  // loop methods
// for(let i = 0; i < cohorts.length; i++)
// console.log(i, cohorts[i])


// //ES6

// for(const cohort of cohorts){
//     console.log(cohort);
// };

// const nestedArray = [[1,2],[3,4],[5,6]];
// const newArray = nestedArray[0][1]
// console.log(newArray)

// // Object methods

// const name = {
//     name : "john",
//     age : 60
// }
// console.log(name)


// const Arr = [
//     "Banana",
//     10000,
//     {
//         name : "Bala blu",
//         age : 80
//     },
   
// ]
// console.log( typeof Arr)
// /*********   ARRAY METHOD ***********/



// /********* PUSH METHOD***********/

// // PUHS METHODS
// const sudent = ["Yemi","Kola","Bola","sola","grace","tope"];
// console.log(sudent);
// const pushed = sudent.push("Babe","kabirat","sogo")
// console.log(pushed);


// // POP METHODS

// const number = [3,4,5,6,7,8,9];
// console.log(number);

// const popped = number.pop();
// console.log(popped);
// console.log(number);

// /**************SHIFT()*************/

// const colors = ["violent", "red","blue","black"];
// console.log(colors)

// const rmFirst = colors.shift()
// console.log(rmFirst);
// console.log(colors);

// // unshift

// const months = ["March","july","september","jaunary"];
// console.log(months);

// const adMonth = months.unshift("feb");
// console.log(adMonth);
// console.log(months);


// /******** SPLICE()*****************/

// const countries = ["kenya","Malaysia","canada","Qatar","Nigeria"];
// console.log(countries);


// countries.splice(3, 3, "Eygpt", "Ganada" ,"Moro");
// console.log(countries);


// const wears = ["Gucci","Versace","D&G","Nike","LV"];
// console.log(wears);

// wears.splice(2);
// console.log(wears)

// const drinks = ["Coke","Viju","Gin","Exotic","Bobo"];
// console.log(drinks);

// drinks.splice(2);
// console.log(drinks)

// /******** SLICE()*****************/
// const men = ["Tunmise","Kenny","Soliu","Bode","Abee","A Z"];
// console.log(men);

// const newString = "Nafeesah"
// console.log(newString.length);
// const newSlice = newString.slice(2,5);
// console.log(newSlice);

// const BaddMen = men.slice(2,5);
// console.log(BaddMen);

// const coolestAmong = men.slice(4)
// console.log(coolestAmong)

// /************* toString**************/

// const menString = men.toString() 
// console.log(menString);


// const chechMen = men.includes("Abbe");
// console.log(chechMen)

// const chechMen2 = men.includes("Bash");
// console.log(chechMen2)

// /************* Sort()********/
// men.sort();
// console.log(men)

// const alph = [' G','F','K','A','B','Z'];
// console.log(alph);

// alph.sort();
// console.log(alph);

// const numbers = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4];
// console.log(numbers);

// numbers.sort((a, b) => a -b);
// console.log(numbers)

// numbers.sort((a, b) => b -a);
// console.log(numbers)

// /************indexof()************ */

// const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2]
// console.log($number);

// const index1 = $number.indexOf(2);
// console.log(index1);

// const tutor = ["Abdullah","Naheem","Anate","seyi","Soliu" ,"Anate"];
// console.log(tutor);

// const indexTy = tutor.indexOf("Anate");
// console.log(indexTy);

// const lastIndex = $number.lastIndexOf(7,)
// console.log(lastIndex);

// /******************ES5 *********************/

//  const _names = ['Zainab','basirat','nafishat'];

// // for(let i = 0; i < _names.length; i++){
// //     console.log(i, _names[i]);
// // };

// /******************ES6 *********************/

// // for(const _name of _names) {
// //     console.log(_name)
// // }

// /*************** forEach************ */

// _names.forEach(function() {});
    

// _names.forEach((value, i ,arr) => {
//     console.log(value.toUpperCase());
//     // console.log(i);
//     // console.log(arr);
// });

// const _$numbers = [2, 4, 6, 8, 1, 7];

// _$numbers.forEach(function(number, i) {
//     console.log(number,i)
// });

// const mammals = ["Lion","Cow","Dog","Cat"];
// mammals.forEach((mammal, i) => console.log(mammal, i));

// let totalVal = 0;
// const trans = [42, 26, 85, 13, 4,12];

// trans.forEach((tran)=> {
//     console.log(totalVal, (totalVal += tran) ,tran )
// })
// console.log(totalVal);

// // EXAMPLE 4

// _names.forEach((name) => console.log(`congratulation ${name} unah dey smoke india helm`));


// // EXAMPLE

// const inventory = [
//     {name:"Rice", price: 400},
//     {name:"Semo", price: 400},
//     {name:"Beans", price: 400},
//     {name:"Yam", price: 400},
//     {name:"Garri", price: 400},
// ];

// const price = inventory.map((value)=>{
//     return value.price
// })

// console.log(price);

// const commodities = inventory.map((commodity) => commodity.name)
// console.log(commodities);


// let Double = [2, 3, 4, 5, 6, 7];

// let Double$ = Double.map((numb) => {
//     return numb * 2
// });

// console.log(Double$)


// ARRAY RILTER

 const numbers = [-10, 0, -2, 4, -9, 5, -8]

 //const filteredNumbers = numbers.filter((number) => {
//     return number < 0
// })
// console.log(filteredNumbers)


const filteredNumbers1 = []
for(let i = 0; i <numbers.length; i++){
    if(numbers[i] < 0){
        filteredNumbers1.push(numbers[i])
    }
}
console.log(filteredNumbers1)

// example 2
const employees = [
    {name: "mohammad", overtime: 10},
    {name: "Aisha", overtime: 5},
    {name: "Bolaji", overtime: 4},
    {name: "Chris", overtime: 7},
    {name: "Ben", overtime: 9},
    {name: "Munirat", overtime:12},  
]

const employeesToReward = employees.filter((employee) =>{
    if(employee.overtime >= 7){
        return true
    }
})

const employeesToRewardNames = employeesToReward.map((employee)=>{
    return employee.name
})
console.log(employeesToReward)
console.log(employeesToRewardNames)


 employeesToRewardNames.forEach((name) =>{
    console.log(`Hi ${name}, you have recieved an awaed for your hardword`)
    return true
    
}) 



const creatures = [
    {animal:"Shark", habitat:"Ocean"},
    {animal: "Whale",habitat:"Ocean"},
    {animal: "hippopotamus",habitat:"lake"},
    {animal: "Lion",habitat:"Savanna"},
    {animal: "Monkey",habitat:"Jungle"},
]

const aquaticAnimals = creatures.filter((creature) =>{
    return creature.habitat === "Ocean" || creature.habitat === "lake"
})

console.log(aquaticAnimals)


//ARRAY FIND

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const value = digits.find((digit) =>{
    return digit < 4
})

console.log(value)


// another example for find

const states = [
    "Ogun State",
    "Kogi State",
    "Anambara State",
    "Lagos State",
    "Benue State",
]
const state = states.find((state) =>{
    return state.startsWith('L')
})
console.log(state)


// ARRAY INCLUDES

// A student Assessment took place, with a total mark of 10, Give us 7 students and 
//mark them over 10, now give a reward to each student with a score over the mark of 6


const Students = [
    {name: "kenny", mark: 5},
    {name: "basirat", mark: 6},
    {name: "abike", mark: 7},
    {name: "tope", mark: 8},
    {name: "seyi", mark: 9},
    {name: "suliyat", mark: 8},
    {name: "Khodijah", mark: 6},
   ]

   const StudentsToreward = Students.filter
 ((student) => {
    return student.mark > 6
 })

 const StudentsTorewardNames = StudentsToreward.map
 ((student) => {
    return student.name
 })


 console.log(StudentsToreward);
 console.log(StudentsTorewardNames);


 StudentsTorewardNames.forEach((name) => {
    console.log(`Hi ${name}, Excellent and good of you, you scored above 6marks.`)
 })

// ARRAY SOME AND EVERY

const box = [1, 2, 3, 4, 5, 6, 7]

//Some checks if some of the properties in an array meets a particular
//condition
console.log(box.some((el)=> {return el > 4}))


// Every checks if all of the properties in an array
//meets a particula condition
console.log(box.every((el)=> {return el > 4}))


// ARRAY REDUCE

// loops through the array and return the sum of the array.
//it takes two parameters which are accumulator
// and value. the call back function take two parameters which are accumulator and value,

const boxs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const answer = boxs.reduce((accumulator, value) =>{
    return accumulator + value
 }, 0)
 console.log(answer)
