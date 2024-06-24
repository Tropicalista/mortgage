import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, context } ) {
	const { text, resume } = attributes;

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				tagName="span"
				allowedFormats={ [] }
				value={ text }
				onChange={ ( val ) => setAttributes( { text: val } ) }
				placeholder={ __( 'Enter text…', 'mortgage' ) }
			/>
			<span> 100 { context[ 'mortgage/currency' ] }</span>
		</div>
	);
}
