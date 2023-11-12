<?php
/**
 * WPSEO plugin test file.
 *
 * @package WPSEO\Tests\Doubles
 */

use Yoast\WP\SEO\Integrations\Front_End_Integration;

/**
 * Test Helper Class.
 */
class Front_End_Integration_Double extends Front_End_Integration {

	/**
	 * Sets the `prev` property.
	 *
	 * @param string $prev The value for the property.
	 *
	 * @return void
	 */
	public function set_prev( $prev ) {
		$this->prev = $prev;
	}

	/**
	 * Sets the `next` property.
	 *
	 * @param string $next The value for the property.
	 *
	 * @return void
	 */
	public function set_next( $next ) {
		$this->next = $next;
	}
}
