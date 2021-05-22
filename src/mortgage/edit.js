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
export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	blockProps.className = classnames( blockProps.className, {
		'as-row': attributes.asRow,
		'bolded-label': attributes.boldedLabel
	} );

	return (
		<div { ...blockProps }>
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
						label={ __( 'Display label on side', 'mortgage' ) }
						checked={ attributes.asRow }
						onChange={ ( val ) => setAttributes({ asRow: val }) }
					/>
					<ToggleControl
						label={ __( 'Bolded label', 'mortgage' ) }
						checked={ attributes.boldedLabel }
						onChange={ ( val ) => setAttributes({ boldedLabel: val }) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Labels', 'mortgage' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'Amount Label', 'mortgage' ) }
						value={ attributes.label.amount }
						onChange={ ( val ) => setAttributes({ label: { ...attributes.label, amount: val } }) }
					/>
					<TextControl
						label={ __( 'Rate Label', 'mortgage' ) }
						value={ attributes.label.rate }
						onChange={ ( val ) => setAttributes({ label: { ...attributes.label, rate: val } }) }
					/>
					<TextControl
						label={ __( 'Term Label', 'mortgage' ) }
						value={ attributes.label.term }
						onChange={ ( val ) => setAttributes({ label: { ...attributes.label, term: val } }) }
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
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.amount }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, amount: val } });
					}}
					placeholder={ __( 'Enter label...', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.amount } disabled={ true } value={ attributes.defaults.amount } />
				<RichText
					tagName="small"
					value={ attributes.help.amount }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, amount: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
					keepPlaceholderOnFocus={ true }
				/>
			</div>
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.rate }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, rate: val } });
					}}
					placeholder={ __( 'Rate', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.rate } disabled={ true } value={ attributes.defaults.rate } />
				<RichText
					tagName="small"
					value={ attributes.help.rate }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, rate: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
					keepPlaceholderOnFocus={ true }
				/>
			</div>
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.term }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, term: val } });
					}}
					placeholder={ __( 'Term', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.term } disabled={ true } value={ attributes.defaults.term } />
				<RichText
					tagName="small"
					value={ attributes.help.term }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, term: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
					keepPlaceholderOnFocus={ true }
				/>
			</div>
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.frequency }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, frequency: val } });
					}}
					placeholder={ __( 'Enter label...', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<select name="frequency" disabled>
					<option value="12">{ __( 'Monthly', 'mortgage' ) }</option>
				</select>
				<RichText
					tagName="small"
					value={ attributes.help.frequency }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, frequency: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
					keepPlaceholderOnFocus={ true }
				/>
			</div>
			<div>
				<button>{ attributes.button }</button>
			</div>
		</div>
	);
}
