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
?>
<div data-wp-bind--hidden="!state.result">
	<div
		<?php echo get_block_wrapper_attributes(); ?>
		data-wp-on--click="actions.calculate"
		aria-controls="<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php echo empty( $attributes['text'] ) ? esc_html_e( 'Rata:', 'mortgage' ) : esc_html( $attributes['text'] ); ?>
		<b data-wp-text="state.result"></b>
	</div>

	<div class="wp-block-mortgage-result">
		<p>
			<?php echo esc_html_e( 'Amount', 'mortgage' ); ?>: <b><small data-wp-text="state.currency"></small><span data-wp-text="state.amount"></span></b><br />
			<?php echo esc_html_e( 'Rate', 'mortgage' ); ?>: <b><span data-wp-text="state.rate"></span><small>%</small></b><br />
			<?php echo esc_html_e( 'Number of payments', 'mortgage' ); ?>: <b data-wp-text="state.numberOfPayments"></b><br />
			<?php echo esc_html_e( 'Recurring payment', 'mortgage' ); ?>: <b><small data-wp-text="state.currency"></small><span data-wp-text="state.installment"></span></b><br />
			<?php echo esc_html_e( 'Total paid', 'mortgage' ); ?>: <b><small data-wp-text="state.currency"></small><span data-wp-text="state.totalPaid"></span></b>
		</p>
	</div>
</div>