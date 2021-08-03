import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productoReducer from './producto';

import usuarioReducer, {leerUsuarioActivo} from './usuario'

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    producto: productoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generarStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    leerUsuarioActivo()(store.dispatch)
    return store;
}

