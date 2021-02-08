function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pT-BR', {
        hour12:false
    });

}
function funcaoDoIntervalo(){
    console.log(mostrarHora());
}
setInterval();
