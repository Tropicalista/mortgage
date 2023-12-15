import classnames from 'classnames';
import {
	useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, alignment, style } = attributes;

	const borderRadius = style?.border?.radius;
	const borderProps = getBorderClassesAndStyles( attributes );

	// Check for old deprecated numerical border radius. Done as a separate
	// check so that a borderRadius style won't overwrite the longhand
	// per-corner styles.
	if ( typeof borderRadius === 'number' ) {
		borderProps.style.borderRadius = `${ borderRadius }px`;
	}

	const colorProps = getColorClassesAndStyles( attributes );

	const buttonClasses = classnames(
		colorProps.className,
		alignment,
		'mortgage-btn',
		'wp-element-button'
	);

	const blockProps = useBlockProps.save( {
		className: buttonClasses,
		style: colorProps.style,
	} );

	return <button { ...blockProps }>{ text }</button>;
}
