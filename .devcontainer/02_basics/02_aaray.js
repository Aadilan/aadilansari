const marval_heros =["thor","shaktiman","spiderman"]

const dc_heros = ["superman","flash","batman"]

//.push(dc_heros);
//console.log(marval_heros[3] [1])

const allheros = marval_heros.concat(dc_heros);

//console.log(allheros)


const allNew_heros = [...marval_heros, ...dc_heros]
//console.log(allNew_heros);

const real_another_array = [1,2,3,4,[1,3,5,7,[8,9]]];

const another_array = real_another_array.flat(Infinity)
//console.log(another_array)

console.log(Array.isArray("aadil"))
console.log(Array.from("aadil"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
