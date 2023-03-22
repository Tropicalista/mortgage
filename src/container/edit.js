import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps();
	const { children } = useInnerBlocksProps( blockProps, {
		template: [ [ 'mortgage/form' ], [ 'mortgage/result' ] ],
	} );

	return <div { ...blockProps }>{ children }</div>;
}
