const name = "aadil"
const repoCont = 50
//console.log(name + "ansari" +repoCont)

//console.log(`hello my name is ${name} and my repo count is ${repoCont}`)

const gameName = new String ('aadilansari')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0 ,5)
console.log(newString)

const anotherString = gameName.slice(-2 ,4);
console.log(anotherString)

const newStringone = "       AADILANSARI     "
console.log(newStringone)
console.log(newStringone.trim()); // use for remove extra spaces

const url = "https:aadil.com %20"
console.log(url.replace('%20','_'))
console.log(url.includes('o'))


