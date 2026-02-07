const marks = [78, 92, 35, 88, 40, 67];
// take only marks which are 40 or more
let c = marks.filter(a => a >= 40);
console.log(c);
// add 5 marks to each value
let cd = marks.map(a => a + 5);
console.log(cd);
// find the biggest mark
let cs = marks.reduce((a, b) => a > b ? a : b);
console.log(cs);
// find the first mark which is less than 40
let q = marks.find(a => a < 40);
console.log(q);
// find the index number of mark 92
let des = marks.findIndex(a => a === 92);
console.log(des);


