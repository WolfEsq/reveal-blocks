<?php

/*
Plugin Name:  Reveal Blocks
Description:  Adds "Reveal Blocks" toggle to the admin bar when the block editor is open. Toggle on to outline blocks. Also reveals drop zones when dragging a block.
Author:       WolfEsq
Author URI:   https://github.com/WolfEsq
License:      GPLv2-or-later
License URI:  http://www.opensource.org/licenses/gpl-license.php
*/


// Enqueue own styles
function enqueue_custom_styles_esq() {

	wp_register_style( 'reveal_blocks', plugin_dir_url( __FILE__ ) .'/reveal-blocks.css', array(), false, 'all' );
	wp_enqueue_style( 'reveal_blocks');

}
add_action( 'admin_enqueue_scripts', 'enqueue_custom_styles_esq' );

// Enqueue own styles
function enqueue_reveal_blocks_js() {

	wp_register_script( 'reveal_blocks_js', plugin_dir_url( __FILE__ ) .'/reveal-blocks.js', array('jquery'), false, 'all' );
	wp_enqueue_script( 'reveal_blocks_js');

}
add_action( 'admin_enqueue_scripts', 'enqueue_reveal_blocks_js' );


// Add Toolbar Menus
function esq_reveal_blocks() {
    
    global $current_screen;
    global $wp_admin_bar;
    
    if ( method_exists($current_screen, 'is_block_editor') && $current_screen->is_block_editor() ) {
        	
    	$args = array(
    		'id'     => 'reveal_blocks',
    		'title'  => __( 'Reveal Blocks', 'text_domain' ),
    		'href'   => '#',
    		'group'  => false,
    		'meta'   => array(
    			'class'    => 'reveal-button',
    		),
    	);
    	$wp_admin_bar->add_menu( $args );
    }
}
add_action( 'wp_before_admin_bar_render', 'esq_reveal_blocks', 999 );






