//DESESTRUCTURACIÓN DE OBJETOS
//ASIGNACIÓN DESESTRUCTURANTE
//OBJETO
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
}

const Context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng }} = Context( persona )

console.log(nombreClave, anios)
console.log( lat, lng )