let test=
{
    a:10,
    b:20,
    marks:[1,2,3],
    address:{
        city:"hyd"
}
,
getData:function(){

    console.log(this.marks[1])
},
avrg: function() {
        let sum = 0;
        for (let c of this.marks) {
            sum += c;
        }
        let average = sum / this.marks.length;
        console.log(average);
    }
}
console.log(test.marks)
console.log(test.address)
console.log(test.getData())
console.log(test.avrg())
// let {a,b}=test;
// console.log(a,b)    
