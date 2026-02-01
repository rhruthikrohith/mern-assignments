const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// take only items which are in stock
let c = cart.filter(a => a.inStock == true);
console.log(c);
// make new array with only name and price
let cd = cart.map(a => [a.name, a.price]);
console.log(cd);
// add total price = price * quantity
let cds = cart.reduce((a, b) => a + b.price * b.quantity, 0);
console.log(cds);
// find the item which has name 'Mouse'
let ca = cart.find(a => a.name == 'Mouse');
console.log(ca);
// find the index number of item 'Keyboard'
let des = cart.findIndex(a => a.name == 'Keyboard');
console.log(des);