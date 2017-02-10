"use strict";

const decrease = require( "./decrease.js" );

let array = [ 1, 2, 3 ];

let result = decrease( array,
	function onDecrease( oldArray, currentValue, index, array ){

		return 1;

	}, [ ] );

console.log( "Result", result );

console.log( decrease( ) );
