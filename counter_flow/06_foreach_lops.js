const coding = ["js","ruby","java" ,"python","cpp"]

coding.forEach(function(item){
    //console.log(item)
})
coding.forEach((item) =>{
 //console.log(item)
})

//function PrintMe (item){
    //console.log(item)
//}
//coding.forEach(PrintMe)

coding.forEach ((item,index, arr)=> {
    console.log(item,index,arr);
})
const myCoding = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName : "hyper text maltiple language",
        languagefilename: "html"
    },
    {
        languageName :"python",
        languagefilename: "phy"
    }
]
myCoding.forEach( (item) => {
 console.log(item.languagefilename)
})

