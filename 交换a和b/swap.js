console.log(bubble([4, 2, 1, 7, 12]))
function swap1(a, b) {
    let c = a;
    a = b;
    b = c;
    return [a, b];
}
function swap2(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
function swap3(a, b) {
     return [b, a] ;
}

function swap4(a,b){
    a=[b,b=a];
    a=a[0];
    b=b[0];
    return [a,b];
}