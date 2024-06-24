import Settings from './settings';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( props ) {
	const blockProps = useBlockProps();
	const { children } = useInnerBlocksProps( blockProps, {} );

	return (
		<div { ...blockProps }>
			<Settings { ...props } />
			{ children }
		</div>
	);
}
