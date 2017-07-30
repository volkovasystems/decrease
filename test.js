"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "decrease",
			"path": "decrease/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/decrease.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"decrease": "decrease"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const decrease = require( "./decrease.js" );
//: @end-server





//: @server:

describe( "decrease", ( ) => {

	describe( "`decrease( [ 1, 2, 3, 4, 5 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4 ]", ( ) => {
			assert.deepEqual( decrease( [ 1, 2, 3, 4, 5 ] ), [ 1, 2, 3, 4 ] );
		} );
	} );

	describe( "`decrease( [ null, 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2 ]", ( ) => {
			assert.deepEqual( decrease( [ null, 1, 2, 3 ] ), [ 1, 2 ] );
		} );
	} );

	describe( "`decrease( [ 1, 2, NaN, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2 ]", ( ) => {
			assert.deepEqual( decrease( [ 1, 2, NaN, 3 ] ), [ 1, 2 ] );
		} );
	} );

	describe( "`decrease with method parameter`", ( ) => {

		let test = decrease( [ 1, 2, 3 ], function sum( previous, current ){
			return previous + current;
		} );

		it( "should be equal to [ 7 ]", ( ) => {
			assert.deepEqual( test, [ 7 ] );
		} );

	} );

	describe( "`decrease with method and value parameter`", ( ) => {

		let test2 = decrease( [ 1, 2, 3 ], function sum( previous, current ){
			return previous + current;
		}, 0 );

		it( "should be equal to [ 6 ]", ( ) => {
			assert.deepEqual( test2, [ 6 ] );
		} );

	} );

} );

//: @end-server




