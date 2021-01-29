 /*
Entre 0 -11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite
 */
 
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