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

<button
	<?php echo get_block_wrapper_attributes(
		array( 'class' => 'wp-element-button' )
	); ?>
	data-wp-on--click="actions.calculate"
	aria-controls="<?php echo esc_attr( $unique_id ); ?>"
	type="button"
>
	<?php echo $attributes['text']; ?>
</button>
