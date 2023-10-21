/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  let arrayOfarrays = [];
  for ( const clave in objeto){
   arrayOfarrays.push([clave, objeto[clave]]);
  }
return arrayOfarrays;
}

console.log(deObjetoAarray({D: 1, B: 2, C: 3}))

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let object = {};
   let newstr = string.split("");
   newstr.forEach(char => {
      if (object.hasOwnProperty(char)){
         object[char]+=1;
      }else{
         object[char]=1;
      }
   });
return object;
}

console.log(numberOfCharacters( "adsjfdsfsfjsdjfhacabcsbajda"))














function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
let string1 = "";
let string2 = "";

for (let i = 0 ; i < string.length; i++){
   if(string[i]===string[i].toUpperCase()){
      string1 += string[i];
   }else{
      string2 += string[i];
   }
}
return string1 + string2;
}




















function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
 let phrase = frase.split(" ");

 for ( let i = 0 ; i < phrase.length; i++){
   phrase[i] = phrase[i].split("").reverse().join("");
 }
   const resultado = phrase.join(" ");
return resultado;
}

console.log(asAmirror("hello my name"));






function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let reversed = numero.toString().split("").reverse( ).join("");

   return numero.toString() === reversed ? "Es capicua" : "No es capicua"
   
 }
 console.log(capicua(123))





function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr = string.split("");
   let abc = ["a","b","c"];
  let filtered = arr.filter((letter)=>{
   return !abc.includes(letter);
  });
  return filtered.join("");
}



function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=> a.length - b.length);
}
console.log(sortArray(["You", "are", "beautiful", "looking"]))



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let set = new Set(array1)
   let newArray = [];

   for(let i = 0 ; i < array2.length; i++){
      if(set.has(array2[i])){
         newArray.push(array2[i])
      }
   }
   return newArray
}
   console.log((buscoInterseccion([1, 2, 3], [1, 5, 8, 3])))



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
