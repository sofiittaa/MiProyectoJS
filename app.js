/* console.log("SI puedo ver esto esta bien linkeado mi html con JS")
/* EN LAS VARIABLES LET SE PUEDE DECLAR<R SIN ASIGNAR VALOR */

/* declarar */
edad = 30 /* asignar valor */


/* 2x1 declarar y asignar valor en la misma linea */
let peso = 75

console.log(edad) /* llamo a la variable edad */
alert(edad)/* tambien llamo a la variable */

console.log(edad + 4) /*  esto d 34,UTILICE EL VALOR DE LA VARIABLE */

/* EN LAS CONSTANTES SIEMPRE SE ASIGNA Y DECLARA A LA VCEZ  */

const altura = 175

/* tipos de datos 1010101010110100001111

tipos de datos basicos PRIMITIVOS
-numerico- number()
-int- numeros enteros sin coma
-float- numeros decimales con coma
-string- cadena de caracteres
Hola mundo! - 11 caracteres 1 espacio en blanco un ! y 9 letras
Caracteres
-letras mayus
-letras minus
-esapcios en blamco
-numeros-simbolos !?.-/*><=
-Boolean true/false
*/

/* ejemplo de variables con tipos de datos numericos
*/

let anio = 2025 /* int numero sin coma */
let precio = 20.50/* float numero con coma */
/* ejemplo string cadena de caracteres */
let saludo = 'hola mundo!'
let curso = 'introduccion a Java Script'
let institucion = 'coderHouse'

let nombre = prompt("Ingrese nombre")
let mensaje = prompt("Ingrese bienvenida")

/* OPERADOR +

SI ESTA ENTRE NUMEROS SUMA 
SI NO ESTA ENTRE NUMEROS CONCATENA
*/

alert(mensaje + " " + nombre + " " + "al curso de " + curso + " " + "en" + " " + institucion)

/* PLANTILLAS LITERALES
A PARTIR DE UN UNICO STRING , VAMOS INSERTANDO VARIABLES DENTRO
BACKTICKS OBLIGATORIOS SINO NO FUNCIOMNA
*/
// con prompt podras ingresar datos desde "consola"
let edad = parseInt(prompt("Ingrese edad"))

console.log(edad)
console.log(typeof edad)
console.log(edad + 4)


const titulo = document.getElementById("titulo")