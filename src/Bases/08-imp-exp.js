import  heroes, { owners }  from '../data/heroes'


//HAY 3 FORMAS DE HACER LA FUNCIÓN TODAS FUNCIONAN IGUAL

/*const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id) {
            return true
        }else{
            return false
        }
    })
}

console.log(getHeroeById(2))
*/

/*const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id )
}

const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id )
}
*/

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id )


console.log(getHeroeById(2))
//find?, Filter
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner )

console.log(getHeroesByOwner('Marvel'))