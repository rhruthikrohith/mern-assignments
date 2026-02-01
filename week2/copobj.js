let obj=
{
    a:10,
    b:20,
    Clg:'anurag',
    clgadress:{
        anurg:"dlfj"

    }
}
let copyobj={...obj}
obj.a=1234;
obj.a=30;
obj.clgadress.anurg="aaaaa"
console.log(obj)
console.log(copyobj)
//primitives cna be changed modified
//non cant be changed or modified
