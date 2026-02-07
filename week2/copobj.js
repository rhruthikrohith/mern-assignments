// Original object
let obj = {
    a: 10,
    b: 20,
    Clg: 'anurag',
    clgadress: {
        anurg: "dlfj"
    }
};

// Shallow copy using spread operator
let copyobj = { ...obj };

// Modify values
obj.a = 30;
obj.clgadress.anurg = "aaaaa";

console.log(obj);
console.log(copyobj);

// Primitives change independently
// Nested objects share reference in shallow copy

