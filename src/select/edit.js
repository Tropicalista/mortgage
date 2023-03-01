import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls
} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton, SelectControl, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';

import classnames from 'classnames';

const allowedFormats = [
	'core/bold',
	'core/italic',
	'core/link',
]

export default function Edit( { attributes, setAttributes } ) {
	const { label, name, values, showHelp, help, defaultValue } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Show help message' ) }
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
					<SelectControl
						label={ __( 'Default value', 'mortgage' ) }
						onChange={ ( val ) => {
							setAttributes( { defaultValue: Number(val) } );
						} }
			            value={ defaultValue }
			            options={ values }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="label"
				value={ label }
				onChange={ ( val ) => { 
				    setAttributes({ label: val });
				}}
				placeholder={ __( 'Increment', 'mortgage' ) }
				allowedFormats={ [] }
			/>
			<select name="increment" value={ defaultValue } onChange={ () => console.log('ciao') }>
				{
					values.map( (i) => (
						<option key={ i.label } value={ i.value }>{ i.label }</option>
					) )
				}
			</select>
			{
				showHelp && 
				<RichText
					tagName="small"
					value={ help }
					onChange={ ( val ) => { 
					    setAttributes({ help: val });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
				/>
			}
		</div>
	);
}
