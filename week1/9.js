// filter- for Selection
// map- for mapping and adding or any operations used to change or modify
let marks=[1,2,3,4,5]
let result=marks.filter(a=>a>3)
console.log(result)
//mappp}}}}
//filter{{{{{{{{
let result2=marks.map(m=>m+3)
console.log(result2)
//loop for sum of all marks\
sum=0
for (let v of marks){
sum+=v
}
console.log(sum)
//}}}}}
///reduce for loops
// let m2=m1/marks.length;
//less thasn
let m1=marks.reduce((a,b)=>a<b?a:b)
 console.log(m1)
 //greater thann
 let m2=marks.reduce((a,b)=>a>b?a:b)
 console.log(m2)
 let s=marks.findIndex(a=>a===3)
 console.log(s)