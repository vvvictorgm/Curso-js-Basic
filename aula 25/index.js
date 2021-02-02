

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth()+1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);




/*const tresHoras = 60*60*3*1000; //3horas
const umDia = 60*60*24*1000;
const data = new Date(0 + tresHoras +umDia); //Timestampunix ou época unix Marco zero = 01/01/1970

const data = new Date(2020, 3, 20,15,14,15); //ano, mes, dia, hora, minuto, segundo, mile segundo.

const data = new Date(1612309071683);
console.log('Dia' , data.getDate());
console.log('Mês' , data.getMonth()+1); // mes começa do zero
console.log('Ano' , data.getFullYear());
console.log('Hora' , data.getHours());
console.log('Minuto' , data.getMinutes());
console.log('Segundo' , data.getSeconds());
console.log('Mile segundo' , data.getMilliseconds());
console.log('Dia semana' , data.getDay()); // 0 - domingo 6 -sabado

console.log(data.toString());
*/
