/* Estas son las constantes que se van a encargar de identificar cada acciones y siempren seran usadas
en el action creactor (actionCreator). */
export const SET_CITY = 'SET_CITY';

/* Este es el action creator (actionCreator) que se va a encargar de contener todas las acciones que se van a despachar al store
por medio del metodo store.dispatch(), el store.dispatch siempre va a estar en el interior del componente clase. */

export const setCity = (value) => (
  {
    type : SET_CITY,
    value
  }
);