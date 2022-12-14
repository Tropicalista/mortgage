import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls
} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';

import classnames from 'classnames';

const allowedFormats = [
	'core/bold',
	'core/italic',
	'core/link',
]

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<RichText
				tagName="p"
				value={ text }
				onChange={ ( val ) => { 
				    setAttributes({ text: val });
				}}
				placeholder={ __( 'Installment', 'mortgage' ) }
			/>
		</div>
	);
}
