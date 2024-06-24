import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { hide, label, hideLabel, name, values, help, defaultValue } =
		attributes;

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
			/>
			<select name={ name }>
				{ values.map( ( i ) => (
					<option
						key={ i.label }
						value={ i.value }
						selected={ defaultValue === i.value ? true : false }
						hidden={ i.hidden || undefined }
					>
						{ i.label }
					</option>
				) ) }
			</select>
			<RichText.Content tagName="small" value={ help } />
		</div>
	);
}
