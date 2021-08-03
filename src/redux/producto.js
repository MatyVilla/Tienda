import { auth, firebase, db, storage } from "../firebase"


//data inicial
const dataInicial = {
    loading: false,
}

//Type
const BUSQUEDA = 'BUSQUEDA'
const BUSQUEDA_EXITO = 'BUSQUEDA_EXITO'
//Reducer

export default function productoReducer(state = dataInicial, action) {
    switch (action.type) {
        case BUSQUEDA:
            return { ...state, loading: true }
        case BUSQUEDA_EXITO:
            return { producto: action.payload }
        default:
            return { ...state }
    }
}


//action
export const buscarProducto = (value) =>  (dispatch) => {

    try {
        const array = []
         db.collection(`producto`).where('sexo', '==', 'hombre').where('tipo', '==', 'pantalon').get().then(function (result) {
            result.forEach( doc => {
                 db.collection('producto').doc(doc.id).collection('talla').get().then(function (result2) {
                    result2.forEach(element => {
                        array.push({
                            data:doc.data(),
                            talla:element.data()
                        })
                    });
                })
                /* array.push({
                    id:doc.id,
                    data: doc.data()
                }) */
            })
        });
        /* console.log(array[0].id)
        await db.collection('producto').doc(array[0].id).collection('talla').get().then(function (result2) {
            result2.forEach(element => {
                console.log(element.data())
            });
        }) */
        dispatch({
            type: BUSQUEDA_EXITO,
            payload: array
        })
    } catch (error) {
        console.log(error)
    }
}
