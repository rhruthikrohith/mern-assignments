 let enrollmentDeadline = new Date("2026-01-20");
 let date1= new Date();
if (date1.getDate() < enrollmentDeadline.getDate())
{
    console.log("enrollment open")
}
else{
    console.log("enrollment closed")
}
