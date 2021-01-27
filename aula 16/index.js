const alunos = ['Luiz', 'Maria', 'João'];

delete alunos[1]; //remove o elemento
const removecomeco = alunos.shift(); //remove o primeiro
const removido = alunos.pop();//remove o ultimo elemento
alunos.unshift('Luiza'); //adiciona no começo
/*alunos[0] = 'Eduardo'; //altera
alunos[3] = 'Luiza'; //adiciona no indice
alunos[alunos.length] = 'Pedro'; //adiciona no fim
alunos[alunos.length] = 'Ronaldo';
alunos.push('Victor'); //também adiciona no fim


*/
console.log(removecomeco);
console.log(removido);
console.log(alunos);

