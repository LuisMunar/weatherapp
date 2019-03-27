// Dependencias. 
import { createStore } from 'redux';

// Reducers.
import { city } from '../reducer/city';

// Initial state·
const initialState = {
    city : 'Armenia,col'
};

// Este es el store de toda la aplicacion.
export const store = createStore(
    // Este parametro es el reducer.
    city,
    // Este parametro es el initial state de la app.
    initialState,
    // Con la siguiente linea conectamos la app a la herramienta devtools de redux chroome.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);