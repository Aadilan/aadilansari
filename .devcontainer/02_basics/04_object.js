//const tinderUser = new Object()

const  tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "aadilansari"
tinderUser.isLoggedin = false
//console.log(tinderUser);

 const regularUser = {
    email : "aadilansari9450@gmail.com",
    userFullName: { 
        firstName :"aadil" ,
        lastName : "ansari",
           anotherUser: {
            name : "shame"
           }





    }
}
//console.log(regularUser.userFullName.anotherUser.name);

//marge object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3= {obj1 , obj2} // worng mathod
 //const obj3 = Object.assign({},obj1 , obj2,obj4)
 const obj3 = {...obj1,...obj2,...obj4}; // mostly use
//console.log(obj3)

const users = [
    {
         id :1,
         email : "aadilansari9450@gmail.com"
    },
    {
        id : 2,
        email: "kamilansari6467@gmail.com"

    },

]
 console.log(users[1].email)
 console.log(tinderUser);

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 





 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 



