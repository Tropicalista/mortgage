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
		this.payment()
	}

	payment() {
		let result = pmt( this.rate/this.frequency, this.frequency*this.term, this.amount )
		this.result = result*-1
	}

	summary() {
		//begin building the return string for the display of the amort table
    var summary = '<p>' + __( 'Loan amount', 'mortgage' ) + ": <b>" + this.currency + this.formatNumber( this.amount ) +  '</b><br />' + 
        __( 'Interest rate' , 'mortgage' ) + ': <b>' + this.rate.toFixed(2)*100 +  '%</b><br />' +
        __( 'Number of payments' , 'mortgage' ) + ': <b>' + this.term*this.frequency + '</b><br />' +
        __( 'Recurring payment' , 'mortgage' ) + ': <b>' + this.currency + this.formatNumber( this.result ) + '</b><br />' +
        __( 'Total paid' , 'mortgage' ) + ': <b>' + this.currency + this.formatNumber( this.result * this.term* this.frequency ) + '</b></p>';

    return summary

	}

	mortgageTable() {
		//add header row for table to return string
		var resultTable = "<table border='1'><tr><th>#</th><th>" + __( 'Payment', 'mortgage' ) + "</th>" + 
				"<th>" + __( 'Interest', 'mortgage' ) + "</th><th>" + __( 'Principal', 'mortgage' ) + "</th><th>" + __( 'Balance', 'mortgage' ) + "</th>";
		
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
			
			resultTable += "<td>" + this.currency + this.formatNumber( this.result ) + "</td>";

			resultTable += "<td>" + this.currency + this.formatNumber( ipmts[i] ) + "</td>";
			
			resultTable += "<td>" + this.currency + this.formatNumber( this.result - ipmts[i] )  + "</td>";

			//code for displaying in loop balance
			resultTable += "<td>" + this.currency + this.formatNumber( balance ) + "</td>";
			
			//end the table row on each iteration of the loop 
			resultTable += "</tr>";

			if( (i+1)%this.frequency ){
				// show year summary
			}
		}
	
		//Final piece added to return string before returning it - closes the table
		resultTable += "</table>";
    
		return resultTable
	}

	yearSummary() {
		var result = '<tr>';
		result += '<td>';
		result += '';
		result += '</td>';
		result += '</tr>';
	}

	response( elm ){
		elm = elm.parentNode;
		if( 'wp-block-columns' === elm.parentNode.className ){
			elm = elm.parentNode.parentNode;
		}
    summaryDiv.className = 'wp-block-mortgage-summary'
    summaryDiv.innerHTML = this.summary() 

    tableDiv.className = 'wp-block-mortgage-table'
    tableDiv.innerHTML = this.mortgageTable()

		elm.appendChild( summaryDiv )
		elm.appendChild( tableDiv )

	}

	formatNumber( val ){
		return val.toLocaleString( userLang, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})  
	}

}