function random (min = 1000, max = 3000){
    const aleatorio = Math.random()*(max - min )+min;
    return Math.floor(aleatorio);
}
function f1() {
    setTimeout(function () {
        console.log('f1');
    }, random());
}
function f2() {
    setTimeout(function () {
        console.log('f2');
    }, random());
}
function f3() {
    setTimeout(function () {
        console.log('f3');
    }, random());
}

f1();
f2();
f3();
console.log('Ola Mundo');