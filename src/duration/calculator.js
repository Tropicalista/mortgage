import { pmt, ipmt } from 'financial'

const userLang = navigator.language || navigator.userLanguage; 
const resultDiv = document.createElement('div');
const table = document.createElement('table');

const { __ } = wp.i18n;

export default class Calculator {

	constructor( formEl ) {
		this.amount = parseFloat( formEl.querySelector('[name="amount"]').value );
		this.rate = parseFloat( formEl.querySelector('[name="rate"]').value/100 );
		this.currency = document.createElement("small");
		this.currency = '<small>' + formEl.dataset.currency + '</small>';
	}

	payment( term ) {
		let result = pmt( this.rate/12, 12*term, this.amount )
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
		  __( 'Duration', 'mortgage' ), __( 'Monthly payment', 'mortgage' ), __( 'Interests', 'mortgage' ), __( 'Total', 'mortgage' ) 
		];

		let terms = [10,15,20,25,30]
		let data = [];
		terms.forEach( (y) => {
			data.push({ 
				years: y + __( ' Years', 'mortgage' ), 
				recurring: this.formatNumber(this.payment(y)), 
				interests: this.formatNumber(this.payment(y)*12*y-this.amount), 
				total: this.formatNumber(this.payment(y)*12*y), 
				interests: this.formatNumber(this.payment(y)*12*y-this.amount), 
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