
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

import './editor.scss';

const allowedFormats = [
	'core/bold',
	'core/italic',
	'core/link',
]

import './editor.scss';
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
				<PanelBody title="Fields Options" initialOpen={ true }>
					<TextControl
						label={ __( 'Principal Placeholder', 'mortgage' ) }
						value={ attributes.placeholder.principal }
						onChange={ ( val, index ) => setAttributes({ placeholder: { ...attributes.placeholder, principal: val } }) }
					/>
					<TextControl
						label={ __( 'Rate Placeholder', 'mortgage' ) }
						value={ attributes.placeholder.rate }
						onChange={ ( val, index ) => setAttributes({ placeholder: { ...attributes.placeholder, rate: val } }) }
					/>
					<TextControl
						label={ __( 'Term Placeholder', 'mortgage' ) }
						value={ attributes.placeholder.term }
						onChange={ ( val, index ) => setAttributes({ placeholder: { ...attributes.placeholder, term: val } }) }
					/>
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
			</InspectorControls>
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.principal }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, principal: val } });
					}}
					placeholder={ __( 'Enter label...', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.principal } />
				<RichText
					tagName="small"
					value={ attributes.help.principal }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, principal: val } });
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
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.rate } />
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
				<input type="number" name="" readOnly placeholder={ attributes.placeholder.term } />
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
					value={ attributes.label.periods }
					onChange={ ( val ) => { 
					    setAttributes({ label: { ...attributes.label, periods: val } });
					}}
					placeholder={ __( 'Enter label...', 'mortgage' ) }
					allowedFormats={ [] }
					keepPlaceholderOnFocus={ true }
				/>
				<select name="periods" disabled>
					<option value="12">Monthly</option>
				</select>
				<RichText
					tagName="small"
					value={ attributes.help.periods }
					onChange={ ( val ) => { 
					    setAttributes({ help: { ...attributes.help, periods: val } });
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
