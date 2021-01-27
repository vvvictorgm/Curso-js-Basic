/*function criaPessoa(nome,sobrenome,idade){
    return {nome, sobrenome,idade,};
    }

    const pessoa1 = criaPessoa('Pedro', 'Ribeiro', 13);

    console.log(pessoa1.nome,pessoa1.idade,pessoa1.sobrenome);

    */
   const pessoa1 = {
       nome:'Victor',
       sobrenome: 'Augusto',
       idade: 28,

       fala(){
           console.log(`${this.nome} ${this.sobrenome} está falando um oi`);
       },
   }

   pessoa1.fala();