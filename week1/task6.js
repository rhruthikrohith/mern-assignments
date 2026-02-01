const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0;
for (let v in marks)
{
  sum+=marks[v];
}
console.log("Total marks:",sum);
