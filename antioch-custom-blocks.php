<?php
/**
 * Plugin Name:       Antioch Custom Blocks
 * Description:       Blocks created for Antioch University includes hero, icon list, accordion, and thread container.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Jonathan Hawkins
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       antioch-custom-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_antioch_custom_blocks_block_init() {
	register_block_type( __DIR__ . '/build/hero' );
	register_block_type( __DIR__ . '/build/icon-list' );
	register_block_type( __DIR__ . '/build/icon-list-inner' );
	register_block_type( __DIR__ . '/build/thread-container' );
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion-card' );
	register_block_type( __DIR__ . '/build/sticky-anchor-links' );
	register_block_type( __DIR__ . '/build/news-feed' );
}
add_action( 'init', 'create_block_antioch_custom_blocks_block_init' );