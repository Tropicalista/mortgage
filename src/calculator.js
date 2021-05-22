import { pmt, ipmt } from 'financial'

const userLang = navigator.language || navigator.userLanguage; 
const summaryDiv = document.createElement( 'div' );
const tableDiv = document.createElement('div');

const { __ } = wp.i18n;

export default class Calculator {

	constructor( formEl ) {
		this.amount = parseFloat( formEl.querySelector('[name="amount"]').value );
		this.rate = parseFloat( formEl.querySelector('[name="rate"]').value/100 );
		this.term = parseFloat( formEl.querySelector('[name="term"]').value );
		this.frequency = parseFloat( formEl.querySelector('[name="frequency"]').value );
		this.currency = '<small>' + formEl.dataset.currency + '</small>';
		this.showSummary = formEl.dataset.yearsummary === 'true';
		this.showTable = formEl.dataset.showtable === 'true';
		this.result = this.payment()*-1;
		this.totalInterestPaid = 0;
	}

	payment() {
		let result = pmt( this.rate/this.frequency, this.frequency*this.term, this.amount )
		return result;
	}

	summary() {
		//begin building the return string for the display of the amort table
    	var summary = '<p>' + __( 'Loan amount', 'mortgage' ) + ": <b>" + this.formatNumber( this.amount ) +  '</b><br />' + 
        __( 'Interest rate' , 'mortgage' ) + ': <b>' + this.rate.toFixed(2)*100 +  '%</b><br />' +
        __( 'Number of payments' , 'mortgage' ) + ': <b>' + this.term*this.frequency + '</b><br />' +
        __( 'Recurring payment' , 'mortgage' ) + ': <b>' + this.formatNumber( this.result ) + '</b><br />' +
        __( 'Total paid' , 'mortgage' ) + ': <b>' + this.formatNumber( this.result * this.term* this.frequency ) + '</b></p>';

    return summary

	}

	generateTableHead(table, data) {
	  let thead = table.createTHead();
	  let row = thead.insertRow();
	  for (let key of data) {
	    let th = document.createElement("th");
	    let text = document.createTextNode(key);
	    th.appendChild(text);
	    row.appendChild(th);
	  }
	}

	mortgageTable() {
		//add header row for table to return string
		var resultTable = "<table><tr><th>#</th><th>" + __( 'Payment', 'mortgage' ) + "</th>" + 
				"<th>" + __( 'Interest', 'mortgage' ) + "</th><th>" + __( 'Principal', 'mortgage' ) + "</th><th>" + __( 'Balance', 'mortgage' ) + "</th>";
		let heads = [
		  '#', __( 'Payment', 'mortgage' ), __( 'Interest', 'mortgage' ), __( 'Principal', 'mortgage' ), __( 'Balance', 'mortgage' ) 
		];
		
		// convert total payments to progressive array
		var periods = Array.from( Array( this.term*this.frequency ).keys() )
		periods.shift()
		periods.push( periods.slice(-1).pop() +1 )

		const ipmts = periods.map((per) => ipmt( this.rate / this.frequency, per, 1 * periods.length, this.amount)*-1)
		var balance = this.amount
		/**
		 * Loop that calculates the monthly Loan amortization amounts then adds 
		 * them to the return string 
		 */
		for ( var i = 0; i < ipmts.length; i++ )
		{ 
			balance = balance - this.result + ipmts[i]
			//start a new table row on each loop iteration
			resultTable += "<tr align=center>";
			
			//display the month number in col 1 using the loop count variable
			resultTable += "<td>" + (i+1) + "</td>";
			
			resultTable += "<td>" + this.formatNumber( this.result ) + "</td>";

			resultTable += "<td>" + this.formatNumber( ipmts[i] ) + "</td>";
			
			resultTable += "<td>" + this.formatNumber( this.result - ipmts[i] )  + "</td>";

			//code for displaying in loop balance
			resultTable += "<td>" + this.formatNumber( balance ) + "</td>";
			
			//end the table row on each iteration of the loop 
			resultTable += "</tr>";

			this.totalInterestPaid += ipmts[i];

			if( 0 === (i+1)%this.frequency && this.showSummary ){
				// show year summary
				resultTable += this.yearSummary(i+1)
			}
		}
	
		//Final piece added to return string before returning it - closes the table
		resultTable += "</table>";
    
		return resultTable
	}

	yearSummary( per ) {
		let year = Number( per/12 );
		console.log(year)
		var result = '<tr>';
		result += '<td colspan="5">';
		result += __( 'Total after year ', 'mortgage' ) + year + ': ' + this.formatNumber( this.result*this.frequency*year );
		result += '<br>' + __( 'Interests paid after year ', 'mortgage' ) + year + ': ' + this.formatNumber( this.totalInterestPaid );
		result += '</td>';
		result += '</tr>';
		return result;
	}

	response( elm ){
		let parent = elm.parentNode;
		if( 'wp-block-columns' === parent.parentNode.className ){
			elm = elm.parentNode.parentNode;
		}
		summaryDiv.className = 'wp-block-mortgage-summary'
		summaryDiv.innerHTML = this.summary() 

		if( this.showTable ){
			tableDiv.className = 'wp-block-mortgage-table'
			tableDiv.innerHTML = this.mortgageTable()
			elm.after( tableDiv )
		}

		elm.after( summaryDiv );
	}

	formatNumber( val ){
		return this.currency + val.toLocaleString( userLang, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})  
	}

}