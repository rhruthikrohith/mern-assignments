
function f1(islogged,isprofilecomplete){
if (islogged == false)
{
    return"please login";
}
if (islogged == true && isprofilecomplete== true)
{
    return "complete profile";
}
if (islogged == true && isprofilecomplete== false)
{
    return "welcome back";
}}
let msg=f1(true,false);
console.log(msg)
