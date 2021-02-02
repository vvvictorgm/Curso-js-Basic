// (condicao) ? 'Valor verdadeiro' : 'Valo para falso' :

const pontuacaoUsuario = 9929;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'verde';
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao);
/*if(pontuacaoUsuario >=1000){
    console.log('usuario VIP');
}else{
    console.log('Usuario normal');
}*/

