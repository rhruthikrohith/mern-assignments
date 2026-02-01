// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
    let ab=users.filter(a => a.active)
    let cd=ab.map(a => a.name )
    console.log(cd)
        console.log(ab)
    let de =users.filter(a =>{
        if(a.role == "admin")
        {
            console.log("true");
            return true;
        }}
    )   
    console.log(de) 
    console.log("kngkn")
    let fd=users.find(a=>a.id=1)
    console.log(fd)
    console.log("-----")
    let qw=[...users]
    let qwe=qw.map(a=>a.id===1 ? {...a,active: false} :a)
    let asdf=qwe.filter(a=>a.id == 1)
    console.log(asdf)
    console.log(users)