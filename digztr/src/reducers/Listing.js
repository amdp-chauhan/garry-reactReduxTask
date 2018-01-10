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
  agents: [],
  geo: {lat:null,lng:null},
  address: {},
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
    case ListingActions.LOAD_BY_ID:
      if (action.response) {
        return action.response;
      }
      return initialState;
    case ListingActions.LOAD_RETS:
      if (action.response) {
        let res = action.response;
        return {
          _id: res._id,
          name: "Sample SimplyRETS Property",
          price: res.listPrice,
          description: res.remarks,
          meta: [
            {type:'Area',value:res.property.area},
            {type:'Stories',value:res.property.stories},
            {type:'Bathrooms',value:res.property.bathsFull},
            {type:'Bedrooms',value:res.property.bedrooms}
          ],
          features: res.features,
          facts: [],
          interiors: [],
          construction: [],
          nearbyHomes: [],
          headerImages: res.photos,
          agents: [{
            "lastName": res.agent.lastName,
            "contact": "",
            "firstName": res.agent.firstName,
            "id": res.agent.id
          }],
          geo: res.geo,
          address: res.address
        };
      }
  }
  return state;
}
