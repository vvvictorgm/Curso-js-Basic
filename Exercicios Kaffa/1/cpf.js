//the information on what criteria are needed to validate a CPF was taken from the IRS website
//at this point i read the exercicie again and i see it's not CPF, but CNPJ, let's start again...

let cpfTeste = '430.780.948-39';
let contador = 0;

function verificarCPF(cpf){
    //in this point we will remove all points and expressions in the cpf, if it has
    cpf = cpf.replace(/[^\d]+/g,''); 
    if(cpf == ''){
        return false;
    }   

//first: if the cpf has less than 11 characters, and see if they aren't 111, 222, 333 etc...
    if(cpf.length != 11 ||
    cpf == "00000000000" ||       
    cpf == "11111111111" ||         
    cpf == "22222222222" ||         
    cpf == "33333333333" ||         
    cpf == "44444444444" ||         
    cpf == "55555555555" ||         
    cpf == "66666666666" ||         
    cpf == "77777777777" ||         
    cpf == "88888888888" ||         
    cpf == "99999999999"){
        return false;
    }
    //now we have to valid the 1° digit



}