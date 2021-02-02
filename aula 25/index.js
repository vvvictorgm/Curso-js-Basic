/*const tresHoras = 60*60*3*1000; //3horas
const umDia = 60*60*24*1000;
const data = new Date(0 + tresHoras +umDia); //Timestampunix ou época unix Marco zero = 01/01/1970

const data = new Date(2020, 3, 20,15,14,15); //ano, mes, dia, hora, minuto, segundo, mile segundo.
*/
const data = new Date('2020-02-02 20:20:40');
console.log('Dia' , data.getDate());

console.log(data.toString());