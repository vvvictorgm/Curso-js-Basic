// For in -> lê os indices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa ={
    nome:'Luiz', 
    sobrenome: 'Otavio',
    idade: 30
};

for (let chaves in pessoa){
    console.log(chaves);
}
for (let dados in pessoa){
    console.log(pessoa[dados]);
}