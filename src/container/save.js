import classnames from 'classnames';
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
    const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<div { ...blockProps }
			{...innerBlocksProps}
		>
		</div>
	);
}
