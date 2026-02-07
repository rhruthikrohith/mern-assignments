// //all premitives are immutable which means they cant be modified onvce they are created
// let a=10;
// a=a+1;
// a=a*10;
// //all refernce types are mutable-(array and object)
// // console.log(a)
let emp=
{
    empno:1,
    eno:1,
    name:"rfr"
} 
console.log(emp.eno)
//adding seperately
emp.rhr="rohith"
//update property
emp.rhr="jsvknsv"
//print
console.log(emp)
//delete
delete emp.empno
//print
console.log(emp)
//freeze
Object.freeze(emp)
console.log(Object.keys(emp))

console.log(Object.values(emp))

   
