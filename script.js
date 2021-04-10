"Use strict";

let num = 20;

function showFirstMassage(text) {
    console.log(text);
    num = 10;
}

showFirstMassage("Hello Bodya!");
console.log (num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
console.log(calc(22, 11));

function ret () {
    let num = 50;
    
    //

    return num;
}


const anotherNum = ret();
console.log(anotherNum);