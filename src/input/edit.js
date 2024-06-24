import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
	ToggleControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { toggleLabel } from './icons';

const allowedFormats = [ 'core/bold', 'core/italic', 'core/link' ];

export default function Edit( { attributes, setAttributes } ) {
	const {
		hide,
		label,
		value,
		help,
		placeholder,
		showHelp,
		hideLabel,
		min,
		max,
		readOnly,
		step,
	} = attributes;

	const labelClassName = classnames( {
		hide: hideLabel,
	} );

	const fieldClassName = classnames( {
		hide,
	} );

	const blockProps = useBlockProps( {
		className: fieldClassName,
	} );

	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Toggle label', 'mortgage' ) }
						icon={ toggleLabel }
						isPressed={ hideLabel }
						onClick={ () => {
							setAttributes( { hideLabel: ! hideLabel } );
						} }
					/>
					<ToolbarButton
						label={ __( 'Show help message', 'mortgage' ) }
						icon={ 'editor-help' }
						isPressed={ showHelp }
						onClick={ () => {
							setAttributes( { showHelp: ! showHelp } );
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Options' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Placeholder', 'mortgage' ) }
						value={ placeholder }
						onChange={ ( val ) => {
							setAttributes( { placeholder: val } );
						} }
						type="number"
					/>
					<ToggleControl
						label={ __( 'Read Only', 'mortgage' ) }
						checked={ readOnly }
						onChange={ ( val ) => {
							setAttributes( { readOnly: val } );
						} }
					/>
					<TextControl
						label={ __( 'Min', 'mortgage' ) }
						value={ min }
						help={ __( 'Set minimum value', 'mortgage' ) }
						onChange={ ( val ) => {
							setAttributes( { min: Number( val ) } );
						} }
						type="number"
						min={ 0 }
					/>
					<TextControl
						label={ __( 'Max', 'mortgage' ) }
						help={ __( 'Set maximum value', 'mortgage' ) }
						value={ max }
						onChange={ ( val ) => {
							setAttributes( { max: Number( val ) } );
						} }
						type="number"
						max={ 100 }
						min={ 0 }
					/>
					<TextControl
						label={ __( 'Step', 'mortgage' ) }
						help={ __( 'Set step value', 'mortgage' ) }
						value={ step }
						onChange={ ( val ) => {
							setAttributes( { step: Number( val ) } );
						} }
						type="number"
						step={ 0.01 }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="label"
				value={ label }
				onChange={ ( val ) => {
					setAttributes( { label: val } );
				} }
				placeholder={ __( 'Enter label…', 'mortgage' ) }
				allowedFormats={ [] }
				className={ labelClassName }
			/>
			<input
				type="number"
				placeholder={ value }
				value={ value }
				onChange={ ( e ) => {
					setAttributes( { value: e.target.value } );
				} }
				min={ min }
				max={ max }
				step={ step || undefined }
				required
				readOnly={ readOnly || undefined }
			/>
			{ showHelp && (
				<RichText
					tagName="small"
					value={ help }
					onChange={ ( val ) => {
						setAttributes( { help: val } );
					} }
					placeholder={ __( 'Enter help message…', 'mortgage' ) }
					allowedFormats={ allowedFormats }
				/>
			) }
		</div>
	);
}
