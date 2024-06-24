/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import { pmt } from 'financial';

const userLang = window.navigator.language || window.navigator.userLanguage;

const formatNumber = ( val ) => {
	return val.toLocaleString( userLang, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	} );
};

const loanResponse = ( fields ) => {
	const result = pmt(
		fields.rate / 100 / fields.frequency,
		fields.frequency * fields.term,
		fields.amount
	);
	const context = getContext();
	context.showTable = true;
	context.result = result * -1;
};

const { state } = store( 'mortgage', {
	state: {
		get numberOfPayments() {
			const context = getContext();
			return context.frequency * context.term;
		},
		get installment() {
			const { result } = getContext();
			return formatNumber( result );
		},
		get totalPaid() {
			const context = getContext();
			return formatNumber( context.result * state.numberOfPayments );
		},
	},
	actions: {
		calculate: () => {
			const { ref } = getElement();
			const theForm = ref.closest( 'form' );
			const formData = new FormData( theForm );
			const fields = Object.fromEntries( formData );
			const context = getContext();

			context.type = theForm.dataset.type;

			if ( 'loan' === context.type ) {
				loanResponse( fields );
			}

			context.amount = Number( fields.amount );
			context.rate = Number( fields.rate );
			context.frequency = Number( fields.frequency );
			context.term = Number( fields.term );
			context.increment = Number( fields.increment );
		},
	},
	callbacks: {
		fields: () => {
			const { ref } = getElement();
			state.currency = ref.dataset.currency;
			state.type = ref.dataset.type;
		},
	},
} );
