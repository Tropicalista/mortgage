import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<form
			{ ...blockProps }
			noValidate
			data-currency={ attributes.currency }
			data-yearSummary={ attributes.yearSummary }
			data-showTable={ attributes.showTable }
			data-type={ attributes.type }
			data-wp-interactive="mortgage"
			data-wp-watch="callbacks.fields"
			data-wp-context='{ "result": false, "showTable": false }'
			{ ...innerBlocksProps }
		></form>
	);
}
