let arr = ["assignment","technology","problem","media","upload"];

let out = arr.filter (function (el){
if (el[0]=='a' || el[el.length-1] == 'a')
return el})

console.log (out);