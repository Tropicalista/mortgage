//import { pmt, ppmt, ipmt, fv } from 'financial'
const { __ } = wp.i18n;

const result = document.createElement( 'p' );
const tblDiv = document.createElement('div');


document.addEventListener('submit', handleSubmitEvents, true) // useCapture=false to ensure we bubble upwards (and thus can cancel propagation)

function handleSubmitEvents (e) {
  const formEl = e.target
  if (formEl.className.indexOf('wp-block-mortgage-form') < 0) {
	return
  }
  // always prevent default (because regular submit doesn't work for Formello)
  e.preventDefault()
  e.stopPropagation()

  if( formEl.checkValidity() ){

	calculate( formEl )

  }else{

  	response( __( 'Please fill out the form!', 'mortgage' ), 'error', formEl )

  }
}

function response( message, type, elm ){
	result.innerHTML = message;
	result.className = 'wp-block-mortgage-result ' + type;
	tblDiv.className = 'wp-block-mortgage-table ';
	elm = elm.parentNode;
	if( 'wp-block-columns' === elm.parentNode.className ){
		elm = elm.parentNode.parentNode;
	}
	elm.appendChild( result )
	elm.appendChild( tblDiv )
}

function calculate( formEl ){
	var amount = parseFloat(formEl.querySelector('[name="amount"]').value);
	var rate = parseFloat(formEl.querySelector('[name="rate"]').value/100);
	var term = parseFloat(formEl.querySelector('[name="term"]').value);
	var frequency = parseFloat(formEl.querySelector('[name="frequency"]').value);

	var mortgageTable = amort( amount, rate, term, frequency, formEl );
	//response( payment, 'success', formEl );
	//result.appendChild( mortgageTable )
}

/**
 * Amort function:
 * Calculates the necessary elements of the loan using the supplied user input
 * and then displays each months updated amortization schedule on the page
*/
function amort( balance, interestRate, terms, frequency, formEl )
{
	var currency = '<small>' + formEl.dataset.currency + '</small>';

    //Calculate the per month interest rate
	var monthlyRate = interestRate/frequency;
	
	//Calculate the payment
    var payment = balance * (monthlyRate/(1-Math.pow(1+monthlyRate, -terms*frequency)));
    //var payment = pmt( interestRate/frequency, frequency*terms, balance ) * -1;

	//begin building the return string for the display of the amort table
    var resultTable = __( 'Loan amount', 'mortgage' ) + ": " + currency + balance.toFixed(2) +  "<br />" + 
        __( 'Interest rate' , 'mortgage' ) + ": " + (interestRate*100).toFixed(2) +  "%<br />" +
        __( 'Number of payments' , 'mortgage' ) + ": " + terms*frequency + "<br />" +
        __( 'Recurring payment' , 'mortgage' ) + ": " + currency + payment.toFixed(2) + "<br />" +
        __( 'Total paid' , 'mortgage' ) + ": " + currency + (payment * terms* frequency).toFixed(2) + "<br /><br />";
        
    //add header row for table to return string
	resultTable += "<table border='1'><tr><th>#</th><th>" + __( 'Payment', 'mortgage' ) + "</th>" + 
        "<th>" + __( 'Interest', 'mortgage' ) + "</th><th>" + __( 'Principal', 'mortgage' ) + "</th><th>" + __( 'Balance', 'mortgage' ) + "</th>";
    
    var totalPayments = terms*frequency;

    /**
     * Loop that calculates the monthly Loan amortization amounts then adds 
     * them to the return string 
     */
	for (var count = 0; count < totalPayments; ++count)
	{ 
		//in-loop interest amount holder
		var interest = 0;
		//in-loop monthly principal amount holder
		var monthlyPrincipal = 0;
		//calc the in-loop interest amount and display
		interest = balance * monthlyRate;
		//calc the in-loop monthly principal and display
		monthlyPrincipal = payment - interest;
		//update the balance for each loop iteration
		balance = balance - monthlyPrincipal;		
		
		//start a new table row on each loop iteration
		resultTable += "<tr align=center>";
		
		//display the month number in col 1 using the loop count variable
		resultTable += "<td>" + (count + 1) + "</td>";
		
		resultTable += "<td>" + currency + payment.toFixed(2) + "</td>";

		resultTable += "<td>" + currency + interest.toFixed(2) + "</td>";
		
		resultTable += "<td>" + currency + monthlyPrincipal.toFixed(2) + "</td>";
		
		//code for displaying in loop balance
		resultTable += "<td>" + currency + balance.toFixed(2) + "</td>";
		
		//end the table row on each iteration of the loop	
		resultTable += "</tr>";
		
	}
	
	//Final piece added to return string before returning it - closes the table
    resultTable += "</table>";

	response( __( 'Recurring payment' , 'mortgage' ) + ": " + currency + payment.toFixed(2), 'success', formEl );
	tblDiv.innerHTML = resultTable;

}
