// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Get only published courses
let s = courses.filter(a => a.published);
console.log(s);

// Sort courses by price (high to low)
let d = courses.sort((a, b) => b.price - a.price);
console.log(d);

console.log("djfn");

// Extract only title and price
let result = courses.map(a => ({
  title: a.title,
  price: a.price
}));
console.log(result);

// Filter published courses again
let we = courses.filter(a => a.published == true);
console.log(we);

// Calculate total price of published courses
let rd = we.reduce((a, b) => a + b.price, 0);
console.log(rd);

// New course array
const asd = [
  { id: 2103, title: "adNorde", price: 12939, published: true }
];

// Merge courses with new array
let qw = [...courses, asd];
console.log(qw);

console.log("adn");

// Original courses array
console.log(courses);

