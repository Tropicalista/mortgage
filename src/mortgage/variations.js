import { __ } from '@wordpress/i18n';

const variations = [
	{
		name: 'rates',
		title: __( 'Rates', 'mortgage' ),
		icon: 'calculator',
		attributes: {
			type: 'rates',
		},
		scope: [ 'block', 'inserter' ],
	},
	{
		name: 'duration',
		title: __( 'Duration', 'mortgage' ),
		icon: 'calculator',
		attributes: {
			type: 'duration',
		},
		scope: [ 'block', 'inserter' ],
	},
];

export default variations;
