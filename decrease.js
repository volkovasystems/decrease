"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "decrease",
			"path": "decrease/decrease.js",
			"file": "decrease.js",
			"module": "decrease",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/decrease.git",
			"test": "decrease-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/

//: @support-module:
	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	Array.prototype.reduce||(Array.prototype.reduce=function(r){"use strict";
	if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");
	if("function"!=typeof r)throw new TypeError(r+" is not a function");
	var e,t=Object(this),n=t.length>>>0,o=0;if(2==arguments.length)e=arguments[1];
	else{for(;n>o&&!(o in t);)o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");
	e=t[o++]}for(;n>o;o++)o in t&&(e=r(e,t[o],o,t));return e});
//: @end-support-module

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var decrease = function decrease( array, method, value ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]",
				"method:optional": "function",
				"value:optional": "*"
			}
		@end-meta-configuration
	*/

	var parameter = raze( arguments );

	array = Array.isArray( parameter[ 0 ] )? parameter[ 0 ] :
		Array.isArray( this )? this : [ ];

	//: Clone the array so that we will not destroy it.
	//: Deep level references will not be supported.
	array = [ ].concat( array );

	method = ( typeof parameter[ 0 ] == "function" )? parameter[ 0 ] :
		( typeof parameter[ 1 ] == "function" )? parameter[ 1 ] :
		function reduce( previous, current, index, array ){
			if( index == ( array.length - 1 ) ){
				array.pop( );

				return array;

			}else{
				return current;
			}
		};

	value = value || array[ 0 ];

	value = array.reduce( method, value );

	if( !Array.isArray( value ) ){
		value = [ value ];
	}

	harden( "decrease", decrease.bind( value ), value );

	return value;
};

if( typeof module != "undefined" ){
	module.exports = decrease;
}
