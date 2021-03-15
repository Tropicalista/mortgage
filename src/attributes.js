import { __ } from '@wordpress/i18n';
export default {
	label: {
		type: 'object',
		default: {
			amount: __( 'Amount', 'mortgage' ),
			rate: __( 'Rate', 'mortgage' ),
			term: __( 'Term', 'mortgage' ),
			frequency: __( 'Payment frequency', 'mortgage' )			
		},
	},
	defaults: {
		type: 'object',
		default: {
			amount: 10000,
			rate: 4,
			term: 10,
			frequency: 12			
		},
	},
	placeholder: {
		type: 'object',
		default: {
			amount: '',
			rate: '',
			term: '',
			frequency: ''			
		},
	},
	help: {
		type: 'object',
		default: {
			amount: '',
			rate: '',
			term: '',				
			frequency: ''			
		},
	},
	button: { 
		type: 'string',
		default: __( 'Calculate', 'mortgage' )
	},
	currency: { 
		type: 'string',
		default: '$'
	},
	asRow: { 
		type: 'boolean',
		default: false
	},
	boldedLabel: { 
		type: 'boolean',
		default: true
	}
};
