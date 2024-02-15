
// If statment

const age = 18

const bianca = 12

if (bianca > age){
    console.log("you are granted admission")

} else if(bianca === age){
    console.log("your adimssion have been postponed to the nest year")
} else{
    console.log("wait till u are above 18")
}


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

let school = new Date().getschools();
if(school <6){
  console.log("Good morning")
}else if(school >= 6 && school <24){
  console.log("Good afternon")
}else{
  console.log("Good evening")
}

 