
function meuEscopo() {
    const exibicao = document.querySelector('#principal h1');
    const data = new Date();
    console.log(data.getMonth());
    const dataArrumada = desmembrarDate(data);

    function desmembrarDate(data) {

        const dia = data.getDate();
        const diaNumero = data.getDay();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const minutos = zeroAEsquerda(data.getMinutes());

        let diaArrumado = arrumarDia(dia);
        let mesArrumado = arrumarMes(mes);



        return `${diaArrumado}, ${diaNumero} de ${mesArrumado} de ${ano} <p>${hora}:${minutos}</p> `;

    }
    function arrumarDia(dia) {
        let diaConvertido;
        switch (dia) {
            case 0:
                diaConvertido = 'Domingo';
                return diaConvertido;
            case 1:
                diaConvertido = 'Segunda-Feira';
                return diaConvertido;

            case 2:
                diaConvertido = 'Terça-Feira';
                return diaConvertido;

            case 3:
                diaConvertido = 'Quarta-Feira';
                return diaConvertido;

            case 4:
                diaConvertido = 'Quinta-Feira';
                return diaConvertido;

            case 5:
                diaConvertido = 'Sexta-Feira';
                return diaConvertido;

            case 6:
                diaConvertido = 'Sabado';
                return diaConvertido;

        }

    }
    
    function zeroAEsquerda(num){
        return num >=10 ? num : `0${num}`;

    }

    function arrumarMes(mes) {
        let mesConvertido;
        mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        switch (mes) {
            case 0:
                mesConvertido = mesesDoAno[0];
                return mesConvertido;
            case 1:
                mesConvertido = mesesDoAno[1];
                return mesConvertido;

            case 2:
                mesConvertido = mesesDoAno[2];
                return mesConvertido;

            case 3:
                mesConvertido = mesesDoAno[3];
                return mesConvertido;

            case 4:
                mesConvertido = mesesDoAno[4];
                return mesConvertido;

            case 5:
                mesConvertido = mesesDoAno[5];
                return mesConvertido;

            case 6:
                mesConvertido = mesesDoAno[6];
                return mesConvertido;
            case 7:
                mesConvertido = mesesDoAno[7];
                return mesConvertido;
            case 8:
                mesConvertido = mesesDoAno[8];
                return mesConvertido;
            case 9:
                mesConvertido = mesesDoAno[9];
                return mesConvertido;
            case 10:
                mesConvertido = mesesDoAno[10];
                return mesConvertido;
            case 11:
                mesConvertido = mesesDoAno[11];
                return mesConvertido;


        }
    }
    exibicao.innerHTML = dataArrumada;
}
meuEscopo();