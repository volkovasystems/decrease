
const assert = require( "assert" );
const decrease = require( "./decrease.js" );

assert.deepEqual( decrease( [ null, undefined, "" ] ), [ ], "should be empty array" );
assert.deepEqual( decrease( [ null, NaN ] ), [ ], "should be empty array" );
assert.deepEqual( decrease( [ null, { } ] ), [ ], "should be empty array" );
assert.deepEqual( decrease( [ null, [ ] ] ), [ ], "should be empty array" );
assert.deepEqual( decrease( [ null, [ ], { } ] ), [ { } ], "should be array with empty object within the array" );
assert.deepEqual( decrease( [ 1, 2, 3, null ] ), [ 1, 2, 3 ], "should have truthy values" );
assert.deepEqual( decrease( [ null, 1, 2, 3 ] ), [ 1, 2 ], "should have truthy values" );
assert.deepEqual( decrease( [ 1, 2, NaN, 3 ] ), [ 1, 2 ], "should have truthy values" );

assert.deepEqual( decrease( [ 1, 2, 3, 4, 5 ] ), [ 1, 2, 3, 4 ], "should removed element '5'" );

let test = decrease( [ 1, 2, 3, 4, 5 ], function flatten( previous, current ){ return previous.concat( current ); }, [ ] );
assert.deepEqual( test, [ 1, 2, 3, 4, 5 ], "should be equal" );

console.log( "ok" );
