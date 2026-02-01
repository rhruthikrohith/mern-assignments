const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let ab=transactions.filter(a => a.type == 'credit')
console.log(ab)
let abc=transactions.map(a => a.amount )
console.log(abc)
let asd=transactions.reduce((a,b) => a+b.amount,0)
console.log(asd)
let abcd=transactions.find(a => a.type == "debit")
console.log(abcd)
 let abcde=transactions.findIndex(a => a.amount == 10000)
console.log(abcde)   
