let arr = ["Edstem","Tech"];

let out = arr.reduce (function (ac,el){
return ac+'_'+el
})

console.log (out);