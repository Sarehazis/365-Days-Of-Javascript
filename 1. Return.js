function add(a,b){
    var total;
    total = a + b;
    return total;
}

function divide(a,b){
    var div;
    div = a / b;
    return div
}

function multiply(a,b){
    var multi;
    multi = a * b;
    return multi;
}

function mod(a,b){
    var modul;
    modul = a % b;
    return modul;
}
   
function exponent(a,b){
    var expo;
    expo = Math.pow(a,b);

    return expo
}
    
function subt(a,b){
    var sub;
    sub = a - b;
    return sub;
}

    console.log(add(1,2))
    console.log(multiply(1,2))
    console.log(divide(2,1))
    console.log(mod(1,2))
    console.log(exponent(1,2))
    console.log(subt(1,2))