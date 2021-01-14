
/*
translate by Victor Augusto Nithack Frazatto.
the rules for a CNPJ valdidation is:
CNPJ has 14 numbers and is divide by 3 parts:
1°- represents the number of subscription;
2°- represents a unique code for the Matrix or branch;
3°- represents for the check digits(CD);

We have to calculate the CD using the first 12 numbers, 

*for the first one we have to multiple the numbers according of the table:
*position = p;
*
*p1 = 5  || p2 = 4|| p3 = 3 || p4  = 2 || p5  = 9 || p6  = 8 || p7  = 7 || p8 = 6 || p9  = 5 || p10  = 4 || p11  = 3 || p12  = 2;
*
*than we calculate the sum of the results.
*
*if the result of the calculate we have to divide by 11 and use the rest of the division and use this to sub 11.
*if the rest of the division is under 2 the first digit is 0;

*For the secound one, we have to use the first CD, and a new table:
*
*p1 = 6  || p2 = 5|| p3 = 4 || p4  = 3 || p5  = 2 || p6  = 9 || p7  = 8 || p8 = 7 || p9  = 6 || p10  = 5 || p11  = 4 || p12  = 3; || CD = 2
*
*than, we'll do the same as the last time.
*/

let cnpjTeste = '11.444.777/0001-61';
function verificarCNPJ(cnpj){
    let resto;
    let tabela;
    let calculo;
    let numerosSeparados = [];
    
    /*in this point we will remove all points and expressions in the cpf, if it has, 
    we using /[^\d], it's a regular expressionon to match anything but number, 'g' if for global, so we replace the 'other things's for nothing,
    we  transform, for exemple '34.963.911/0001-36' in 34963911000136
    */
    cnpj = cnpj.replace(/[^\d]+/g,''); 
    if(cnpj == ''){
        return false;
    }   

    let cnpjSemDigitos = cnpj.length - 2;
    let CD = cnpj.substring(cnpjSemDigitos);
    

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
    //the first table start the * at 5, so we define it
    tabela = 5;
    //and now we start 'calculo' to zero
    calculo = 0;
    //first thing is create a Array for take every number separated
     for (i = 0; i<cnpjSemDigitos; i++) {
            numerosSeparados[i] = Number(cnpj[i]*tabela);
            /*so than we multiple this array number by the rules of the table 
            looking at the table we can see three things, first, it start at the 5, decrement  one by one for each number, 
            and if the number is bellow 2 transformt it in 9 and continuo the decrement until finish the loop.
            */
            tabela -= 1;
            if(tabela <2){
                tabela = 9;
            }
            //for each result we add to calculo for make the division
            calculo += numerosSeparados[i];
    }
    //now we do the calculus to take the rest of division
    resto = calculo % 11;

    //for the rules, if the rest of the divisions if bellow 2, is 0, and if is above, than we have to sub rest to 11
    if(resto < 2)
    {
    resto = 0;
    }else{
        resto = 11-resto1;
    }
    //finally, if the rest is diferent, so, it's invalid
    if(resto1 != CD.charAt(0)){
        return false;
    }

    //now we need to check the 2°digit
    //we have to change the variable tabale to 6,
    tabela = 6;
    //and the calcula return to 0
    calculo = 0;
    //in this for we have one diferent thing, we have to add the digit to "numerosSeparados"
    for (i = 0; i<cnpjSemDigitos+1; i++) {
        numerosSeparados[i] = Number(cnpj[i]*tabela);
        //than we multiple this array number by the table
        tabela -= 1;
        if(tabela <2){
            tabela = 9;
        }
        //and than just add to calculo for make the division
        calculo += numerosSeparados[i];
}



    return true;
}

if(verificarCNPJ(cnpjTeste)){
    console.log("true");
}else{
    console.log("false");
}

