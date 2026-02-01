function test1(a){
    console.log(a())
}//call back func send as arg to other function
test1(function()
{
    return 123;

})
function hello1(){
    return "djksnd";
}
hello1()