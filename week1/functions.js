// const e = require("express")

// function sum(a,b){
// let sum=a+b
// return sum
// //}
// //let sum1=sum(10,20)
// //console.log(sum1)
// //console.log(typeof sum)
function Big(c,d,e){
    if(c>d && c>e)
    {
        console.log("c is great")
    }
    else if(d>c && d>e)
    {
        console.log("d is great")
    }
    else{
        console.log("e is great")
    }
}
    console.log(Big(1,2,3));