// Desafio 1 - Crie a função compareTrue

const compareTrue = (val1, val2) => (val1 && val2) ? true : false;
 
// Desafio 2 - Crie a função splitSentence

const splitSentence = sentence => sentence.split(" ");

// Desafio 3 - Crie a função concatName

const concatName = array1 =>`${array1[array1.length-1]}, ${array1[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = numArray => {
  let higherNumber = Math.max.apply(null, numArray);
  let count = 0;
  for(let item of numArray) {
      if(item === higherNumber){
      count +=1
  };
};
return count;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * altura) / 2 ;
const calcRectangleArea = (base, height) => base * altura ;
const calcAllAreas = (base, height, form) => {
  if (form === `triangle`){
      return `O valor da área do triângulo é de:${calcTriangleArea(base,height)}`;
  }if (form === `rectangle`){
      return `O valor da área do retângulo é de:${calcRectangleArea(base,height)}`;
  }else{
      return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  };
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  if(Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)){
      return `cat2`;
  }else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
      return `cat1`;
  }else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
      return `os gatos trombam e o rato foge`;
  };
}

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = arrayNum => {
	let array2 = [ ];
  for(let index of arrayNum){ 
    if(index % 3 === 0 && index % 5 === 0){
      array2.push(`fizzBuzz`);
    }else if(index % 3 === 0){
      array2.push(`fizz`);
    }else if(index % 5 === 0){
      array2.push(`buzz`);
    }else{
      array2.push(`bug!`);
    };
  }return array2;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = string => string.replace('a',1).replace('e',2).replace('i',3).replace('o',4).replace('u',5);

const decode = string => string.replace(1,'a').replace(2,'e').replace(3,'i').replace(4,'o').replace(5,'u');

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let arrayList = array.sort();
  let objectList = { };

  for(let index = 0; index < arrayList.length; index +=1){
     objectList = { 
      'tech' : arrayList[index], 'name' : string};
return objectList;
  }
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
