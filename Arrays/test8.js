const a = 'This is a test statement.';
let c = 0;

for (let i=0;i<a.length;i++){
if (a[i]==' '||a[i]=='.')
c++;    
}

console.log ('Total words:',c);