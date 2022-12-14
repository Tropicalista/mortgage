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
    const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<form { ...blockProps } noValidate 
			data-currency={ attributes.currency } 
			data-yearSummary={ attributes.yearSummary } 
			data-showTable={ attributes.showTable }
			data-type={ attributes.type }
			{...innerBlocksProps}
		>
		</form>
	);
}
