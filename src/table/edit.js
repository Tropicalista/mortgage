import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { summary } = attributes;

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Options' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Show year summary', 'mortgage' ) }
						checked={ summary }
						onChange={ ( val ) =>
							setAttributes( { summary: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<table>
				<thead>
					<tr>
						<th>{ __( 'Reult data', 'mortgage' ) }</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{ __( 'Reult data', 'mortgage' ) }</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
