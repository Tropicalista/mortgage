import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	useInnerBlocksProps,
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
	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		template: [
			[ 'mortgage/form' ],
			[ 'mortgage/result' ]
		],
	} );

	return (
		<div {...blockProps}>
			{ children }
		</div>
	);
}
