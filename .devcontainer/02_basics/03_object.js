//singleton

//object literals
 const mysum = Symbol('key1')

const jsUser = {
    name:"aadil",
    [mysum]:"mykey1",
    "fullName" : "aadilansari",
    age:18,
    location: "mujhera",
    email : "aadilansari9450@gmail.com",
    isLoggedin: false,
    lastLoginDays:["mondey","sunday"]
}
//console.log(jsUser.email)
//console.log(jsUser.fullName)
//console.log (jsUser[mysum])
//console.log( typeof jsUser[mysum])
 jsUser.email  = "{aadilansari9450@gmail.com"
 //Object.freeze(jsUser)
 jsUser.email = "techanicalgurigi9550@gmail,com"

 //console.log(jsUser)

 jsUser.greeting = function(){
    //console.log("hello js user");

 }
 //console.log(jsUser.greeting());
 
 jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.fullName}`);
 }
 console.log(jsUser.greetingtwo());


 