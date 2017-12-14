import axios from 'axios';
import config from '../config';

/**
 * LOAD
 * @type {string}
 */
export const LOAD = 'LISTING_LOAD';

/**
 * _loadRequest
 * @private
 */
export const _loadRequest = () => ({ type: LOAD });

/**
 * _loadResponse
 * @param response
 * @private
 */
export const _loadResponse = (response) => ({
	type: LOAD,
	response,
});

/**
 * load
 * Gets profile data from the API for a given user id
 * @param userID user id
 * @returns {Function}
 */
 export function load() {
   return (dispatch, getState) => {
     dispatch(_loadRequest());
     axios.get(`${config.api.baseUrl}/api/listings`)
      .then(res => {
        dispatch(_loadResponse(res.data[0]));
      });
   }
 }
