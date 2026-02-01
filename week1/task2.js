
function f1(price)
{
    if(price<500)
    {
        return "budget course";
    }
    if(price >= 500 && price <= 1000)
    {
    return "standard course";
    }
    if(price > 1000)
    {
        return "premium course";
    }
}
label=f1(1299);
console.log(label)
let m=[1,2,3]
//m= stacks 1,2,3=heap
console.log(m[10],m[1])
