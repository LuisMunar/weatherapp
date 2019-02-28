// Dependencias. 
import { createStore } from 'redux';

// Este es el store de toda la aplicacion.
export const store = createStore(
    // La siguiente liena contien la funcines que va a ejecutar el store.
    () => {},
    // Con la siguiente linea conectamos el store de la app a la herramienta devtools de redux chroome.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);