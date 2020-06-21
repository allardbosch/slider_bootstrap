<?php
$args = array(
    'post_type' => 'product',
    'posts_per_page' => 7
);
$loop = new WP_Query( $args );

if ( $loop->have_posts() ):
?>
<div class="pane pane--slider">
    <div class="container slider_container">
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <h2 class="title">
                    <?php _e('New Products', 'woocommerce'); ?>
                </h2>
            </div>
        </div>
        <div class="row slider">
            <?php
                while ( $loop->have_posts() ) : $loop->the_post();
                    wc_get_template_part( 'content', 'product' ); 		// .col-lg-4.slide
                endwhile;         
	    ?>
        </div>
    </div>
</div>
<?php
else:
          _e( 'No products found' , 'woocommerce');
 endif;
            wp_reset_postdata();


?>

