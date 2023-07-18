const a = ["Edstem","technology","private","limited"];
let b = a.reduce (function(ac,e)
{
   return ac+'_'+e
})

console.log (b)