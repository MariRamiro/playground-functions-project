// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (arrayNumbers) =>{
  if(arrayNumbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for(let index=0; index < 11; index+=1){
  if(arrayNumbers[index]< 0){
    return 'não é possível gerar um número de telefone com esses valores';
  }if(arrayNumbers[index]> 9){
    return 'não é possível gerar um número de telefone com esses valores'; 
  }
  let cont = 0;
  for(number = 0; number < 11; number +=1){
    if(arrayNumbers[index] === arrayNumbers[number]){
      cont += 1;
    }
    if(cont >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
}
return `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
}

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) =>{
  let difAB = Math.abs(lineA - lineB);
  let difBC = Math.abs(lineB - lineC);
  let difAC = Math.abs(lineA - lineC);
  if (lineA >= difBC && lineB >= difAC && lineC >= difAB){
    return true
  } return false
}

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
