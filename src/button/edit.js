import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';

import classnames from 'classnames';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment } = attributes;

	const buttonClasses = classnames( alignment );

	const blockProps = useBlockProps( {
		className: buttonClasses,
	} );

	return (
		<RichText
			{ ...blockProps }
			tagName="button"
			allowedFormats={ [] }
			value={ text }
			onChange={ ( val ) => setAttributes( { text: val } ) }
			placeholder={ __( 'Enter button text…', 'mortgage' ) }
		/>
	);
}
