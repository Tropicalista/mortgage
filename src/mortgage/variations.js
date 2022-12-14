import { __ } from '@wordpress/i18n';

const variations = [
	{
		name: 'rates',
		title: __( 'Rates Comparator', 'mortgage' ),
		description: __( 'Rates', 'mortgage' ),
		icon: 'calculator',
		attributes: {
			type: 'rates',
		},
		innerBlocks: [
			[ 'mortgage/input', {
				name: 'amount',
				label: __( 'Amount', 'mortgage' ),
				value: 10000,
				min: 0,
				max: ''
			} ],
			[ 'mortgage/input', {
				name: 'rate',
				label: __( 'Rate', 'mortgage' ),
				value: 4,
				min: 0,
				step: 0.01
			} ],
			[ 'mortgage/input', {
				name: 'term',
				label: __( 'Term', 'mortgage' ),
				value: 10
			} ],
			[ 'mortgage/select', {
				name: 'increment',
				label: __( 'Increment', 'mortgage' ),
				values: [
					{ value: 0.125, label: '1/8%' },
					{ value: 0.250, label: '1/4%' },
					{ value: 0.375, label: '3/8%' },
					{ value: 0.500, label: '1/2%' },
					{ value: 0.625, label: '5/8%' },
					{ value: 0.875, label: '7/8%' },
					{ value: 1, label: '1%' },
				]
			} ],
			[ 'mortgage/button', {
				text: __( 'Calculate', 'mortgage' ),
			} ],
		],
		scope: [ 'block', 'inserter' ],
	},
	{
		name: 'duration',
		title: __( 'Duration Comparator', 'mortgage' ),
		description: __( 'Duration', 'mortgage' ),
		icon: 'calculator',
		attributes: {
			type: 'duration',
		},
		innerBlocks: [
			[ 'mortgage/input', {
				name: 'amount',
				label: __( 'Amount', 'mortgage' ),
				value: 10000,
				min: 0
			} ],
			[ 'mortgage/input', {
				name: 'rate',
				label: __( 'Rate', 'mortgage' ),
				value: 4,
				min: 0,
				step: 0.01
			} ],
			[ 'mortgage/button', {
				text: __( 'Calculate', 'mortgage' ),
			} ],
		],
		scope: [ 'block', 'inserter' ],
	},
];

/**
 * Add `isActive` function to all `embed` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach( ( variation ) => {
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.type === variationAttributes.type;
} );

export default variations;
