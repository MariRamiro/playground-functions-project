// Desafio 1 - Crie a função compareTruegit
const compareTrue = (val1, val2) => {
  if (val1 && val2) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence.
const splitSentence = (sentence) => sentence.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array1) => `${array1[array1.length - 1]}, ${array1[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = (numArray) => {
  let higherNumber = Math.max.apply(null, numArray);
  let count = 0;
  for (let item of numArray) {
    if (item === higherNumber) {
      count += 1;
    }
  }
  return count;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);
const calcAllAreas = (base, height, form) => {
let statament = ' ';
switch (form) {
  case 'triângulo':
    statament = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    break;
  case 'retângulo':
    statament = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
    break;
  default:
    statament = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return statament;
};

//

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz

const checkNumber = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    number = 'fizzBuzz';
  } else if (number % 3 === 0) {
    number = 'fizz';
  } else if (number % 5 === 0) {
    number = 'buzz';
  } else {
    number = 'bug!';
  }
  return number;
};
const fizzBuzz = (arrayNum) => {
  let arrayTwo = [];
  for (let item of arrayNum) {
    arrayTwo.push(checkNumber(item));
  }
  return arrayTwo;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => string.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4).replaceAll('u', 5);
const decode = (string) => string.replaceAll(1, 'a').replaceAll(2, 'e').replaceAll(3, 'i').replaceAll(4, 'o').replaceAll(5, 'u');

// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  let arrayList = [];
  for (item of array.sort()) {
    arrayList.push({ tech: item, name: string });
  }
  return arrayList;
};

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

