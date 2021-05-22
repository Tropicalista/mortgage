import Calculator from '../calculator.js'
import { pmt, ipmt } from 'financial'

const userLang = navigator.language || navigator.userLanguage; 
const resultDiv = document.createElement('div');
const table = document.createElement('table');

const { __ } = wp.i18n;

export default class RatesCalculator {

	constructor( formEl ) {
		this.amount = parseFloat( formEl.querySelector('[name="amount"]').value );
		this.term = parseFloat( formEl.querySelector('[name="term"]').value );
		this.rate = parseFloat( formEl.querySelector('[name="rate"]').value/100 );
		this.increment = parseFloat( formEl.querySelector('[name="increment"]').value/100 );
		this.currency = document.createElement("small");
		this.currency = '<small>' + formEl.dataset.currency + '</small>';
	}

	payment( rate ) {
		let result = pmt( rate/12, 12*this.term, this.amount )
		return result*-1;
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

	generateTable(table, data) {
	  for (let element of data) {
	    let row = table.insertRow();
	    for (let key in element) {
	      let cell = row.insertCell();
	      cell.innerHTML = element[key];
	    }
	  }
	}

	response( elm ){
		let parent = elm.parentNode;
		if( 'wp-block-columns' === parent.parentNode.className ){
			elm = elm.parentNode.parentNode;
		}

		let heads = [
		  __( 'Rate', 'mortgage' ), __( 'Monthly payment', 'mortgage' ), __( 'Interests', 'mortgage' ), __( 'Total', 'mortgage' ) 
		];

		let count = [0,1,2,3,4]
		let data = [];
		count.forEach( (y) => {
			let rate = this.rate + this.increment * y;
			data.push({ 
				rate: (rate*100).toFixed(2) + '<small>%</small>', 
				recurring: this.formatNumber( this.payment( rate ) ), 
				interests: this.formatNumber( this.payment( rate ) * 12 * this.term - this.amount ), 
				total: this.formatNumber( this.payment( rate ) * 12 * this.term ), 
			})
		} )

		// reset table
		table.innerHTML = '';
		
		this.generateTableHead(table, heads);
		this.generateTable(table, data);

	    resultDiv.className = 'wp-block-mortgage-table'

		resultDiv.appendChild( table )
		elm.after( resultDiv )

	}

	formatNumber( val ){
		return this.currency + val.toLocaleString( userLang, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})  
	}

}