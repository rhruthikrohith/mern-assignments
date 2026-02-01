// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
 let ab=cart.map(a=>{
     let v=courses.find(v=>v.id );
     return{
     courseId: a.courseId,
     title: v.title,
     price: v.price,
     qty: a.qty,
     published:v.published
 };
 });
console.log(ab)
 let cd=courses.reduce((a,b)=>a+b.price,0);
 console.log(cd)
 let re=[...cart]
 console.log(re)
let rs=re.map(a=>({...a,qty:a.qty+1}))
console.log(rs)
delete ab[0];
console.log(ab)
let qq = ab.filter(item => item && item.price > 0);
console.log(qq);