//at this point i read the exercicie again and i see it's not CPF, but CNPJ, let's start again...
/*the rules for a CNPJ valdidation is:
CNPJ has 14 numbers and is divide by 3 parts:
1°- represents the number of subscription;
2°- represents a unique code for the Matrix or branch;
3°- represents for the check digits(CD);

We have to calculate the CD using the first 12 numbers, 

for the first one we have to multiple the numbers according of the table:
position = p;

p1 = 5  || p2 = 4|| p3 = 3 || p4  = 2 || p5  = 9 || p6  = 8 || p7  = 7 || p8 =6 || p9  = 5 || p10  = 4 || p11  = 3 || p12  = 2;

than we calculate the sum of the results.

if the result of the calculate we have to divide by 11 and use the rest of the division and use this to sub 11.
if the rest of the division is under 2 the first digit is 0;





*/

let cnpjTeste = '34.963.911/0001-36';
let contador = 0;

function verificarCNPJ(cnpj){
    //in this point we will remove all points and expressions in the cpf, if it has
    cnpj = cnpj.replace(/[^\d]+/g,''); 
    if(cnpj == ''){
        return false;
    }   

//first: if the cpf has less than 14 characters, and see if they aren't 111, 222, 333 etc...
    if(cnpj.length != 14 ||
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"){
        return false;
    }
    //now we have to valid the 1° digit



}