// if
//  const temperature = 41

//  if (temperature < 40) {
//     console.log("temperacture is less then 50");
//  } else{ 
//  console.log("temperacture is greeterthen 50")
//  }
//  const score = 200
//  if (score >100) {
//     let power = "fly"
//     console.log(`user power: ${power}`)
//  }
 //console.log(`user power ${power}`) // this is error because this power is out of scope

//  const  balance = 1000
//  // if (balance >500) console.log("test"),console.log("test2"); 
//  if (balance<500){
//     console.log("less than 500")
//  } else if (balance <750) {
//     console.log("balance is less then 750")
//  }else if (balance< 950){
//     console.log("blance is lessthen 750");
//  }else {
//     console.log("less then 1200")
 //}
 const userloggedin = true
 const debitcard = true
 const loggedfromgoogle = false
 const loggedfromemail = true

 if (userloggedin && debitcard && 2==3){
   console.log("allow to buy a corse")
 }
 if (loggedfromgoogle ||loggedfromemail) {
   console.log("allow to buy the corse")
 }