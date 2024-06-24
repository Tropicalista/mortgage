<?php
/**
 * Plugin Name: Mortgage
 * Description: A simple responsive mortgage calculator block with a clean flat design.
 * Version:     0.4.0
 * Author:      Calcolo Rata Mutuo
 * Author URI:  https://www.calcoloratamutuo.net/
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mortgage
 *
 * @package mortgage
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mortgage2_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
	register_block_type_from_metadata( __DIR__ . '/build/input' );
	register_block_type_from_metadata( __DIR__ . '/build/select' );
	register_block_type_from_metadata( __DIR__ . '/build/button' );
	register_block_type_from_metadata( __DIR__ . '/build/result' );
	register_block_type_from_metadata( __DIR__ . '/build/table' );
}
add_action( 'init', 'mortgage2_block_init' );
