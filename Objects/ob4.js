const a =[10,20,30,10,42,-2];
let b = {};
let count=0;

for (let i=0;i<a.length;i++){
count=0;
for (let j=0;j<a.length;j++){ 
if (a[i]==a[j]) 
count++;
}
b[a[i]] = count;
if (count==1)
console.log (a[i])
}

console.log (b)