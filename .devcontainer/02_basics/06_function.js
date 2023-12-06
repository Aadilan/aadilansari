function sayMyname (){
    console.log("A")
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("L")

}
//sayMyname()

// function addTwoNumber (number1, number2){
//     console.log(number1 +number2)

// }
function addTwoNumber (number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2

}
 const result = addTwoNumber(3,4)
 //console.log("result:",result)
  function loginUserMessage (username = "sam"){
    if (!username) {
        console.log("please enter username")
         return
    }
    return `${username} just logged in`
  }
   //console.log(loginUserMessage("a"))

//*************************************************************** */
// multiple value in function
   function calculateCartPrice (...num1){
    return num1 

   }
   //console.log(calculateCartPrice(200,400,700))

   const user = {
    username : "aadil",
    price : 199
   }
   function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
   }
   //handleObject(user)
   handleObject({
    username :"aadil",
    price : 399
   })

   const myNewArray =[ 20,42,46]
    function returnSecondValue (getArray) {
        return getArray[1]
    }
    //console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([400,566,636]));
