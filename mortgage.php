<?php
/**
 * Plugin Name: Mortgage
 * Description: A simple responsive mortgage calculator block with a clean flat design.
 * Version:     0.2.6
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
function mortgage_block_init()
{
    wp_register_script(
        'mortgage-block-frontend',
        plugins_url('build/frontend.js', __FILE__),
        array( 'wp-i18n' ),
    );

    load_plugin_textdomain( 'mortgage', false, plugin_dir_path(__FILE__) . 'languages');
    wp_set_script_translations( 'mortgage-form-editor-script', 'mortgage', plugin_dir_path(__FILE__) . 'languages');
    wp_set_script_translations( 'mortgage-block-frontend', 'mortgage', plugin_dir_path( __FILE__ ) . 'languages' );

    register_block_type_from_metadata(
        __DIR__,
    );
    register_block_type_from_metadata(
        __DIR__ . '/src/button',
    );

}
add_action('init', 'mortgage_block_init');
