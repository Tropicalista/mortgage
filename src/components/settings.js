import { __ } from '@wordpress/i18n';

import { 
	useEffect, 
	Fragment 
} from '@wordpress/element';

import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
	PanelRow,
	PanelBody,
	TextareaControl,
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Settings( props ) {

	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Form', 'mortgage' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'Currency symbol', 'mortgage' ) }
					value={ attributes.currency }
					onChange={ ( val ) => setAttributes({ currency: val }) }
				/>
				<ToggleControl
					label={ __( 'Show table', 'mortgage' ) }
					checked={ attributes.showTable }
					onChange={ ( val ) => setAttributes({ showTable: val }) }
				/>
				<ToggleControl
					label={ __( 'Show year summary', 'mortgage' ) }
					checked={ attributes.yearSummary }
					onChange={ ( val ) => setAttributes({ yearSummary: val }) }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
