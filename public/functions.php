<?php

wp_register_script('frontend', get_template_directory_uri().'/assets/javascript/frontend.js', true);
wp_enqueue_script('frontend');

wp_register_style( 'site-styles', get_template_directory_uri() . '/style.css', '', '', 'screen' );
wp_enqueue_style('site-styles');


?>