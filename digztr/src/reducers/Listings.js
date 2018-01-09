import {Listings as ListingsActions} from '../actions';

/**
 * initialState
 * @type {{_id: obj, name: string, price: number, description: string, meta: [] }}
 */
const initialState = [];

/**
 * Listing
 * Redux Reducer for Listing action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export default function Listings(state = initialState, action) {
  switch(action.type) {
    case ListingsActions.LOAD:
      if (action.response) {
        return action.response;
      }
      return initialState;
      break;
  }
  return state;
}
