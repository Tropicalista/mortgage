import { pmt, ipmt } from 'financial'

const userLang = navigator.language || navigator.userLanguage; 
const resultDiv = document.createElement( 'div' );
const summaryDiv = document.createElement( 'div' );
const tableDiv = document.createElement('div');
const table = document.createElement('table');

const { __ } = wp.i18n;

export default class Calculator {

	constructor( formEl ) {

		this.frequency = 12;
		this.setFormInput(formEl)

		this.currency = '<small>' + formEl.dataset.currency + '</small>';
		this.showSummary = formEl.dataset.yearsummary === 'true';
		this.showTable = formEl.dataset.showtable === 'true';
		this.type = formEl.dataset.type;
	}

	setFormInput( formEl ) {
		var data = new FormData(formEl);
		for (var [key, value] of data) {
			this[key] = parseFloat( value )
		}
		this.rate = this.rate/100;
	    console.log(this)
	}

	payment() {
		let result = pmt( this.rate/this.frequency, this.frequency*this.term, this.amount )
		return result*-1;
	}

	summary() {
		//begin building the return string for the display of the amort table
    	var summary = '<p>' + __( 'Loan amount', 'mortgage' ) + ": <b>" + this.formatNumber( this.amount ) +  '</b><br />' + 
        __( 'Interest rate' , 'mortgage' ) + ': <b>' + (this.rate*100).toFixed(2) +  '%</b><br />' +
        __( 'Number of payments' , 'mortgage' ) + ': <b>' + this.term*this.frequency + '</b><br />' +
        __( 'Recurring payment' , 'mortgage' ) + ': <b>' + this.formatNumber( this.result ) + '</b><br />' +
        __( 'Total paid' , 'mortgage' ) + ': <b>' + this.formatNumber( this.result * this.term* this.frequency ) + '</b></p>';

    	return summary
	}

