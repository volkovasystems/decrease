
const assert = require( "assert" );
const decrease = require( "./decrease.js" );

assert.deepEqual( decrease( [ 1, 2, 3, 4, 5 ] ), [ 1, 2, 3, 4 ], "should removed element '5'" );

assert.deepEqual( decrease( [ 1, 2, null, 3 ] ), [ 1, 2 ], "should have truthy values" );

console.log( "ok" );
