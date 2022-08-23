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
				{
					'loan' === attributes.type &&
					<Fragment>
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
					</Fragment>
				}
			</PanelBody>
			<PanelBody title={ __( 'Placeholders', 'mortgage' ) } initialOpen={ false }>
				<TextControl
					label={ __( 'Amount', 'mortgage' ) }
					value={ attributes.placeholder.amount }
					onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, amount: val } }) }
				/>
				<TextControl
					label={ __( 'Rate', 'mortgage' ) }
					value={ attributes.placeholder.rate }
					onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, rate: val } }) }
				/>
				{
					'duration' !== attributes.type &&
					<TextControl
						label={ __( 'Term', 'mortgage' ) }
						value={ attributes.placeholder.term }
						onChange={ ( val ) => setAttributes({ placeholder: { ...attributes.placeholder, term: val } }) }
					/>
				}
			</PanelBody>
		</InspectorControls>
	);
}
