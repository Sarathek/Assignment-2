const a = [[1,2,3],[4,5,6],[7,8,9]];

let b = '';
for (let i=0; i<a.length; i++){
    b += a[i][i] + ' ';
}
console.log (b);