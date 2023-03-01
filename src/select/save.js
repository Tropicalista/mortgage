import classnames from 'classnames';
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		label,
		name,
		values,
		help,
		defaultValue
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="label"
				value={ label }
			/>
			<select name={ name }>
				{
					values.map( (i) => (
						<option key={ i.label } value={ i.value } selected={ defaultValue === i.value ? true : false }>{ i.label }</option>
					) )
				}
			</select>
			<RichText.Content
				tagName="small"
				value={ help }
			/>
		</div>
	);
}
