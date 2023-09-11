//Higher order function(function II)

function add(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}

//callback function
function operation(a,b,fn){
    return fn(a,b)
}
console.log(operation(3,8,add));//11
console.log(operation(4,5,multiplication))//20