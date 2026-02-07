const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Shallow copy using spread operator
let copyobj = { ...user };

// Modify copied object
copyobj.name = "rrr";
copyobj.preferences.theme = "white";

// Add new properties
user.log = "jfn";
copyobj.log = "djdj";

console.log(copyobj);
console.log(user);

