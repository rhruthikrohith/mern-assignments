const courses = ["javascript", "react", "node", "mongodb", "express"];
// take only course names which have more than 5 letters
let c = courses.filter(a => a.length > 5);
console.log(c);
// make all course names uppercase
let cd = courses.map(a => a.toUpperCase());
console.log(cd);
// find the course name which is 'react'
let de = courses.find(a => a === 'react');
console.log(de);
// find the index number of course 'node'
let des = courses.findIndex(a => a === 'node');
console.log(des);
