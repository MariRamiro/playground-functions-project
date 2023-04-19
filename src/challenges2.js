// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (arrayNumbers) =>{

for(let index=0; index < 11; index+=1){
  if(arrayNumbers.length < 11){
    'Array com tamanho incorreto.';
  }if(arrayNumbers[index]< 0){
    'Não é possível gerar um número de telefone com esses valores.';
  }if(arrayNumbers[index]> 9){
    'Não é possível gerar um número de telefone com esses valores.'; 
  }else{
   
  }
}


}



// Desafio 12 -  Crie a função triangleCheck


// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
