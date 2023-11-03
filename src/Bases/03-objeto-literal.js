
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 24534563,
        lat: 21345,
        lng: 123345
    }
}

const persona2 = {...persona}

persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)