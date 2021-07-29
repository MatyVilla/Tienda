import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usuarioReducer, {leerUsuarioActivo} from './usuario'

const rootReducer = combineReducers({
    usuario: usuarioReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generarStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    leerUsuarioActivo()(store.dispatch)
    return store;
}

