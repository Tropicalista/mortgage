import classnames from 'classnames';
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( { attributes, className } ) {
	const {
		label,
		name,
		min,
		max,
		value,
		placeholder,
		help,
		readOnly,
		step
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content tagName="label" value={ label } />
			<input type="number" 
				name={ name } 
				min={ min } 
				max={ max } 
				step={ step || undefined }
				required 
				value={ value } 
				placeholder={ placeholder } 
				readOnly={ readOnly || undefined } />
			{
				help &&
				<RichText.Content tagName="small" value={ help } />
			}
		</div>
	);
}
