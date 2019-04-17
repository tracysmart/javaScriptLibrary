let instructor ='pAuL';
let capName;

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName = instructor[n].toLowerCase();
    }
}
    console.log(capName);
