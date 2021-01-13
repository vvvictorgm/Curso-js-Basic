//the information on what criteria are needed to validate a CPF was taken from the IRS website

let cpf = 10;
console.log(cpf.length != 11)

function verificarCPF(cpf){
//first: we will try if the cpf has less than 11 characters, and see if they aren't 111, 222, 333 etc...
    if(cpf.length != 11 ){
        //alert('cpf invalido');
    }

}