const userEmail = "aadilansari9450@gmail.com"

if(userEmail){
    //console.log("GOT USER EMAIL")
}else {
    //console.log("dont have user email");
}

// falsy values

// false, 0 ,-0, bigint 0n, "" , null, undefind, nan

// truthy values
// "0" ,'false' ," " ,[], {} function(){}

const emptyobj = {}

if (Object.keys(emptyobj).length ===0) {
    //console.log("object is empty")
}
//Nullish coalescing operator (???): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ??  15
//val1 = null ?? 10 ?? 15

//console.log(val1)

// terniary operator

// condition ? true : false

const iceTeaPrice = 60
iceTeaPrice >= 80 ? console.log("greater then 80") : console.log("less then 80")
