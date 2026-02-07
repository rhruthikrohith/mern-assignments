// Enrollment last date
let enrollmentDeadline = new Date("2026-01-20");

// Current date
let date1 = new Date();

// Compare current date with enrollment deadline
if (date1 < enrollmentDeadline) {
    console.log("enrollment open");
} else {
    console.log("enrollment closed");
}
