<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );
$headers   = array(
	'loan'     => array(
		'#',
		__( 'Installment', 'mortgage' ),
		__( 'Interests', 'mortgage' ),
		__( 'Principal', 'mortgage' ),
		__( 'Balance', 'mortgage' ),
	),
	'duration' => array(
		__( 'Years', 'mortgage' ),
		__( 'Installment', 'mortgage' ),
		__( 'Interests', 'mortgage' ),
		__( 'Total', 'mortgage' ),
	),
	'rates'    => array(
		__( 'Rate', 'mortgage' ),
		__( 'Installment', 'mortgage' ),
		__( 'Interests', 'mortgage' ),
		__( 'Total', 'mortgage' ),
	),
);
$my_context = array(
	'loanData'    => array(),
	'durationData'    => array(),
	'rateData'    => array(),
	'tableHeader' => $headers[ $block->context['mortgage/type'] ] ?? 'loan',
	'type'        => $block->context['mortgage/type'],
);
?>
<div <?php echo get_block_wrapper_attributes(); ?> data-wp-class--show="context.showTable" data-wp-interactive="mortgage"
	<?php echo wp_interactivity_data_wp_context( $my_context ); ?>
	>
	<table data-wp-watch="callbacks.generateTable">
		<thead>
			<tr>
				<template data-wp-each="context.tableHeader" >
					<th data-wp-text="context.item"></th>
				</template>				
			</tr>
		</thead>
		<tbody>
			<template
				data-wp-each="context.loanData"
				data-wp-each-key="context.item"							
			>
				<tr>
					<td data-wp-text="context.item.#"></td>
					<td data-wp-text="context.item.payment"></td>
					<td data-wp-text="context.item.interest"></td>
					<td data-wp-text="context.item.principal"></td>
					<td data-wp-text="context.item.balance"></td>
				</tr>
			</template>
			<template
				data-wp-each="context.durationData"
				data-wp-each-key="context.item"							
			>
				<tr>
					<td data-wp-text="context.item.years"></td>
					<td data-wp-text="context.item.installment"></td>
					<td data-wp-text="context.item.interests"></td>
					<td data-wp-text="context.item.total"></td>
				</tr>
			</template>
			<template
				data-wp-each="context.rateData"
				data-wp-each-key="context.item"							
			>
				<tr>
					<td><span data-wp-text="context.item.rate"></span><small>%</small></td>
					<td data-wp-text="context.item.installment"></td>
					<td data-wp-text="context.item.interests"></td>
					<td data-wp-text="context.item.total"></td>
				</tr>
			</template>
		</tbody>
	</table>
</div>
