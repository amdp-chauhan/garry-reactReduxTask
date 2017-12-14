import {MortgageCalculator as MortgageCalculatorAction} from '../actions';

/**
 * initialState
 * @type {{_id: obj, name: string, price: number, description: string, meta: [] }}
 */
const initialState = {
  payment: 3409,
  downpayment: 50,
  loan_term: 10,
  interest_rate: 4,
  homeowner_insurance: 168,
  property_tax: 1.2
}

/**
 * MortgageCalculator
 * Redux Reducer for Listing action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export default function MortgageCalculator(state = initialState, action){
  switch(action.type){
    case MortgageCalculatorAction.CALCULATE:
      if (action.response) {
        return action.response;
      }
      return initialState;
      break;
  }
  return state;
}
