/*
Create a function which calculates receipt based on given bill;
function has 2 parameters (bill and tip in percentage)
receipt is bill + tip
*/

// improvements 1

/*
add sale tax %10 to the bill
*/

// improvements 2
/*
add sale tax %10 if california
0% if Seattle
8% rest.
*/

function receipt(bill, tax, tip){
	if (tax == 'ca') {

		return (bill + (bill * 0.1) + tip); //! For California use "ca" on input info //
	} else if (tax == 'wa') {
		return (bill + tip); //! For Seattle use "wa" on input info //
	} else {
		return (bill + (bill * 0.08) + tip); //! For Others use anything else exept "ca" and "wa" on input info //
	}
}
	console.log(receipt(25, 'ca', 10))
	console.log(receipt(25, 'wa', 10))
	console.log(receipt(25, 're', 10))