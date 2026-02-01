const temperatures = [32, 35, 28, 40, 38, 30, 42];
// take only temperatures which are more than 35
let s = temperatures.filter(a => a > 35);
console.log(s);
// convert each temperature from Celsius to Fahrenheit
// F = (C × 1.8) + 32
let c = temperatures.map(a => (a * 9/5) + 32);
console.log(c);
// add all temperatures together
let d = temperatures.reduce((a, b) => a + b);
console.log(d / temperatures.length); // find average temperature
// find the first temperature which is more than 40
let de = temperatures.find(a => a > 40);
console.log(de);
// find the index number of temperature 28
let des = temperatures.findIndex(a => a === 28);
console.log(des);