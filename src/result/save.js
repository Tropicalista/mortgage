import classnames from 'classnames';
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		text,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="p"
				value={ text }
			/>
		</div>
	);
}
