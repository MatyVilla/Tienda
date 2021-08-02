import { auth, firebase, db, storage } from "../firebase"


//data inicial
const dataInicial = {
    loading: false,
    activo: false
}

//Type
const BUSQUEDA = 'BUSQUEDA'

//Reducer

export default function productoReducer(state = dataInicial, action) {
    switch (action.type) {
        case BUSQUEDA:
            return { ...state, loading: true }
        default:
            return { ...state }
    }
}


//action
export const buscarProducto = () => async (dispatch) => {
    dispatch({
        type: BUSQUEDA
    })
    try {

        const productoDB = await db.collection('polera').get()
        console.log(productoDB)

    } catch (error) {
        console.log(error)
        
    }
}
