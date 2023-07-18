const a = [2,3,4,5,6,7];

function avg (a){
let sum = 0;
for(let i=0;i<a.length;i++){
sum = sum+a[i];
}
return sum/a.length;
}

console.log (avg(a));