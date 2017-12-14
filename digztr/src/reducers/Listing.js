import {Listing as ListingActions} from '../actions';

/**
 * initialState
 * @type {{_id: obj, name: string, price: number, description: string, meta: [] }}
 */
const initialState = {
  _id: "",
  name: "",
  price: 0,
  description: "",
  meta: [],
  features: [],
  facts: [],
  interiors: [],
  construction: [],
  nearbyHomes: [],
  headerImages: [],
}

/**
 * Listing
 * Redux Reducer for Listing action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export default function Listing(state = initialState, action) {
  switch(action.type) {
    case ListingActions.LOAD:
      if (action.response) {
        return action.response;
        // return Object.assign({}, state, {
        //   id: action.response.id,
        //   name: action.response.name,
        //   price: action.response.price,
        //   description: action.response.description,
        //   meta: action.response.meta,
        // });
      }
      return initialState;
      break;
  }
  return state;
}
