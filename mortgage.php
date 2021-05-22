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
function mortgage_block_init() {
    register_block_type_from_metadata( 
        __DIR__ . '/src/mortgage',
        array(
        	'attributes' => array(

        	),
			'render_callback' => function( $attrs, $content ) {
				wp_enqueue_script( 'mortgage-block-frontend' );
				return $content;
			}
        )
    );
    register_block_type_from_metadata( 
        __DIR__ . '/src/duration',
        array(
			'render_callback' => function( $attrs, $content ) {
				wp_enqueue_script( 'mortgage-duration-frontend' );
				return $content;
			}
        )
    );
    register_block_type_from_metadata( 
        __DIR__ . '/src/rates',
        array(
			'render_callback' => function( $attrs, $content ) {
				wp_enqueue_script( 'mortgage-rates-frontend' );
				return $content;
			}
        )
    );
}
add_action( 'init', 'mortgage_block_init' );


function create_block_mortgage_block_init2() {

	wp_register_script(
		'mortgage-block-frontend',
		plugins_url( 'build/frontend.js', __FILE__ ),
		array( 'wp-i18n' ),
	);
	wp_register_script(
		'mortgage-duration-frontend',
		plugins_url( 'build/duration.js', __FILE__ ),
		array( 'wp-i18n' ),
	);
	wp_register_script(
		'mortgage-rates-frontend',
		plugins_url( 'build/rates.js', __FILE__ ),
		array( 'wp-i18n' ),
	);
	wp_set_script_translations( 'mortgage-block-editor', 'mortgage', plugin_dir_path(__FILE__) . 'languages/' );
	wp_set_script_translations( 'mortgage-block-frontend', 'mortgage', plugin_dir_path(__FILE__) . 'languages/' );
}

add_action( 'init', 'create_block_mortgage_block_init2' );
