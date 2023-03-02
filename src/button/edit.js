import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
	InspectorAdvancedControls,
	RichText,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
} from '@wordpress/block-editor';

import { SelectControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import classnames from 'classnames';

export default function Edit( { attributes, setAttributes } ) {
	const { style, text } = attributes;

	const ALIGNMENT_CONTROLS = [
		{
			icon: 'align-left',
			title: __( 'Align Button Left', 'formello' ),
			align: 'left',
		},
		{
			icon: 'align-center',
			title: __( 'Align Button Center', 'formello' ),
			align: 'center',
		},
		{
			icon: 'align-right',
			title: __( 'Align Button Right', 'formello' ),
			align: 'right',
		},
		{
			icon: 'align-wide',
			title: __( 'Wide Button', 'formello' ),
			align: 'wide',
		},
	];

	//const borderRadius = style?.border?.radius;
	//const borderProps = useBorderProps( attributes );

	// not already merged in Gutenberg
	// const spacingProps = useSpacingProps( attributes );

	// Check for old deprecated numerical border radius. Done as a separate
	// check so that a borderRadius style won't overwrite the longhand
	// per-corner styles.
	if ( typeof borderRadius === 'number' ) {
		//borderProps.style.borderRadius = `${ borderRadius }px`;
	}

	const colorProps = useColorProps( attributes );

	const buttonClasses = classnames(
		//borderProps.className,
		colorProps.className,
		attributes.alignment
	);

	const blockProps = useBlockProps( {
		className: buttonClasses,
	} );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.alignment }
					alignmentControls={ ALIGNMENT_CONTROLS }
					onChange={ ( nextAlign ) => {
						setAttributes( { alignment: nextAlign } );
					} }
				/>
			</BlockControls>
			<RichText
				{ ...blockProps }
				tagName="button"
				allowedFormats={[]}
				value={ text }
				onChange={ ( val ) => setAttributes( { text: val } ) }
				placeholder={ __( 'Enter button text…', 'mortgage' ) }
			/>
		</>
	);
}
