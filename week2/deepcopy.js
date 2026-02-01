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
                let odd=structuredClone(order)
                odd.customer.address.city="vijaywada"
                odd.items[0].price=90;
                console.log(order)
                console.log(odd)