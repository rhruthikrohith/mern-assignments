const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let ab=employees.filter(a=>a.department=="IT")
console.log(ab)
let bc=employees.map(a=>(a.salary)+(a.salary*(10/100)))
console.log("net=",bc)
let cd=employees.reduce((a,b)=> a + b.salary , 0)
console.log(cd)
let re=employees.find(a=> a.salary == 30000 )
console.log(re)
let ds=employees.findIndex(a=> a.name=='Neha')
console.log(ds)
