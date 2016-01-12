'use strict';

// MODULES //

var test = require( 'tape' );
var abs = require( 'math-abs' );
var tan = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof tan === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the tangent', function test( t ) {
	var delta;

	// Tested on Wolfram Alpha...
	delta = abs( tan( 0 ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( tan( Math.PI ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( tan( Math.PI/4 ) - 1 );
	t.ok( delta < 1e-14, 'approx 1' );

	delta = abs( tan( -Math.PI/4 ) + 1 );
	t.ok( delta, 'approx -1' );

	delta = abs( tan( Math.PI/8 ) - 0.414213562373095048801688724209698078569671875376948073176679 );
	t.ok( delta < 1e-14, 'equals ~0.4142' );

	delta = abs( tan( -Math.PI/8 ) + 0.414213562373095048801688724209698078569671875376948073176679 );
	t.ok( delta < 1e-14, 'equals ~0.4142' );

	t.end();
});

test( 'the function returns `-infinity` if provided a multiple of `-pi/2`', function test( t ) {
	// t.equal( tan( -Math.PI/2 ), Number.NEGATIVE_INFINITY, 'equals -infinity' );

	// FIXME: does not equal -inf due to approx errors. Comparing to Julia: -1.633123935319537e16
	t.equal( tan( -Math.PI/2 ), -1.633123935319537e16, 'large number' );
	t.end();
});

test( 'the function returns `+infinity` if provided a multiple of `pi/2`', function test( t ) {
	// t.equal( tan( Math.PI/2 ), Number.POSITIVE_INFINITY, 'equals +infinity' );

	// FIXME: does not equal +inf due to approx errors. Comparing to Julia: +1.633123935319537e16
	t.equal( tan( Math.PI/2 ), 1.633123935319537e16, 'large number' );
	t.end();
});
