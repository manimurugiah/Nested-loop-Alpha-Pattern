let a=5;
let b="";
for(let i=1;i<=a;i++){
    for(let j=0;j<i;j++){
        b+=String.fromCharCode(j+65)
    }
    b+="<br>"
}
document.write(b)