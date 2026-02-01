//nullish caoleccing
let person={
    pid:100,
    adress:{
   city:"hyd"
    }
}
console.log(person.marks)
console.log(person.marks?.length)
//creating date
// let date1=new Date()
// console.log("data",date1)
// console.log(date1)
// console.log(Date.now())

// let date2=new Date('2022-05-04')
// console.log(date2)
// console.log("data",date2)


// let date3=new Date(2022,05,04)
// console.log(date3.toString())
// console.log("data",date3)


let date4=new Date(Date.now())
console.log(date4.toString())
console.log("data",date4.getFullYear())
//gte day hours minutes econds fullyear month milliseconds time
