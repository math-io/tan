'use strict';

var linspace = require( 'compute-linspace' );
var tan = require( './../lib' );

var x = linspace( -Math.PI/2, Math.PI/2, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( tan( x[ i ] ) );
}
