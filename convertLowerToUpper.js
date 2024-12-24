let name="banty kumar";
let upperName="";

for (let i=0;i<name.length;i++) {
    upperName+=name[i].toUpperCase();
}

console.log(upperName); // BANTY KUMAR


function convertUpperNameToLower(name){
    let lowerName="";
    for (let i=0;i<name.length;i++) {
        lowerName+=name[i].toLowerCase();
    
}
return lowerName;
}

console.log(convertUpperNameToLower(upperName)); // banty kumar