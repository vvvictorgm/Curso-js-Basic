// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number)
//retorne true se a imagem estiver no modo paisagem
const ePaisagem = (altura,largura) => altura > largura?false: true; 

console.log(ePaisagem(500,400));