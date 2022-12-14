const fetchData = require('../utils/fetchData')
//si algo no se va a mover ni a cambiar, se establece en mayúscula.
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {

        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }
    catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')

//¿Cómo aseguramos manejar los errores asincrónicos correctamente?

//TRY(código)....CATCH (error)