	generateTable(table, data) {
	  for (let element of data) {
	    let row = table.insertRow();
	    if( this.showSummary ){
			this.yearSummary( element['#'] )
	    }
	    for (let key in element) {
	      let cell = row.insertCell();
	      cell.innerHTML = element[key];
	    }
	  }
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

	yearSummary( nth ){

		if( 0 !== ( nth % this.frequency ) ){
			return
		}

		let arr = this.ipmts.slice( 0, nth )

		let result = '';
		let year = Number( nth/this.frequency );
		result += __( 'Total after year ', 'mortgage' ) + year + ': ' + this.formatNumber( this.result*this.frequency*year );
		result += '<br>' + 
					__( 'Interests paid after year ', 'mortgage' ) + 
					year + 
					': ' + 
					this.formatNumber( arr.reduce((a, b) => a + b, 0)*-1 );

		let row = table.insertRow(-1);
		let cell = row.insertCell(0);
		cell.innerHTML = result;
		cell.colSpan = 5;
	}

	mortgageTable( elm ){
		let data = [];

		let heads = [
		  '#', 
		  __( 'Installment', 'mortgage' ), 
		  __( 'Interest', 'mortgage' ), 
		  __( 'Principal', 'mortgage' ), 
		  __( 'Balance', 'mortgage' ) 
		];
		
		// convert total payments to progressive array
		this.periods = this.getPeriods()

		this.ipmts = this.periods.map((per) => ipmt( this.rate / this.frequency, per, 1 * this.periods.length, this.amount) )
		let balance = this.amount

		for ( var i = 0; i < this.ipmts.length; i++ )
		{ 
			balance = balance - this.result - this.ipmts[i]
			
			data.push({
				'#': i+1,
				payment: this.formatNumber( this.result ),
				interest: this.formatNumber( this.ipmts[i] * -1 ),
				principal: this.formatNumber( this.result + this.ipmts[i] ),
				balance: this.formatNumber( balance )
			})

		}

		// reset table
		table.innerHTML = '';
		this.generateTableHead(table, heads);
		this.generateTable(table, data);

	}

	loanResponse( elm ){
		let parent = elm.parentNode;
		if( elm.closest( '.wp-block-columns' ) ){
			elm = elm.parentNode.parentNode;
		}
		this.result = this.payment();

		let heads = [
		  '#', 
		  __( 'Installment', 'mortgage' ), 
		  __( 'Interest', 'mortgage' ), 
		  __( 'Principal', 'mortgage' ), 
		  __( 'Balance', 'mortgage' ) 
		];

		resultDiv.className = 'wp-block-mortgage-result success'
		resultDiv.innerHTML = '<p>' + __( 'Installment', 'mortgage' ) + ': <b>' + this.formatNumber( this.result ) + '</b></p>'
		summaryDiv.className = 'wp-block-mortgage-summary'
		summaryDiv.innerHTML = this.summary() 


		if( this.showTable ){
			this.mortgageTable(elm)
			tableDiv.className = 'wp-block-mortgage-table'
			tableDiv.appendChild( table )
			elm.after( tableDiv )
		}
console.log(elm)
		elm.after( summaryDiv );
		elm.after( resultDiv );

		resultDiv.scrollIntoView({ behavior: 'smooth' });

	}

	durationResponse( elm ){
		let parent = elm.parentNode;
		if( elm.closest( '.wp-block-columns' ) ){
			elm = elm.parentNode.parentNode;
		}

		let heads = [
			__( 'Duration', 'mortgage' ), 
			__( 'Installment', 'mortgage' ), 
			__( 'Interests', 'mortgage' ), 
			__( 'Total', 'mortgage' ) 
		];

		let terms = [10,15,20,25,30,35,40]
		let data = [];
		terms.forEach( (y) => {
			this.term = y;
			data.push({ 
				years: y + __( ' Years', 'mortgage' ), 
				recurring: this.formatNumber( this.payment() ), 
				interests: this.formatNumber( this.payment() * this.frequency * y - this.amount), 
				total: this.formatNumber( this.payment() * this.frequency * y ), 
				interests: this.formatNumber( this.payment() * this.frequency * y - this.amount), 
			})
		} )
		// reset table
		table.innerHTML = '';
		this.generateTableHead(table, heads);
		this.generateTable(table, data);

	    resultDiv.className = 'wp-block-mortgage-table'

		resultDiv.appendChild( table )
		elm.after( resultDiv )

		resultDiv.scrollIntoView({ behavior: 'smooth' });

	}

	ratesResponse( elm ){

		this.increment = parseFloat( elm.querySelector('[name="increment"]').value/100 );

		let parent = elm.parentNode;
		if( elm.closest( '.wp-block-columns' ) ){
			elm = elm.parentNode.parentNode;
		}

		let heads = [
		  __( 'Rate', 'mortgage' ), __( 'Installment', 'mortgage' ), __( 'Interests', 'mortgage' ), __( 'Total', 'mortgage' ) 
		];

		let count = [0,1,2,3,4,5,6,7,8]
		let data = [];
		let rate = this.rate;
		count.forEach( (y) => {
			this.rate = rate + this.increment * y;
			data.push({ 
				rate: ( this.rate*100 ).toFixed(2) + '<small>%</small>', 
				recurring: this.formatNumber( this.payment() ), 
				interests: this.formatNumber( this.payment() * 12 * this.term - this.amount ), 
				total: this.formatNumber( this.payment() * 12 * this.term ), 
			})
		} )

		// reset table
		table.innerHTML = '';
		
		this.generateTableHead(table, heads);
		this.generateTable(table, data);

	    resultDiv.className = 'wp-block-mortgage-table'

		resultDiv.appendChild( table )
		elm.after( resultDiv )

		resultDiv.scrollIntoView({ behavior: 'smooth' });

	}

	response( elm ) {
		switch ( this.type )
		{
			case "loan":
				this.loanResponse( elm )
				break;
			case "rates":
				this.ratesResponse( elm )
				break;
			case "duration": 
				this.durationResponse( elm )
				break;
			default: 
				this.loanResponse( elm )
		}
	}

	getPeriods(){
		// convert total payments to progressive array
		let periods = Array.from( Array( this.term*this.frequency ).keys() )
		periods.shift()
		periods.push( periods.slice(-1).pop() +1 )
		return periods;
	}

	formatNumber( val ){
		return this.currency + val.toLocaleString( userLang, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})  
	}

}