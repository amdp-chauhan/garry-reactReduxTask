/**
 * CALCULATE
 * @type {string}
 */
export const CALCULATE = 'CALCULATE';

/**
 * _loadResponse
 * @param response
 * @private
 */
export const _loadResponse = (response) => ({
	type: CALCULATE,
	response,
});

/**
 * LOAD
 * Load Calculator Initial Values
 * @returns {Function}
 */
 export function calculate(newMortgage) {
   return (dispatch,getState) => {
     let price = getState().Listing.price;
     let interest = (newMortgage.interest_rate/100)*price;
     let downpayment = (newMortgage.downpayment/100)*price
     let newPayment = (price+interest-downpayment)/newMortgage.loan_term;
     console.log(downpayment);
     dispatch(_loadResponse({
       payment: newPayment,
       downpayment: newMortgage.downpayment,
       loan_term: newMortgage.loan_term,
       interest_rate: newMortgage.interest_rate,
       homeowner_insurance: newMortgage.homeowner_insurance,
       property_tax: newMortgage.property_tax
     }));
   }
 }
