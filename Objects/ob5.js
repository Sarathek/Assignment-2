const e='den';
const f='end';

let a=e.split("").sort().join("");
let b=f.split("").sort().join("");
let c={};
let d={};
let count=0;

for(let i=0;i<a.length;i++)
{
count=0;
for(let j=0;j<a.length;j++)
{ 
if(a[i]==a[j]) 
count++;
}
c[a[i]]=count;
}
console.log(c)
for(let i=0;i<b.length;i++)
{
count=0;
for(let j=0;j<b.length;j++)
{ 
if(b[i]==b[j]) 
count++;
}
d[b[i]]=count;
}

console.log (d);
console.log (JSON.stringify(c) === JSON.stringify(d));