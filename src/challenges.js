// Desafio 1 - Crie a função compareTrue
const valueA = true;
const valueB = true;
const valueC = false;
const valueD = false;

const compareTrue = (val1, val2) => (val1 && val2 === true)? true : false;

 console.log(compareTrue(valueA,valueC));
 console.log(compareTrue(valueC,valueD));
 console.log(compareTrue(valueA,valueB));
 
// Desafio 2 - Crie a função splitSentence

const splitSentence = string => string.split(" ");

console.log(splitSentence(`go Trybe`));
console.log(splitSentence(`vamo que vamo`));
console.log(splitSentence(`foguete`));

// Desafio 3 - Crie a função concatName

function concatName(array1){
    for(index in array1){
        const a = array1[index.length-1];
        const b = array1[0];
        return ` ${a} , ${b}`
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));



// Desafio 4 - Crie a função footballPoints

// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

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
