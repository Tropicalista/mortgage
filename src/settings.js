import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { TextControl, ToggleControl, PanelBody } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

export default function Settings( props ) {
	const { attributes, setAttributes, clientId } = props;

	const { innerBlocks, hasTable, tables } = useSelect(
		( select ) => {
			const { getBlocks, getBlocksByName } = select( blockEditorStore );
			return {
				innerBlocks: getBlocks( clientId ),
				hasTable: getBlocksByName( 'mortgage/table' ).length,
				tables: getBlocksByName( 'mortgage/table' ),
			};
		},
		[ clientId ]
	);

	const { insertBlocks, removeBlocks } = useDispatch( blockEditorStore );

	const addTable = () => {
		const table = createBlock( 'mortgage/table', {} );
		insertBlocks( table, innerBlocks.length, clientId );
	};

	const removeTable = () => {
		console.log( tables )
		removeBlocks( tables );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Form', 'mortgage' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'Currency symbol', 'mortgage' ) }
					value={ attributes.currency }
					onChange={ ( val ) => setAttributes( { currency: val } ) }
				/>
				{ 'loan' === attributes.type && (
					<ToggleControl
						label={ __( 'Show table', 'mortgage' ) }
						checked={ hasTable }
						onChange={ () => {
							if ( ! hasTable ) {
								addTable();
							} else {
								removeTable();
							}
						} }
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
}
