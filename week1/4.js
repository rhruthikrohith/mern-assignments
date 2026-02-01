const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0;
m=Object.values(marks)
for (let c of m)
{
    sum+=c;
}
console.log(sum)
let avrg= sum / Object.keys(marks).length;
console.log(avrg)
