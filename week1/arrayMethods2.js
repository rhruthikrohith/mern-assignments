let marks=[31,32,33,1,2]
//filter
// let result=marks.filter(element => element = 5)
// console.log(result)
// //wt a function that can extract marks greater than 70 pack them into array and return it
//find all marks between 30,90
let result1=marks.filter(function(element){
    return element > 30 && element < 90;
})
console.log(result1)
//map(transform or modify)
let salaries=[100,200,300]
//add 50 for each
let resu=salaries.map(function(element){
    return element+50;
})
console.log(resu)
//filter using map
let resu1=salaries.filter(r=> r>=20 && r<=300)
console.log(resu1)
