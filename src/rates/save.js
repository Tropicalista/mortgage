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
		'bolded-label': attributes.boldedLabel,
		'wp-block-mortgage-form': true
	} );

	return (
		<form { ...blockProps } noValidate data-currency={ attributes.currency } data-yearSummary={ attributes.yearSummary }>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.amount } />
				<input type="number" name="amount" min="0" required value={ attributes.defaults.amount } placeholder={ attributes.placeholder.amount } />
				{
					attributes.help.amount &&
					<RichText.Content tagName="small" value={ attributes.help.amount } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.term } />
				<input type="number" name="term" min="0" step="1" required value={ attributes.defaults.term } placeholder={ attributes.placeholder.term } />
				{
					attributes.help.term &&
					<RichText.Content tagName="small" value={ attributes.help.term } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.rate } />
				<input type="number" name="rate" min="0" step="0.01" required value={ attributes.defaults.rate } placeholder={ attributes.placeholder.rate } />
				{
					attributes.help.rate &&
					<RichText.Content tagName="small" value={ attributes.help.rate } />
				}
			</div>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.increment } />
				<select name="increment">
					<option value="0.125">1/8%</option>
					<option value="0.250">1/4%</option>
					<option value="0.375">3/8%</option>
					<option value="0.5">1/2%</option>
					<option value="0.625">5/8%</option>
					<option value="0.875">7/8%</option>
					<option value="1">1%</option>
				</select>
			</div>
			<div>
				<button className={ 'mortgage-btn' }>{ attributes.button }</button>
			</div>
		</form>
	);
}
