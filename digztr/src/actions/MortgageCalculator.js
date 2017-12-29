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
		 let newPayment = 0;
		 if (newMortgage.interest_rate) {
			 let interest = (newMortgage.interest_rate/100.0);
			 interest /= 12;

			 let pow = 1;

			 for (let i = 0; i < newMortgage.loan_term*12; i++) {
			 	pow = pow * (1+interest);
			 }

			 let downpayment = ((newMortgage.downpayment/100)*price);
			 console.log(downpayment);
			 price-=downpayment;
			 newPayment = ((price * pow * interest) / (pow-1));
			 console.log(newPayment);
			 // let newPayment = (price+interest-downpayment)/newMortgage.loan_term;
		 }else{
			 newPayment = (price / newMortgage.loan_term) - (newMortgage.downpayment/100)*price;
		 }
     // console.log(downpayment);
     dispatch(_loadResponse({
       payment: newPayment.toFixed(2),
       downpayment: newMortgage.downpayment,
       loan_term: newMortgage.loan_term,
       interest_rate: newMortgage.interest_rate,
       homeowner_insurance: newMortgage.homeowner_insurance,
       property_tax: newMortgage.property_tax
     }));
   }
 }
