// const a = 40;
// const b = 30;
// let result = 0;

// result = a - b;
// console.log(result);

// result = a / b;
// console.log(result);

// result = a * b;
// console.log(result);

// result = a % b;
// console.log(result);

// result = a ** b;
// console.log(result);

// let number = 5
// number++
// console.log(number)


//oprators equators

//comparison operators

// <
// >
// =

// const a = 10
// const b = 13

// let result = a > b

// console.log(result)

// result = a > b

// console.log(result)

// result = a < b

// console.log(result)




// // strict (===) and loose (==) equality

// result = 0 === "0"
// console.log(result)

// result = 0 == "0"
// console.log(result)



// logical operators
// three type of logical operators

// AND (&&) to chech if all opperands are true
//OR (||) to chech if only one opprand is true return true
//NOT (!) reverse  the boolean

// let answer = 0

// // AND
// answer = true && true
// console.log(answer)

// answer = true && false
// console.log(answer)


// // OR

// answer = true || true

// console.log(answer)

// answer = true || false || true || false
// console.log(answer)

// // NOT

// answer = !true

// console.log(answer)

//ASSIGNMENT OPERATORS
// add valum to variable

// let number = 5
// console.log(number)

// number += 5
// console.log(number)

// let word = "hello"
// console.log(word)

// word += ", i am mr alliyu"
// console.log(word)



// If statment

// const age = 18

// const bianca = 12

// if (bianca > age){
//     console.log("you are granted admission")

// } else if(bianca === age){
//     console.log("your adimssion have been postponed to the nest year")
// } else{
//     console.log("wait till u are above 18")
// }


//Truthy and falsy values

//falsy values

//false
// ""
// 0
//null
//undefined
// NAN

// if("6fth"){
    // console.log('truthy value')
   // } else{
    // console.log("falsy value")
  // }

//   const password = "rapp"
//   const email = "anate@gmail.com"

//   if (password && email){
//     console.log("Login Approved")
//   }else if (password || email){
//     console.log("password and email")
//   } else{
//     console.log("unapproved!!!")
//   }



 
//   let time = 10

//   if (time < 10) {
//      console.log("Good morning")
//   } else if (time < 20){
//      console.log("Good Day")
//  } else {
//     console.log("Good evening")
//  }

 
// If statment

// const age = 18

// const bianca = 12

// if (bianca > age){
//     console.log("you are granted admission")

// } else if(bianca === age){
//     console.log("your adimssion have been postponed to the nest year")
// } else{
//     console.log("wait till u are above 18")
// }


//Truthy and falsy values

//falsy values

//false
// ""
// 0
//null
//undefined
// NAN

// if("6fth"){
    // console.log('truthy value')
   // } else{
    // console.log("falsy value")
  // }

  const password = "rapp"
  const email = "anate@gmail.com"

  if (password && email){
    console.log("Login Approved")
  }else if (password || email){
    console.log("password and email")
  } else{
    console.log("unapproved!!!")
  }


//SWITH STATMENT
 
 let time = 10

 if (time < 10) {
    console.log("Good morning")
 } else if (time < 20){
    console.log("Good Day")
 } else {
    console.log("Good evening")
 }

let temperature = 25;
if(temperature > 30) {
  console.log("its a hot day")
} else{
  console.log("its not too hot today.")
}

let hour = new Date().getHours();
if(hour < 12){
  console.log("Good morning")
}else if (hour >= 12 && hour < 18){
  console.log("Good afternoon")
}else{
  console.log("Good evening")
}

let school = new Date().getHours();
if(school < 6){
  console.log("Good morning")
}else if(school >= 6 && school < 24){
  console.log("Good afternon")
}else{
  console.log("Good evening")
}

// let uerIput = promp("pls enter ur age")

let score = 85;
if (score >= 90) {
  console.log("Excellent! you score an A.")
}else if (score >=80){
  console.log("Well done! you score a B")
}else if (score >=70){
  console.log("Good job! you score a C")
}else if (score >=60){
  console.log("you pass! you score a D")
}else{
  console.log("sorry you failled. you score an f")
}

let superHero = "Captain America";

switch (superHero){
  case 'iron Man':
  console.log("i am iron man..")
  break;
  case 'The':
    console.log("That is my hammer!")
    break;
    case 'Captain America':
      console.log("Never give up!")
      break;
      case 'Black Widow':
        console.log("One short, one kill.!")
        break;
        default:
          console.log("Enter a valid superHero Name")
}
// console.log(superHero)

let day = new Date().getDay();
let dayName;

switch (day){
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
     dayName= "Tuesday";
    break;
  case 3:
   dayName= "Wednesday";
    break;
  case 4:
    dayName= "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
   dayName = "saturday";
   break;

   default:
    dayName = "Unknown"
}

console.log("Today is " + dayName)

let fruit = "Orange";
let message;
switch(fruit){
  case "Orange":

  message = "Orange are crunchy and delicious";
  break;
  case "banana":
    message = "Banana are sweet and nutritions";
    break;
    case "grape":
    message = "Apple are crunchy and delicious";
    break;
    default:
      message = "sorry we dont have information about the";
}
console.log(message)

//TERNARY OPERATOR

const oldMan = 80

if(oldMan >= 80){
  console.log("you can drive")
}else{
  console.log("you may not drive")
}

 oldMan >= 80 ? console.log("u can drive") : console.log("u may not be drive");


let age = 20
let canVote =  age >= 18 ? "Yes you can vote!" : "NO you cant vote!"
console.log(canVote) 


 // LOOP
//  let i = 0

//  while(i < 10){
//   console.log(i)
//   i++
//  }

 // FOR LOOP
//  for ([initialization]; [condition]; [final-expression])
// statement

// for(let i = 0; i < 10; i++){
//   console.log(i)
// }

//  for(let i = 1; i <= 8; i++){
//   console.log(i)
//  }

//  const colors = ['red',"green","blue","yellow"];

//  for(let i = 0; i < colors.length; i++){
//   console.log(colors[i])
//  }