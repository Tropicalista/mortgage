<?php
/**
 * Plugin Name: Mortgage
 * Description: A simple responsive mortgage calculator block with a clean flat design.
 * Version:     0.3.1
 * Author:      Calcolo Rata Mutuo
 * Author URI:  https://www.calcoloratamutuo.net/
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mortgage
 *
 * @package mortgage
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function mortgage_block_init() {
	register_block_type_from_metadata(
		__DIR__,
	);
}
add_action( 'init', 'mortgage_block_init' );
