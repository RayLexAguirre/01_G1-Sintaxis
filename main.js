/*
Fundamentos de Programación
Ejercicio De demostración
Ramón Aguirre
*/
console.log('Hola, Mundo!');

//Esta es la funcion saludar 
function saludar() {
    console.log('hola mundo!');
}

//Esta funcion sirve para saludar a una persona 
function SaludarPersona(nombre) {
    console.log('hola, ', nombre);
}

//sentencia es una linea completa de codigo que tenga ";"
saludar();
SaludarPersona('Juan');

//let es para poner una variable 
let persona = 'Maria';
SaludarPersona(persona); 

let vector = [1, 3, 9, 2, 4];
let mayor = 0
        
        for(let i = 0; i < vector; i++){
            if(numero[i] > mayor){
                mayor = numero[i]
            }
        }

        let res = vector.find(elemento => elemento == (mayor));
        
        //let index = vector.find(elemento => elemento == (Math.max.apply(null, vector)));

return res

console.log(res)