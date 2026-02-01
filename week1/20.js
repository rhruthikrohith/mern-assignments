let totalAmount = 0;

totalAmount += 500;
totalAmount += 1200;
totalAmount -= 200;
let gst = totalAmount * 0.18;
totalAmount += gst;
console.log("Final bill amount: ₹" + totalAmount);
