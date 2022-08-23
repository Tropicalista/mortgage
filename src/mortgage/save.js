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
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';
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
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<form { ...blockProps } noValidate 
			data-currency={ attributes.currency } 
			data-yearSummary={ attributes.yearSummary } 
			data-showTable={ attributes.showTable }
			data-type={ attributes.type }
		>
			<div>
				<RichText.Content tagName="label" value={ attributes.label.amount } />
				<input type="number" name="amount" min="0" required value={ attributes.defaults.amount } placeholder={ attributes.placeholder.amount } />
				{
					attributes.help.amount &&
					<RichText.Content tagName="small" value={ attributes.help.amount } />
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
			{
				'duration' !== attributes.type &&

				<div>
					<RichText.Content tagName="label" value={ attributes.label.term } />
					<input type="number" name="term" min="0" required value={ attributes.defaults.term } placeholder={ attributes.placeholder.term } />
					{
						attributes.help.term &&
						<RichText.Content tagName="small" value={ attributes.help.term } />
					}
				</div>
			}
			{
				'loan' === attributes.type &&
				<div>
					<RichText.Content tagName="label" value={ attributes.label.frequency } />
					<select name="frequency">
						<option value="12">{ __( 'Monthly', 'mortgage' ) }</option>
						<option value="6">{ __( 'Bi-Monthly', 'mortgage' ) }</option>
						<option value="4">{ __( 'Quarterly', 'mortgage' ) }</option>
						<option value="2">{ __( 'Half-yearly', 'mortgage' ) }</option>
						<option value="1">{ __( 'Yearly', 'mortgage' ) }</option>
					</select>
					{
						attributes.help.frequency &&
						<RichText.Content tagName="small" value={ attributes.help.frequency } />
					}
				</div>
			}		
			{
				'rates' === attributes.type &&
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
					{
						attributes.help.increment &&
						<RichText.Content tagName="small" value={ attributes.help.increment } />
					}
				</div>
			}
			<div {...innerBlocksProps} />

		</form>

	);
}
