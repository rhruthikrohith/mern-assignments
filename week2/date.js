// // new date()
// new date1(yyyy,mm,dd)
// new date1(2343-09-09)->
// new date1(timestamp)
// date.now()=> time stamp
let date3=new Date(2022,5,4)
let date4=new Date(2022,6,6)
if(date3>date4){
    [date3,date4]=[date4,date3]
}

let years=date3.getFullYear()-date4.getFullYear();
console.log(years)
let months=date3.getMonth()-date4.getMonth();
console.log(months)
let days=date3.getDay()-date4.getDay();
console.log(days)
if (months < 0)
{
    years --;
    months=months + 12;
}
