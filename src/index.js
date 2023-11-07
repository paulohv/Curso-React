const { useCallback } = require("react")

const personajes = ['Goku', 'Vegeta', 'Trunks']
const [ , , p3 ] = personajes
console.log( p3 )

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo ()
console.log(letras, numeros)

//Tarea
//1. El primer valor del arr se llamará nombre
//2. se llamara setNombre
const state = ( valor ) => {
    return [ valor, () =>{ console.log('Hola Mundo')}]
}

const [nombre, setNombre] = state('Goku')
console.log( nombre )
setNombre()

const joaquin = 'weco'