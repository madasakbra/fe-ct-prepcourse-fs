/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento([1,2,3]));


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}
console.log(devolverUltimoElemento([1,2,3]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   for ( let i = 0 ; i <= array.length; i++){
      return array.length;
   }
}
console.log(obtenerLargoDelArray([2,3,4,4,5,6,23]))


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código
   let newArr = [];
  
   for (let i=0;i<array.length;i++){
     newArr.push(array[i] + 1)
   }
   return newArr;
} 

console.log(incrementarPorUno([2,3,4]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}
console.log(agregarItemAlFinalDelArray([2,3,4],"w"))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

console.log(agregarItemAlComienzoDelArray([2,3,4,5],"hello"))


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
 
   return palabras.join(" ")
}
console.log(dePalabrasAFrase(["Hello","world!"]))


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if  ( array.includes(elemento)){return true}
   else {return false}
  }
    console.log(arrayContiene([2,3,4,5],8))


    function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let result = 0;
    for (let i=0; i < arrayOfNums.length; i++){
      result = result + arrayOfNums[i];
   }
   return result;
}
  
console.log(agregarNumeros([2,3,4,5]))

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
 var total=0;
 for (let i = 0; i < resultadosTest.length; i++) {
   total += resultadosTest[i];
var x = total / resultadosTest.length;
 }
 return x;
}

console.log(promedioResultadosTest([2,3,4,5,6]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
console.log(numeroMasGrande([2,3,4,5,6,7,]))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
 let producto = 1;
 if(arguments.length === 0){
   return 0;
 }else if (arguments.length === 1){
   return arguments[0];
 }
 else{
   for (let i = 0; i < arguments.length; i++){
      producto *= arguments[i]
 }
 return producto
}
}
console.log(multiplicarArgumentos(2,3))


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  let biggerThan18 = 0;
   for (let i = 0; i < array.length; i++){
if(array[i] > 18){
   biggerThan18++;
}
}
return biggerThan18;
}


console.log(cuentoElementos([2,3,4,34,2,1,19]))











function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
   return "Es fin de semana";
  } else {
   return "Es dia laboral";
  }
}

console.log(diaDeLaSemana(3))


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero = num.toString()
   if(numero.charAt(0) === "9"){
      return true;
   }else{
      return false
   }
}
console.log(empiezaConNueve(7))


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var first = array[0];
   for ( let i =1; i < array.length; i++){
      if (array[i] === first ){
         return true
      }else{
         return false
      }
   }
}
console.log(todosIguales([2,2,2,2]))
 

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
var meses = [];
    
if(array.includes("Marzo") && array.includes("Enero") && array.includes("Noviembre") ){
  meses.push("Marzo","Noviembre","Enero");
  return meses
} 
else if (meses.length<3){
  return "No se encontraron los meses pedidos"
}
}
console.log(mesesDelAño(["Marzo","Agosto","Septiembre","Enero","Noviembre"]))





function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
 let tabla = [];

 for (let i = 0; i <= 10; i++){
   tabla.push(6  *  i )
 }
 return tabla
}
console.log(tablaDelSeis())



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let result = [];

   for ( let i = 0; i < array.length; i++){
      if (array[i] > 100 ){
         result.push(array[i])
      
      }
   }
   return result
}
console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/







function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var newArr = [];

   for (let i=1; i<=10; i++){
      num += 2;
    newArr.push(num);

     if (num === i){
   
      return "Se interrumpió la ejecución"
     }
     }
     return newArr;
   }

console.log(breakStatement(8))







function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var result = [];
   
   for(let i=1; i<=10; i++){
    if ( i === 5){
      continue;
    }
    num += 2;
    result.push(num)
   }
   return result
}



console.log(continueStatement(10))












                   



















/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
