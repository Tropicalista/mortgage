/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import { ipmt, pmt } from 'financial';

const userLang = window.navigator.language || window.navigator.userLanguage;

const formatNumber = ( val ) => {
	return val.toLocaleString( userLang, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	} );
};

const calculator = ( fields ) => {
	const result = pmt(
		fields.rate / 100 / fields.frequency,
		fields.frequency * fields.term,
		fields.amount
	);
	return result * -1;
};

const loanResponse = () => {
	const data = [];

	// convert total payments to progressive array
	const periods = Array.from(
		{ length: state.numberOfPayments },
		( _, i ) => i + 1
	);
	const context = getContext();

	const ipmts = periods.map( ( per ) =>
		ipmt(
			context.rate / 100 / context.frequency,
			per,
			1 * periods.length,
			Number( context.amount )
		)
	);

	let balance = context.amount;

	for ( let i = 0; i < ipmts.length; i++ ) {
		balance = balance - context.result - ipmts[ i ];

		data.push( {
			'#': i + 1,
			payment: formatNumber( context.result ),
			interest: formatNumber( ipmts[ i ] * -1 ),
			principal: formatNumber( context.result + ipmts[ i ] ),
			balance: formatNumber( balance ),
		} );
	}
	// create table
	context.loanData = data;
	context.showTable = true;
	const { ref } = getElement();
	const resultDiv = ref.querySelector( '.wp-block-mortgage-result' );
	resultDiv?.scrollIntoView( { behavior: 'smooth' } );
};

const ratesResponse = () => {
	const context = getContext();
	if ( ! context.rate || ! context.amount ) {
		return;
	}

	const count = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
	const data = [];
	const rate = context.rate;
	count.forEach( ( y ) => {
		context.rate = rate + context.increment * y;
		const result = calculator( {
			rate: context.rate,
			amount: context.amount,
			frequency: 12,
			term: context.term,
		} );
		data.push( {
			rate: context.rate.toFixed( 2 ),
			installment: formatNumber( result ),
			interests: formatNumber(
				result * 12 * context.term - context.amount
			),
			total: formatNumber( result * 12 * context.term ),
		} );
	} );

	context.rateData = data;
	context.showTable = true;
};

const durationResponse = () => {
	const context = getContext();
	if ( ! context.rate || ! context.amount ) {
		return;
	}
	const fields = {
		rate: context.rate,
		amount: context.amount,
		frequency: 12,
		term: 10,
	};
	const terms = [ 10, 15, 20, 25, 30, 35, 40 ];
	const data = [];
	terms.forEach( ( y ) => {
		fields.term = y;
		const result = calculator( fields );
		data.push( {
			years: y,
			installment: formatNumber( result ),
			interests: formatNumber( result * 12 * y - context.amount ),
			total: formatNumber( result * 12 * y ),
		} );
	} );
	context.durationData = data;
	context.showTable = true;
};

const { state } = store( 'mortgage', {
	callbacks: {
		generateTable: () => {
			const context = getContext();
			if ( context.result ) {
				context.showTable = true;
			}

			switch ( context.type ) {
				case 'loan':
					if ( ! context.result ) {
						return;
					}
					loanResponse();
					break;
				case 'rates':
					ratesResponse();
					break;
				case 'duration':
					durationResponse();
					break;
				default:
					loanResponse();
			}
		},
	},
} );
