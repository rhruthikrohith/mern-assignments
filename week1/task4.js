//write a function which recevies marks array as arguemnt and return as small element 
function ab(marks){
  let cd = marks[0]
  for (let c of marks) {
    if (c < cd) {
      cd = c
    }
  }

  return cd
}
console.log(ab([1, 0, 2, 3, 4]))
