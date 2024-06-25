import { __ } from '@wordpress/i18n';

const variations = [
	{
		name: 'loan',
		title: __( 'Mortgage calculator', 'mortgage' ),
		icon: 'calculator',
		innerBlocks: [
			[
				'mortgage/input',
				{
					name: 'amount',
					label: __( 'Amount', 'mortgage' ),
					value: 10000,
					min: 0,
				},
			],
			[
				'mortgage/input',
				{
					name: 'rate',
					label: __( 'Rate', 'mortgage' ),
					value: 4,
					min: 0,
					step: 0.01,
				},
			],
			[
				'mortgage/input',
				{
					name: 'term',
					label: __( 'Term', 'mortgage' ),
					value: 10,
				},
			],
			[
				'mortgage/select',
				{
					name: 'frequency',
					label: __( 'Frequency', 'mortgage' ),
					values: [
						{
							value: 52,
							label: __( 'Weekly', 'mortgage' ),
							hidden: true,
						},
						{
							value: 26,
							label: __( 'Fortnightly', 'mortgage' ),
							hidden: true,
						},
						{
							value: 12,
							label: __( 'Monthly', 'mortgage' ),
							hidden: false,
						},
						{
							value: 6,
							label: __( 'Bi-Monthly', 'mortgage' ),
							hidden: false,
						},
						{
							value: 4,
							label: __( 'Quarterly', 'mortgage' ),
							hidden: false,
						},
						{
							value: 2,
							label: __( 'Half-yearly', 'mortgage' ),
							hidden: false,
						},
						{
							value: 1,
							label: __( 'Yearly', 'mortgage' ),
							hidden: true,
						},
					],
				},
			],
			[
				'mortgage/button',
				{
					text: __( 'Calculate', 'mortgage' ),
				},
			],
			[
				'mortgage/result',
				{
					text: __( 'Installment:', 'mortgage' ),
				},
			],
		],
		attributes: {
			type: 'loan',
		},
		scope: [ 'block', 'inserter' ],
		isDefault: true,
	},
	{
		name: 'two-column-loan',
		title: __( 'Mortgage calculator (2 cols)', 'mortgage' ),
		icon: 'calculator',
		innerBlocks: [
			[
				'core/columns',
				{},
				[
					[ 'core/column', {} ],
					[
						'core/column',
						{},
						[
							[
								'mortgage/input',
								{
									name: 'amount',
									label: __( 'Amount', 'mortgage' ),
									value: 10000,
									min: 0,
								},
							],
							[
								'mortgage/input',
								{
									name: 'rate',
									label: __( 'Rate', 'mortgage' ),
									value: 4,
									min: 0,
									step: 0.01,
								},
							],
							[
								'mortgage/input',
								{
									name: 'term',
									label: __( 'Term', 'mortgage' ),
									value: 10,
								},
							],
							[
								'mortgage/select',
								{
									name: 'frequency',
									label: __( 'Frequency', 'mortgage' ),
									values: [
										{
											value: 52,
											label: __( 'Weekly', 'mortgage' ),
										},
										{
											value: 26,
											label: __(
												'Fortnightly',
												'mortgage'
											),
										},
										{
											value: 12,
											label: __( 'Monthly', 'mortgage' ),
										},
										{
											value: 6,
											label: __(
												'Bi-Monthly',
												'mortgage'
											),
										},
										{
											value: 4,
											label: __(
												'Quarterly',
												'mortgage'
											),
										},
										{
											value: 2,
											label: __(
												'Half-yearly',
												'mortgage'
											),
										},
										{
											value: 1,
											label: __( 'Yearly', 'mortgage' ),
										},
									],
								},
							],
							[
								'mortgage/button',
								{
									text: __( 'Calculate', 'mortgage' ),
								},
							],
						],
					],
				],
			],
			[
				'mortgage/result',
				{
					text: __( 'Installment:', 'mortgage' ),
				},
			],
		],
		attributes: {
			type: 'loan',
		},
		scope: [ 'block', 'inserter' ],
		isDefault: true,
	},
	{
		name: 'rates',
		title: __( 'Rates Comparator', 'mortgage' ),
		icon: 'calculator',
		innerBlocks: [
			[
				'mortgage/input',
				{
					name: 'amount',
					label: __( 'Amount', 'mortgage' ),
					value: 10000,
					min: 0,
				},
			],
			[
				'mortgage/input',
				{
					name: 'rate',
					label: __( 'Rate', 'mortgage' ),
					value: 4,
					min: 0,
					step: 0.01,
				},
			],
			[
				'mortgage/input',
				{
					name: 'term',
					label: __( 'Term', 'mortgage' ),
					value: 10,
				},
			],
			[
				'mortgage/select',
				{
					name: 'increment',
					label: __( 'Increment', 'mortgage' ),
					values: [
						{ value: 0.125, label: '1/8%' },
						{ value: 0.25, label: '1/4%' },
						{ value: 0.375, label: '3/8%' },
						{ value: 0.5, label: '1/2%' },
						{ value: 0.625, label: '5/8%' },
						{ value: 0.875, label: '7/8%' },
						{ value: 1, label: '1%' },
					],
				},
			],
			[
				'mortgage/button',
				{
					text: __( 'Calculate', 'mortgage' ),
				},
			],
			[
				'mortgage/table',
				{
					lock: {
						move: false,
						remove: true,
					},
				},
			],
		],
		attributes: {
			type: 'rates',
		},
		scope: [ 'block', 'inserter' ],
		isDefault: true,
	},
	{
		name: 'duration',
		title: __( 'Duration Comparator', 'mortgage' ),
		icon: 'calculator',
		innerBlocks: [
			[
				'mortgage/input',
				{
					name: 'amount',
					label: __( 'Amount', 'mortgage' ),
					value: 10000,
					min: 0,
				},
			],
			[
				'mortgage/input',
				{
					name: 'rate',
					label: __( 'Rate', 'mortgage' ),
					value: 4,
					min: 0,
					step: 0.01,
				},
			],
			[
				'mortgage/button',
				{
					text: __( 'Calculate', 'mortgage' ),
				},
			],
			[
				'mortgage/table',
				{
					lock: {
						move: false,
						remove: true,
					},
				},
			],
		],
		attributes: {
			type: 'duration',
		},
		scope: [ 'block', 'inserter' ],
		isDefault: true,
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
