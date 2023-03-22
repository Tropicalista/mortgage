import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const {
		hide,
		label,
		hideLabel,
		name,
		min,
		max,
		value,
		placeholder,
		help,
		readOnly,
		step,
	} = attributes;

	const labelClassName = classnames( {
		hide: hideLabel,
	} );

	const fieldClassName = classnames( {
		hide,
	} );

	const blockProps = useBlockProps.save( {
		className: fieldClassName,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="label"
				value={ label }
				className={ labelClassName }
				for={ name }
			/>
			<input
				type="number"
				name={ name }
				min={ min }
				max={ max }
				step={ step || undefined }
				required
				value={ value }
				placeholder={ placeholder }
				readOnly={ readOnly || undefined }
				id={ name }
			/>
			{ help && <RichText.Content tagName="small" value={ help } /> }
		</div>
	);
}
