

for(let i=1000; i > 600; i -= 10){
    console.log(`Linha ${i}`);

}

for (let i = 0; i<=10;i++){
    const par = i % 2 === 0;
    console.log(i,par);
}

for(let i = 0; i<=10; i++){
    const parOuImpar = i%2===0 ? 'par' : 'Impar';
    console.log(i, parOuImpar);
}