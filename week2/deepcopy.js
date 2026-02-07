// Original order object
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// Deep copy using structuredClone
let odd = structuredClone(order);

// Modify copied object
odd.customer.address.city = "vijaywada";
odd.items[0].price = 90;

// Original object remains unchanged
console.log(order);
console.log(odd);
