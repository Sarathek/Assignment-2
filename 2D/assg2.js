const a = [1,20,31,150,39,2,850,10];
let low = a [0];
let high = a[0];

for (let i=1;i< a.length;i++) {
if (low >a[i]) {
low = a[i];
}
if (high < a[i])
{
    high = a[i];
}
}

console.log ("The Lowest Score is:",low);
console.log ("The Highest Score is:",high);