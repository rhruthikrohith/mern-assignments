let students=[
    {
        sno:1,name:"ravi",age:23
    },
    {
        sno:2,name:"ra,dvi",age:2873
    }
]
let ages=students.filter(a=>a.age<50)
console.log(ages)
// let incre=students.map(a=>{
//     if (a.name==='ravi'){
//         return a.age=a.age+2;
//     }
// })
// console.log(incre)
//find um of all ages of students
let m1 = students.reduce((a,b) => a.age + b.age);
console.log(m1)