import { __ } from '@wordpress/i18n';

import {
	useEffect,
	Fragment
} from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Settings from '../components/settings';

import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	AlignmentToolbar,
	RichText
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
export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId } = props;
	const blockProps = useBlockProps();
	//blockProps.className = classnames( blockProps.className );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'mortgage/button' ],
		templateLock: true,
		template: [ [ 'mortgage/button' ] ],
	} );

	return (
		<div { ...blockProps }>
			<Settings {...props} />
			<div>
				<RichText
					tagName="label"
					value={ attributes.label.amount }
					onChange={ ( val ) => {
					    setAttributes({ label: { ...attributes.label, amount: val } });
					}}
					placeholder={ __( 'Enter label...', 'mortgage' ) }
					allowedFormats={ [] }
				/>
				<input
					type="number"
					placeholder={ attributes.placeholder.amount }
					value={ attributes.defaults.amount }
					onChange={ ( e ) => {
					    setAttributes({ defaults: { ...attributes.defaults, amount: e.target.value } });
					}}
				/>
				<RichText
					tagName="small"
					value={ attributes.help.amount }
					onChange={ ( val ) => {
					    setAttributes({ help: { ...attributes.help, amount: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
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
				/>
				<input
					type="number"
					placeholder={ attributes.placeholder.rate }
					value={ attributes.defaults.rate }
					onChange={ ( e ) => {
					    setAttributes({ defaults: { ...attributes.defaults, rate: e.target.value } });
					}}
				/>
				<RichText
					tagName="small"
					value={ attributes.help.rate }
					onChange={ ( val ) => {
					    setAttributes({ help: { ...attributes.help, rate: val } });
					}}
					placeholder={ __( 'Enter help message...', 'mortgage' ) }
					allowedFormats= { allowedFormats }
				/>
			</div>
			{
				'duration' !== attributes.type &&
				<div>
					<RichText
						tagName="label"
						value={ attributes.label.term }
						onChange={ ( val ) => {
						    setAttributes({ label: { ...attributes.label, term: val } });
						}}
						placeholder={ __( 'Term', 'mortgage' ) }
						allowedFormats={ [] }
					/>
					<input
						type="number"
						placeholder={ attributes.placeholder.term }
						value={ attributes.defaults.term }
						onChange={ ( e ) => {
						    setAttributes({ defaults: { ...attributes.defaults, term: e.target.value } });
						}}
					/>
					<RichText
						tagName="small"
						value={ attributes.help.term }
						onChange={ ( val ) => {
						    setAttributes({ help: { ...attributes.help, term: val } });
						}}
						placeholder={ __( 'Enter help message...', 'mortgage' ) }
						allowedFormats= { allowedFormats }
					/>
				</div>
			}
			{
				'loan' === attributes.type &&
				<div>
					<RichText
						tagName="label"
						value={ attributes.label.frequency }
						onChange={ ( val ) => {
						    setAttributes({ label: { ...attributes.label, frequency: val } });
						}}
						placeholder={ __( 'Enter label...', 'mortgage' ) }
						allowedFormats={ [] }
					/>
					<select name="frequency">
						<option value="52">{ __( 'Weekly', 'mortgage' ) }</option>
						<option value="26">{ __( 'Fortnightly', 'mortgage' ) }</option>
						<option value="12">{ __( 'Monthly', 'mortgage' ) }</option>
						<option value="6">{ __( 'Bi-Monthly', 'mortgage' ) }</option>
						<option value="4">{ __( 'Quarterly', 'mortgage' ) }</option>
						<option value="2">{ __( 'Half-yearly', 'mortgage' ) }</option>
						<option value="1">{ __( 'Yearly', 'mortgage' ) }</option>
					</select>
					<RichText
						tagName="small"
						value={ attributes.help.frequency }
						onChange={ ( val ) => {
						    setAttributes({ help: { ...attributes.help, frequency: val } });
						}}
						placeholder={ __( 'Enter help message...', 'mortgage' ) }
						allowedFormats= { allowedFormats }
					/>
				</div>
			}
			{
				'rates' === attributes.type &&
				<div>
					<RichText
						tagName="label"
						value={ attributes.label.increment }
						onChange={ ( val ) => {
						    setAttributes({ label: { ...attributes.label, increment: val } });
						}}
						placeholder={ __( 'Increment', 'mortgage' ) }
						allowedFormats={ [] }
					/>
					<select name="increment">
						<option value="0.125">1/8%</option>
						<option value="0.250">1/4%</option>
						<option value="0.375">3/8%</option>
						<option value="0.5">1/2%</option>
						<option value="0.625">5/8%</option>
						<option value="0.875">7/8%</option>
						<option value="1">1%</option>
					</select>
					<RichText
						tagName="small"
						value={ attributes.help.increment }
						onChange={ ( val ) => {
						    setAttributes({ help: { ...attributes.help, increment: val } });
						}}
						placeholder={ __( 'Enter help message...', 'mortgage' ) }
						allowedFormats= { allowedFormats }
					/>
				</div>
			}
			<div>
				{ children }
			</div>
		</div>
	);
}
