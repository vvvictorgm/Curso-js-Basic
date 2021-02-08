const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    
    if (numero === 2){
        continue;
    }

    if(numero === 7 ){
        break;
    }
    console.log(numero);
}

let i = 0;

while (i<numeros.length){

    if (i === 2){
        i++;
        continue;
    }

    if(i === 7 ){
        i++;
        break;
    }
    console.log(i);
    i++;

}