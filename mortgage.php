<?php
/**
 * Plugin Name:     Mortgage
 * Description:     A straightforward and simple responsive mortgage calculator block with a clean flat design, featuring Home Price, Interest Rate, Mortgage Term (years).
 * Version:         0.1.2
 * Author:          Formello
 * Author URI: 		https://formello.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     mortgage
 *
 * @package         mortgage
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_mortgage_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "mortgage/mortgage" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'mortgage-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_register_script(
		'mortgage-block-frontend',
		plugins_url( 'build/frontend2.js', __FILE__ ),
		array( 'wp-i18n' ),
		$script_asset['version']
	);
	wp_set_script_translations( 'mortgage-block-editor', 'mortgage', plugin_dir_path(__FILE__) . 'languages/' );
	wp_set_script_translations( 'mortgage-block-frontend', 'mortgage', plugin_dir_path(__FILE__) . 'languages/' );

	$style_css = 'build/style-index.css';
	wp_register_style(
		'mortgage-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'mortgage/form',
		array(
			'editor_script' => 'mortgage-block-editor',
			'style'         => 'mortgage-block',
			'render_callback' => function( $attrs, $content ) {
				wp_enqueue_script( 'mortgage-block-frontend' );
				return $content;
			}
		)
	);
}
add_action( 'init', 'create_block_mortgage_block_init' );
