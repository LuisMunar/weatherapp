// Dependencias. 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers.
import reducers from '../reducer';

// Initial state·
const initialState = {
    city : 'Armenia,col'
};

// Herramienta de debuggin en chrome.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Este es el store de toda la aplicacion.
export const store = createStore(
    // Este parametro es el reducer.
    reducers,
    // Este parametro es el initial state de la app.
    initialState,
    // middleware y herramienta de debug chrome.
    composeEnhancers(applyMiddleware(thunk))
);