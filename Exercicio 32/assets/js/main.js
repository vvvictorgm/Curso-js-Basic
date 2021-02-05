const div = document.querySelector('.divPrincipal');
const elementos =[
    {tag: 'p',texto:'Frase1'},
    {tag: 'div',texto:'Frase2'},
    {tag: 'footer',texto:'Frase3'},
    {tag: 'section',texto:'Frase4'},
];
for(i = 0; i <= elementos.length; i++){
    let tag = elementos[i].tag;
    let texto = elementos[i].texto;
    console.log(tag,texto);
    div.innerHTML += `<${tag}> ${texto}</${tag}>`;
}

