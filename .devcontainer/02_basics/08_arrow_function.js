const user = {
    username: "aadil",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage();
//console.log(this);

//function chai (){
    
    //console.log(this); //function mai this use nhi karte hai
//}
//chai()

//const chai = function(){
    //let username = "hitesh"
    //console.log(this.username);

//}
//chai()
//const chai = () =>{
    //let username = "hitesh"
    //console.log(this);

//}
//chai()

//+++++++++++++++++++++arrowfunction++++++++++++++++++

//const addtwo = (num1,num2) => {
   // return num1 + num2
 //}
//console.log(addtwo(3,4))

//implesent return

//const addtwo = (num1,num2) => num1 + num2
 
//console.log(addtwo(3,4))

//object return
const addtwo = (num1,num2) => ({username :"aadil"})

console.log(addtwo(3,7))





















