

 function soma(x,y){
if(typeof x !== 'number' || typeof y !== 'number'){
 throw('x e y precisam ser numeros');
}
  return x+y;    
 }

 console.log(soma(1,3));

/*
try{
    console.log(naoExisto);
}catch(e){
    console.log(e);
}



*/