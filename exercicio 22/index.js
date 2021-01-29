 /*
Entre 0 -11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite
 */
 //if pode ser executado sozinho
 // sempre que utilizado a palavra else, preciso de um if antes
 // eu posso ter vários else ifs na checagem
 //só posso ter um else na checagem
 //pode fazer if e else sem else if
 const hora = 12;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if ( hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if(hora >= 18 && hora <=23){
    console.log('Boa noite');
}else{
    console.log('Olá');
}