function toLow(a){
for(let i=0;i<27;i++){
if(a==='A')
return 'a';
else if(a==='B')
return 'b';
else if(a==='C')
return 'c';
else
return 0
}
}

let a ='c'
console.log (toLow(a))