let a = 10;
console.log(a);

try {
    // This variable is not defined, so it will throw an error
    console.log(x);
} catch (error) {
    // Print error details
    console.log(error.name);
    console.log(error.message);
}

let b = 0;
console.log(b);
