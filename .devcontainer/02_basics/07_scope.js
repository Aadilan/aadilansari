//let a = 10;
//const b = 17;
//var c = 15;
 let a = 300;
  //var c = 300

 if (true) {
    let a = 10;
    const b = 17;
  // console.log(a) 
}
//console.log(a);
//console.log(b);
//console.log(c);

//************************nestedfunction*** */
//chail container parent ke varible ko exsis kar sakta hai // closure

//function one () {
    //const username = "aadil"

    function two (){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website)
     two()
//}
//one()

if (true) {
  const  username = "aadil"
    if(username === "aadil") {
        website =  " youtube"
        //console.log(username + website)
    }
}
//console.log(username)

// ++++++++++++++++++++++ intersting ++++++++
function addone (num1) {
    return num1 + 1 
}
console.log(addone(5))
//addtwo(5) declaraction se phle exics nhi kar sakte
const addtwo = function (num2){
    return num2 +2
}
console.log(addtwo(5))
