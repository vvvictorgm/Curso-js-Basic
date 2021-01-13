let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
/*correto
let varSobra = varA;

varA = varB;
varB = varC;
varC = varSobra;
*/

/*professor*/
[varA, varB, varC] = [varB, varC, varA];
console.log(varA,varB,varC);






