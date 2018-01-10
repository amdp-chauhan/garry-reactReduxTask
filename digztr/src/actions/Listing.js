import axios from 'axios';
import config from '../config';

/**
 * LOAD
 * @type {string}
 */
export const LOAD_BY_ID = 'LISTING_LOAD_BY_ID';

/**
 * _loadRequest
 * @private
 */
export const _loadByIdRequest = () => ({ type: LOAD_BY_ID });

/**
 * _loadResponse
 * @param response
 * @private
 */
export const _loadByIdResponse = (response) => ({
	type: LOAD_BY_ID,
	response,
});

/**
 * load by ID
 * Gets profile data from the API for a given user id
 * @param userID user id
 * @returns {Function}
 */
export function loadById(id) {
 return (dispatch, getState) => {
   dispatch(_loadByIdRequest());
   axios.get(`${config.api.baseUrl}/api/listings/${id}`)
    .then(res => {
      dispatch(_loadByIdResponse(res.data));
    });
 }
}

 /**
  * LOAD
  * @type {string}
  */
 export const LOAD_RETS = 'LOAD_RETS';

 /**
  * _loadRequest
  * @private
  */
 export const _loadRETSRequest = () => ({ type: LOAD_RETS });

 /**
  * _loadResponse
  * @param response
  * @private
  */
 export const _loadRETSResponse = (response) => ({
 	type: LOAD_RETS,
 	response,
 });

 /**
  * load
  * Gets profile data from the API for a given user id
  * @param userID user id
  * @returns {Function}
  */
  export function loadRETS(id) {
    return (dispatch, getState) => {
      dispatch(_loadRETSRequest());
      axios.get(`${config.api.baseUrl}/api/listings/rets/${id}`)
       .then(res => dispatch(_loadRETSResponse(res.data)));
    }
  }
