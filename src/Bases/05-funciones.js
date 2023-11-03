// Funciones en JS

const saludar = function (nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`


//console.log(saludar('Goku'))
console.log(saludar2('Vegeta'))
console.log(saludar3('Goku'))
console.log(saludar4())

const getUser = () => ({
    
        uid: 'asb123',
        username: 'leasd42'
    
})

const user = getUser()
console.log(user)

//Tarea
const getUsuarioActivo = ( nombre ) => ({//transformar a funcion de flecha
        uid: 'ABC123 ',
        username: nombre
    })

const userActivo = getUsuarioActivo('Paulo')
console.log( userActivo )