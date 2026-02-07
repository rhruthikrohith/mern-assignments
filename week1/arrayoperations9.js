
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];
const updated=users.map(a => {
    if (a.name === 'Ravi')
    {
        return { ... a,active : false}
    }
    return a;
})
console.log(updated)
