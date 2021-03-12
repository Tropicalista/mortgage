/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes, className } ) {
	const blockProps = useBlockProps.save();
	blockProps.className = classnames( blockProps.className, {
		'as-row': attributes.asRow,
		'bolded-label': attributes.boldedLabel
	} );
console.log(blockProps)
	return (
		<form { ...blockProps } noValidate>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.principal } />
				<input type="number" name="principal" min="0" required />
				{
					attributes.help.principal &&
					<RichText.Content tagName="small" value={ attributes.help.principal } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.rate } />
				<input type="number" name="rate" min="0" step="0.01" required />
				{
					attributes.help.rate &&
					<RichText.Content tagName="small" value={ attributes.help.rate } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.term } />
				<input type="number" name="term" min="0" required />
				{
					attributes.help.term &&
					<RichText.Content tagName="small" value={ attributes.help.term } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.frequency } />
				<select name="frequency">
					<option value="12">Monthly</option>
					<option value="4">Quarterly</option>
					<option value="2">Semi-annually</option>
				</select>
				{
					attributes.help.frequency &&
					<RichText.Content tagName="small" value={ attributes.help.frequency } />
				}
			</div>
			<div>
				<button className={ 'mortgage-btn' }>{ attributes.button }</button>
			</div>
		</form>

	);
}
