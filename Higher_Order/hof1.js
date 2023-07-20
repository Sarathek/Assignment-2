let arr = [2, 3, 5, 7, 9];

function square(el){
    return el*el
}

arr.forEach (function(el){
    console.log (square(el))
})