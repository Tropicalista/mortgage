import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata, {
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="52px"
			height="52px"
			viewBox="0 0 52 52"
			enableBackground="new 0 0 52 52"
		>
			<path
				d="M44.8,49.5H7.2c-2.6,0-4.7-2.1-4.7-4.7V7.2c0-2.6,2.1-4.7,4.7-4.7h37.6c2.6,0,4.7,2.1,4.7,4.7v37.6
	C49.5,47.4,47.4,49.5,44.8,49.5z M8.8,10.3v31.3c0,0.9,0.7,1.6,1.6,1.6h31.3c0.9,0,1.6-0.7,1.6-1.6V10.3c0-0.9-0.7-1.6-1.6-1.6H10.4
	C9.5,8.8,8.8,9.5,8.8,10.3z"
			/>
			<path
				d="M36.2,20.3h-2.9l1.2-4.8v-0.1c0-0.2-0.1-0.4-0.4-0.4h-2.3c-0.2,0-0.3,0.1-0.4,0.3l-1.2,4.9h-5.8l1.2-4.8
	v-0.1c0-0.2-0.1-0.4-0.4-0.4h-2.3c-0.2,0-0.3,0.1-0.4,0.3l-1.3,4.9h-3.2c-0.2,0-0.3,0.1-0.4,0.3l-0.6,2.2v0.1c0,0.2,0.1,0.4,0.4,0.4
	h3l-1.4,5.6h-3.1c-0.2,0-0.3,0.1-0.4,0.3l-0.6,2.2v0.1c0,0.2,0.1,0.4,0.4,0.4h2.9l-1.2,4.8v0.1c0,0.2,0.1,0.4,0.4,0.4h2.3
	c0.2,0,0.3-0.1,0.4-0.3l1.3-5h5.7L26,36.4v0.1c0,0.2,0.1,0.4,0.4,0.4h2.3c0.2,0,0.3-0.1,0.4-0.3l1.3-5h3.2c0.2,0,0.3-0.1,0.4-0.3
	l0.6-2.2V29c0-0.2-0.1-0.4-0.4-0.4h-3l1.4-5.6h3.1c0.2,0,0.3-0.1,0.4-0.3l0.6-2.2v-0.1C36.6,20.5,36.4,20.3,36.2,20.3L36.2,20.3z
	 M28.1,28.8h-5.8l1.4-5.6h5.7L28.1,28.8z"
			/>
		</svg>
	),

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
