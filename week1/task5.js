function findSkill(skills, skillName){
    for(let i of skills){
        if(i==skillName){
            return skills.indexOf(i);
        }
    }
    return "skill not found";
}
console.log(findSkill(['html','css','js','react'],'js'));