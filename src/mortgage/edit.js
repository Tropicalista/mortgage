import { __ } from '@wordpress/i18n';

import Settings from '../components/settings';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( props ) {
	const blockProps = useBlockProps();

	const { children } = useInnerBlocksProps( blockProps, {
		//templateLock: 'insert',
		template: [
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
					max: 50,
				},
			],
			[
				'mortgage/select',
				{
					name: 'frequency',
					label: __( 'Frequency', 'mortgage' ),
					values: [
						{ value: 52, label: __( 'Weekly', 'mortgage' ) },
						{ value: 26, label: __( 'Fortnightly', 'mortgage' ) },
						{ value: 12, label: __( 'Monthly', 'mortgage' ) },
						{ value: 6, label: __( 'Bi-Monthly', 'mortgage' ) },
						{ value: 4, label: __( 'Quarterly', 'mortgage' ) },
						{ value: 2, label: __( 'Half-yearly', 'mortgage' ) },
						{ value: 1, label: __( 'Yearly', 'mortgage' ) },
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
	} );

	return (
		<div { ...blockProps }>
			<Settings { ...props } />
			{ children }
		</div>
	);
}
