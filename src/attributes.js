export default {
	label: {
		type: 'object',
		default: {
			amount: 'Amount',
			rate: 'Rate',
			term: 'Term',
			periods: 'Periods'			
		},
	},
	defaults: {
		type: 'object',
		default: {
			amount: 10000,
			rate: 4,
			term: 10,
			periods: 12			
		},
	},
	placeholder: {
		type: 'object',
		default: {
			amount: '',
			rate: '',
			term: '',
			periods: ''			
		},
	},
	help: {
		type: 'object',
		default: {
			amount: '',
			rate: '',
			term: '',				
			periods: ''			
		},
	},
	button: { 
		type: 'string',
		default: 'Calculate'
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
