function random (min = 1000, max = 3000){
    const aleatorio = Math.random()*(max - min )+min;
    return Math.floor(aleatorio);
}
function f1() {
    setTimeout(function (callback) {
        console.log('f1');
        if(callback)callback();
    }, random());
}
function f2() {
    setTimeout(function (callback) {
        console.log('f2');
        if(callback)callback();
    }, random());
}
function f3() {
    setTimeout(function (callback) {
        console.log('f3');
        if(callback)callback();
    }, random());
}

f1();
f2();
f3();
console.log('Ola Mundo');