// itraction or loop

// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if (i == 5) {
        //console.log("5 is best number")
    }
    //console.log(element)
    
}
for (let i = 1; i <=10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
    //console.log(`inner loop value: ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
        
    }
    
}
//let myArray = ["flash","batman","superman"]

//for (let index = 0; index < myArray.length; index++) {
    //const element = myArray[index];
    //console.log(element);
    
//}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
//     }
    
//     console.log(`value of i is: ${index}`)
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         //console.log(`Detected 5`);
//         continue
//     }
    
//     //console.log(`value of i is: ${index}`)
    
// }
 // while loops
 let index = 0

 while (index <=10) {
    console.log(`value of index is : ${index}`);

    index = index +2

    
 }
//  let myArray = ["salman","sharukh", "aamir"]

//  let arr = 0

//  while(arr < myArray.length){
//     console.log(`the value is myArray: ${myArray[arr]}`)
//     arr++
//  }

//DO WHILE LOOP

let score = 11
do{
    console.log(`the score is : ${score}`)
    score++
}while (score <=10)