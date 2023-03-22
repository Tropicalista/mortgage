import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';

const allowedFormats = [ 'core/bold', 'core/italic', 'core/link' ];

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				tagName="p"
				value={ text }
				onChange={ ( val ) => {
					setAttributes( { text: val } );
				} }
				allowedFormats={ allowedFormats }
				placeholder={ __( 'Installment', 'mortgage' ) }
			/>
		</div>
	);
}
