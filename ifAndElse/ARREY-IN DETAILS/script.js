
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
cohorts[7] = "Tolu"


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

// ES5  // loop methods
for (let i = 0; i < cohorts.length; i++)
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




