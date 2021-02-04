function meuEscopo() {
    const exibicao = document.querySelector('#principal');
    const data = new Date();
    console.log(data.getMonth());
    const dataArrumada = desmembrarDate(data);

    function desmembrarDate(data) {

        const dia = data.getDate();
        const diaNumero = data.getDay();
        const mes = (data.getMonth()+1);
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minutos = data.getMinutes();
        let diaConvertido;
        switch (dia) {
            case 0:
                diaConvertido = 'Domingo';
                break;
            case 1:
                diaConvertido = 'Segunda-Feira';
                break;

            case 2:
                diaConvertido = 'Terça-Feira'; 
                break;

            case 3:
                diaConvertido = 'Quarta-Feira';
                 break;

            case 4:
                diaConvertido = 'Quinta-Feira'; 
                break;

            case 5:
                diaConvertido = 'Sexta-Feira'; 
                break;

            case 6:
                diaConvertido = 'Sabado';
                break;

        }
        const mesConvertido;
        
        console.log(`${dia}, ${diaNumero} de ${mes} de ${ano} <p>${hora}:${minutos}</p> `);

        return `${diaConvertido}, ${diaNumero} de ${mes} de ${ano} <p>${hora}:${minutos}</p> `;

    }
    exibicao.innerHTML = dataArrumada;
}
meuEscopo();