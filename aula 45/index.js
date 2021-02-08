try{
    //É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e deu erro');
    console.log('Fechei o arquivo');
}catch(e){
    // É executado quando há erros
    console.log('tratei um erro');
}finally{
    //é sempre executado
    console.log('sou sempre executado');
}