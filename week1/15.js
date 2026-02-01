const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let c = students.filter(a => a.marks >= 40);
console.log(c);
let cd = students.map(a => {
    if(a.marks >= 90)
    {
        return 'A';
    }
    else if(a.marks >= 75)
    {
       return 'B'; 
    }
    else if(a.marks >= 60)
    {
       return 'C'; 
    }
    else
    {
    return 'D'
    }
})
console.log(cd)
let m1 = students.reduce((a, b) => a + b.marks, 0)
console.log(m1)
let m2 = students.find(a => a.marks == 92 )
console.log(m2)
let m3=students.findIndex(a => a.name == 'Kiran')
console.log(m3)
