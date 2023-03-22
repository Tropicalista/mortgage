import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';

import classnames from 'classnames';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment } = attributes;

	const ALIGNMENT_CONTROLS = [
		{
			icon: 'align-left',
			title: __( 'Align Left', 'formello' ),
			align: 'left',
		},
		{
			icon: 'align-center',
			title: __( 'Align Center', 'formello' ),
			align: 'center',
		},
		{
			icon: 'align-right',
			title: __( 'Align Right', 'formello' ),
			align: 'right',
		},
		{
			icon: 'align-wide',
			title: __( 'Wide', 'formello' ),
			align: 'wide',
		},
	];

	const buttonClasses = classnames( alignment );

	const blockProps = useBlockProps( {
		className: buttonClasses,
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ 'align-' + alignment }
						label={ __( 'Align' ) }
						controls={ ALIGNMENT_CONTROLS.map( ( control ) => {
							const { align } = control;
							const isActive = align === alignment;

							return {
								...control,
								isActive,
								onClick: () =>
									setAttributes( { alignment: align } ),
							};
						} ) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...blockProps }
				tagName="button"
				allowedFormats={ [] }
				value={ text }
				onChange={ ( val ) => setAttributes( { text: val } ) }
				placeholder={ __( 'Enter button text…', 'mortgage' ) }
			/>
		</>
	);
}
