import * as axios from 'axios';
import config from '../config';

/**
 * FB_LOGIN
 * @type {string}
 */
export const FB_LOGIN = 'USER_FB_LOGIN';

/**
 * _fbLoginInitial
 * @param initial
 * @private
 */
const _fbLoginInitial = initial => ({ type: FB_LOGIN, initial });

/**
 * fbLogin
 * Performs Facebook login, and on success posts return data to API
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param response {Object}
 * @returns {Function}
 */
export function fbLogin(response) {
	const token = response.authResponse.accessToken;
	const userID = response.authResponse.userID;
	return dispatch => {
		axios
			.post(`${config.api.baseUrl}/api/users`, {
				token: token,
				fb_user_id: userID,
			})
			.then(function(res) {
				localStorage.setItem('user', res.data);
				dispatch(_fbLoginInitial(res.data));
			})
			.catch(function(res) {
				console.log(res);
				dispatch(_fbLoginInitial(res.data));
			});
	};
}

/**
 * LOGOUT
 * @type {string}
 */
export const LOGOUT = 'USER_LOGOUT';

/**
 * _logoutRequest
 * @private
 */
export const _logoutRequest = () => ({ type: LOGOUT });

/**
 * _logoutResponse
 * @param response
 * @private
 */
export const _logoutResponse = response => ({ type: LOGOUT, response });

/**
 * logout
 * Performs Facebook logout for a given user
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @returns {Function}
 */
export function logout() {
	return dispatch => {
		dispatch(_logoutRequest());
		window.FB.logout(response => {
			dispatch(_logoutResponse(response));
		});
	};
}

/**
 * FOLLOW
 * @type {string}
 */
export const FOLLOW = 'USER_FOLLOW';

/**
 * follow
 * @param user
 * @returns {{type: string, user: *}}
 */
export function follow(user) {
	return {
		type: FOLLOW,
		user,
	};
}
