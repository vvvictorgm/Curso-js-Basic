const div = document.querySelector('.divPrincipal');
const elementos =[
    {tag: 'p',texto:'Frase1'},
    {tag: 'div',texto:'Frase2'},
    {tag: 'footer',texto:'Frase3'},
    {tag: 'section',texto:'Frase4'},
];
//até que o elemento do array chegue no fim, iremos execultar o loop
for(i = 0; i <= elementos.length; i++){
    //uma variavel para capturar a tag
    let tag = elementos[i].tag;
    //uma variavel para capturar o texto
    let texto = elementos[i].texto;
    //para cada vez que rodarmos o loop, iremos inserir a tag e o texto dentro do escopo
    div.innerHTML += `<${tag}> ${texto}</${tag}>`;
}

