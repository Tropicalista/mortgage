export default {
	label: {
		type: 'object',
		default: {
			principal: 'principal',
			rate: 'rate',
			term: 'term',
			periods: 'periods'			
		},
	},
	placeholder: {
		type: 'object',
		default: {
			principal: '',
			rate: '',
			term: '',
			periods: ''			
		},
	},
	help: {
		type: 'object',
		default: {
			principal: '',
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
