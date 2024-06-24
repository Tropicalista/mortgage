import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
	SelectControl,
	CheckboxControl,
	PanelBody,
} from '@wordpress/components';

const allowedFormats = [ 'core/bold', 'core/italic', 'core/link' ];

/**
 * Internal dependencies
 */
import { toggleLabel } from '../input/icons';

export default function Edit( { attributes, setAttributes } ) {
	const { hide, label, hideLabel, values, showHelp, help, defaultValue } =
		attributes;

	const labelClassName = classnames( {
		hide: hideLabel,
	} );

	const fieldClassName = classnames( {
		hide,
	} );

	const blockProps = useBlockProps( {
		className: fieldClassName,
	} );

	const changeOption = ( idx, val ) => {
		const options = [ ...values ];
		options[ idx ] = { ...options[ idx ], hidden: val };
		setAttributes( { values: options } );
	};

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
					{ values.map( ( opt, i ) => {
						return (
							<CheckboxControl
								label={ opt.label }
								checked={ ! opt.hidden }
								onChange={ ( val ) => changeOption( i, ! val ) }
								key={ i }
							/>
						);
					} ) }
					<SelectControl
						label={ __( 'Default value', 'mortgage' ) }
						onChange={ ( val ) => {
							setAttributes( { defaultValue: Number( val ) } );
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
					setAttributes( { label: val } );
				} }
				placeholder={ __( 'Increment', 'mortgage' ) }
				allowedFormats={ [] }
				className={ labelClassName }
			/>
			<select
				name="increment"
				value={ defaultValue }
				onChange={ ( val ) => setAttributes( { defaultValue: val } ) }
			>
				{ values.map( ( i ) => (
					<option
						key={ i.label }
						value={ i.value }
						hidden={ i.hidden }
					>
						{ i.label }
					</option>
				) ) }
			</select>
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
