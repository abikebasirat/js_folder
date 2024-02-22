
// ARRAY METHODS


const cohorts = [
    "soliu", 
"zainab",
 "Azeez",
  "Nafisat", 
  "sir kenny", 
  "Basirat",
   "Lateef"
];
console.log(cohorts)



// reapleace methods
const change = (cohorts[1] = "bash");

// ADD
cohorts[7] = "Tolu"



// ES5  // loop methods
for(let i = 0; i < cohorts.length; i++)
console.log(i, cohorts[i])


//ES6

for(const cohort of cohorts){
    console.log(cohort);
};

const nestedArray = [[1,2],[3,4],[5,6]];
const newArray = nestedArray[0][1]
console.log(newArray)

// Object methods

const name = {
    name : "john",
    age : 60
}
console.log(name)


const Arr = [
    "Banana",
    10000,
    {
        name : "Bala blu",
        age : 80
    },
   
]
console.log( typeof Arr)
/*********   ARRAY METHOD ***********/



/********* PUSH METHOD***********/

// PUHS METHODS
const sudent = ["Yemi","Kola","Bola","sola","grace","tope"];
console.log(sudent);
const pushed = sudent.push("Babe","kabirat","sogo")
console.log(pushed);


// POP METHODS

const number = [3,4,5,6,7,8,9];
console.log(number);

const popped = number.pop();
console.log(popped);
console.log(number);

/**************SHIFT()*************/

const colors = ["violent", "red","blue","black"];
console.log(colors)

const rmFirst = colors.shift()
console.log(rmFirst);
console.log(colors);

// unshift

const months = ["March","july","september","jaunary"];
console.log(months);

const adMonth = months.unshift("feb");
console.log(adMonth);
console.log(months);


/******** SPLICE()*****************/

const countries = ["kenya","Malaysia","canada","Qatar","Nigeria"];
console.log(countries);


countries.splice(3, 3, "Eygpt", "Ganada" ,"Moro");
console.log(countries);


const wears = ["Gucci","Versace","D&G","Nike","LV"];
console.log(wears);

wears.splice(2);
console.log(wears)

const drinks = ["Coke","Viju","Gin","Exotic","Bobo"];
console.log(drinks);

drinks.splice(2);
console.log(drinks)

/******** SLICE()*****************/
const men = ["Tunmise","Kenny","Soliu","Bode","Abee","A Z"];
console.log(men);

const newString = "Nafeesah"
console.log(newString.length);
const newSlice = newString.slice(2,5);
console.log(newSlice);

const BaddMen = men.slice(2,5);
console.log(BaddMen);

const coolestAmong = men.slice(4)
console.log(coolestAmong)

/************* toString**************/

const menString = men.toString() 
console.log(menString);


const chechMen = men.includes("Abbe");
console.log(chechMen)

const chechMen2 = men.includes("Bash");
console.log(chechMen2)

/************* Sort()********/
men.sort();
console.log(men)

const alph = [' G','F','K','A','B','Z'];
console.log(alph);

alph.sort();
console.log(alph);

const numbers = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4];
console.log(numbers);

numbers.sort((a, b) => a -b);
console.log(numbers)

numbers.sort((a, b) => b -a);
console.log(numbers)

/************indexof()************ */

const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2]
console.log($number);

const index1 = $number.indexOf(2);
console.log(index1);

const tutor = ["Abdullah","Naheem","Anate","seyi","Soliu" ,"Anate"];
console.log(tutor);

const indexTy = tutor.indexOf("Anate");
console.log(indexTy);

const lastIndex = $number.lastIndexOf(7,)
console.log(lastIndex);

/******************ES5 *********************/

 const _names = ['Zainab','basirat','nafishat'];

// for(let i = 0; i < _names.length; i++){
//     console.log(i, _names[i]);
// };

/******************ES6 *********************/

// for(const _name of _names) {
//     console.log(_name)
// }

/*************** forEach************ */

_names.forEach(function() {});
    

_names.forEach((value, i ,arr) => {
    console.log(value.toUpperCase());
    // console.log(i);
    // console.log(arr);
});

const _$numbers = [2, 4, 6, 8, 1, 7];

_$numbers.forEach(function(number, i) {
    console.log(number,i)
});

const mammals = ["Lion","Cow","Dog","Cat"];
mammals.forEach((mammal, i) => console.log(mammal, i));

let totalVal = 0;
const trans = [42, 26, 85, 13, 4,12];

trans.forEach((tran)=> {
    console.log(totalVal, (totalVal += tran) ,tran )
})
console.log(totalVal);

// EXAMPLE 4

_names.forEach((name) => console.log(`congratulation ${name} unah dey smoke india helm`));


// EXAMPLE

const inventory = [
    {name:"Rice", price: 400},
    {name:"Semo", price: 400},
    {name:"Beans", price: 400},
    {name:"Yam", price: 400},
    {name:"Garri", price: 400},
];

const price = inventory.map((value)=>{
    return value.price
})

console.log(price);

const commodities = inventory.map((commodity) => commodity.name)
console.log(commodities);


let Double = [2, 3, 4, 5, 6, 7];

let Double$ = Double.map((numb) => {
    return numb * 2
});

console.log(Double$)





