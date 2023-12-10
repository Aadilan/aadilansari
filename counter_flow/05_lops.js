// for of 

// [" "," ", " "]
// [ {}, {},{}]

const arr = [1,2,3,4,5,5,]

for (const num of arr) {
    console.log(num)
    
}
const greetings = "hellow would!"
for (const greet of greetings) {
    console.log(`each char is :${greet}`)
    
}

// maps  // not repet value 
// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATE OF AMARICA")
// map.set('UAE',"UNITED ARAB AMIRAT")
// //console.log(map);

// for (const [key, value ] of map) {
//     console.log(key ,':-' ,value)
    
// }
// const myObj = {
//     cricket : "virat kholi",
//     batmintion : "shayna nheval",
//     football : "ronaldo",
//     tanisball : "shaniya mirza"
// }

// for (const {key , value} of myObj) {    // thise for of loop not workin in object
//     console.log( key ,":-" , value)
    
// }


// for (const key in myObj) {
//     console.log(`${key} playing ${myObj[key]}`)
    
// }

const programing = ["js","rb","py","java"]
 for (const key in programing) {
    console.log(programing[key])
 }
 // map is not itraction
