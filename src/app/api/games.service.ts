import axios from './axios'

type game = {
    nombre: string
    fecha_de_salida: Date
    imagen: string
    categoria: string
}


export const addGame = async (game: game) => {
    try {
        const response = await axios.post('/games', game)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getGames = async () => {
    try {
        const response = await axios.get('/games')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
