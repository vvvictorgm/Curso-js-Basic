const retornaHora = (data) => {

    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    });
} 

const hora = retornaHora();

console.log(hora);

/*try{
    //É executado quando não há erros
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e deu erro');
    console.log('Fechei o arquivo');
}catch(e){
    // É executado quando há erros
    console.log('tratei um erro');
}finally{
    //é sempre executado
    console.log('sou sempre executado');
}*/


