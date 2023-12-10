// const coding = [ "js","ruby","java","php","python"]

//  const values = coding.forEach((item) => {
//     console.log(item);
//     return item
    
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)


// foreach mathod

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
        
//     }
// })

//  console.log(newNums)

const books = [
    {title:'book one',genre:'friction',publish: 1999, edition: 2023},
    {title:'book two',genre:'history',publish: 1996, edition: 2010},
    {title:'book three',genre:' non -friction',publish: 1992, edition: 2008},
    {title:'book four',genre:'hindi',publish: 1991, edition: 2006},
    {title:'book five',genre:'english',publish: 1995, edition: 2017},
    {title:'book six',genre:'friction',publish: 1993, edition: 2014},
    {title:'book seven',genre:'history',publish: 1996, edition: 2013},
    {title:'book eight',genre:'hindi',publish: 1999, edition: 2015},
    {title:'book nine',genre:'english',publish: 1998, edition: 2013},
    {title:'book ten',genre:'friction',publish: 1999, edition: 2017},
];

let userBooks = books.filter( (bk) => bk.genre === 'history')
   userBooks = books.filter ((bk) => {return  bk.publish >= 1995 && bk.genre === 'hindi'})
console.log(userBooks);