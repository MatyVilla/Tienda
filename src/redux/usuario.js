import { auth, app, db, storage } from "../firebase";
//data inicial
const dataInicial = {
    loading: false,
    activo: false
}

//Type
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'

//Reducer

export default function usuarioReducer(state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case USUARIO_ERROR:
            return { ...dataInicial }
        case USUARIO_EXITO:
            return { ...state, loading: false, user: action.payload, activo: true }
        case CERRAR_SESION:
            return { ...dataInicial }
        default:
            return { ...state }
    }
}

//accion
// Iniciar sesion con correo y contrasena
export const IniciarSesion = (props, email, pass) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const res = await auth.signInWithEmailAndPassword(email, pass)
        /* props.history.push('/') */
        const usuarioDB = await db.collection('usuario').doc(res.user.email).get()

        dispatch({
            type: USUARIO_EXITO,
            payload: usuarioDB.data()
        })
        localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        console.log(res)

    } catch (error) {
        console.log(error)
    }
}

// Registrar usuario con correo y contrasena
export const RegistrarUsuario = (email, pass, nombre, apellido) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            nombre: nombre,
            apellido: apellido
        }
        if(res.user.emailVerified ===false){
            await app.auth().currentUser.sendEmailVerification()
        }
        console.log(res.user)
        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario', JSON.stringify(usuario))
        await db.collection('usuario').doc(res.user.email).set(usuario)
    } catch (error) {
        console.log(error)
    }
}

// iniciar sesion con cuenta de google
export const ingresarUsuarioGoogle = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const provider = new app.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            nombre: res.user.displayName,
            img: res.user.photoURL
        }
        const usuarioDB = await db.collection('usuario').doc(usuario.email).get()
        console.log(usuarioDB)
        if (usuarioDB.exists) {
            //cuando exista el usuario en fireStore
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
            })
            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        } else {
            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
            })
            localStorage.setItem('usuario', JSON.stringify(usuario))
            //no existe el usuario en fireStore
            await db.collection('usuario').doc(usuario.email).set(usuario)
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const IngresarUsuarioFacebook = () => (dispatch) => {
    /* dispatch({
        type: USUARIO_EXITO
    }) */
    try {
        const provider = new app.auth.FacebookAuthProvider()
        const res = auth.signInWithRedirect(provider)
        console.log(res)

    } catch (error) {
        console.log(error)
    }
}
// verificar que el usuario tenga la sesion activa
export const leerUsuarioActivo = () => (dispatch) => {
    if (localStorage.getItem('usuario')) {
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}
export const cerrarSesion = () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION
    })
}




