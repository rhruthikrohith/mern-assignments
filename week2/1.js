// //object{
// let person={
// //}
// //{properties
// pid:100,cid:200
// //}
// }
// //creatung 200 persons object 
// //create person datatype
// class Person1{
//     //properties
//     //methods
//     pid;
//     cid;
//     static clg;
//     static{
//         Person1.clg='fjjfj';
//     }
//     //privste property-#
//     //method
//     constructor(pid,cid,clg)
//     {
//         this.pid=pid;
//                 this.cid=cid;
//                  this.clg=clg; 

//     }
//     moder(){
//         console.log(this.pid,this.cid,this.clg)

//     }

// }
// //cretae no of obj of person class
// let p3=new Person1(100,200,'fgxsv')
// let p4=new Person1(200,300.'sfsdf')

// p3.moder()

// p4.static()
// //function mod(){}
// //mod()
class p1{
    title;
    author;
    pages;
    isAvailable ='true';
    borrow(){
        this.isAvailable='false';
    }
     returnBook(){
        this.isAvailable='true';
     } 
    getInfo(){
        console.log("The Hobbit by J.R.R. Tolkien (310 pages)");
    }
     isLongBook(){
        if (this.pages > 300)
            {
            return 'true';
        }
        else{
            return 'false';
        }
     }
}
let p4=new p1('a','b',20)
p4.borrow();
console.log(p4.isAvailable)
p4.returnBook()
console.log(p4.isAvailable)
p4.getInfo()
p4.isLongBook()
console.log(p4.isLongBook)
