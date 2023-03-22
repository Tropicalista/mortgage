import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';

import { TextControl, ToggleControl, PanelBody } from '@wordpress/components';

export default function Settings( props ) {
	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Form', 'mortgage' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'Currency symbol', 'mortgage' ) }
					value={ attributes.currency }
					onChange={ ( val ) => setAttributes( { currency: val } ) }
				/>
				<ToggleControl
					label={ __( 'Show table', 'mortgage' ) }
					checked={ attributes.showTable }
					onChange={ ( val ) => setAttributes( { showTable: val } ) }
				/>
				<ToggleControl
					label={ __( 'Show year summary', 'mortgage' ) }
					checked={ attributes.yearSummary }
					onChange={ ( val ) =>
						setAttributes( { yearSummary: val } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
