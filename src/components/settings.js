import { __ } from '@wordpress/i18n';

import { 
	useEffect, 
	Fragment 
} from '@wordpress/element';

import {
	useBlockProps,
	InspectorControls,
	AlignmentToolbar,
	RichText,
} from '@wordpress/block-editor';

import {
	TextControl,
	__experimentalNumberControl as NumberControl,
	ToggleControl,
	PanelRow,
	PanelBody,
	TextareaControl,
} from '@wordpress/components';

const allowedFormats = [
	'core/bold',
	'core/italic',
	'core/link',
]

import classnames from 'classnames';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Settings( { attributes, setAttributes } ) {

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Form Options', 'mortgage' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'Button text', 'mortgage' ) }
					value={ attributes.button }
					onChange={ ( val ) => setAttributes({ button: val }) }
				/>
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
				<ToggleControl
					label={ __( 'Bolded label', 'mortgage' ) }
					checked={ attributes.boldedLabel }
					onChange={ ( val ) => setAttributes({ boldedLabel: val }) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Default Values', 'mortgage' ) } initialOpen={ false }>
				<NumberControl
					label={ __( 'Amount Default Value', 'mortgage' ) }
					value={ attributes.defaults.amount }
					onChange={ ( val ) => setAttributes({ defaults: { ...attributes.defaults, amount: val } }) }
				/>
				<NumberControl
					label={ __( 'Rate Default Value', 'mortgage' ) }
					value={ attributes.defaults.rate }
					onChange={ ( val ) => setAttributes({ defaults: { ...attributes.defaults, rate: val } }) }
				/>
				<NumberControl
					label={ __( 'Term Default Value', 'mortgage' ) }
					value={ attributes.defaults.term }
					onChange={ ( val ) => setAttributes({ defaults: { ...attributes.defaults, term: val } }) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Placeholder Options', 'mortgage' ) } initialOpen={ false }>
				<TextControl
					label={ __( 'Amount Placeholder', 'mortgage' ) }
					value={ attributes.placeholder.amount }
					onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, amount: val } }) }
				/>
				<TextControl
					label={ __( 'Rate Placeholder', 'mortgage' ) }
					value={ attributes.placeholder.rate }
					onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, rate: val } }) }
				/>
				<TextControl
					label={ __( 'Term Placeholder', 'mortgage' ) }
					value={ attributes.placeholder.term }
					onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, term: val } }) }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
