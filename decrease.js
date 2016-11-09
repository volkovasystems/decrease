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
		Reduce the array. This will always return an array.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"truly": "truly"
		}
	@end-include
*/

if( typeof require == "function" ){
	var doubt = require( "doubt" );
	var harden = require( "harden" );
	var protype = require( "protype" );
	var raze = require( "raze" );
	var truly = require( "truly" );
}

if( typeof window != "undefined" && !( "doubt" in window ) ){
	throw new Error( "doubt is not defined" );
}

if( typeof window != "undefined" && !( "harden" in window ) ){
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" && !( "protype" in window ) ){
	throw new Error( "protype is not defined" );
}

if( typeof window != "undefined" && !( "raze" in window ) ){
	throw new Error( "raze is not defined" );
}

if( typeof window != "undefined" && !( "truly" in window ) ){
	throw new Error( "truly is not defined" );
}

//: @support-module:
	//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	Array.prototype.reduce||(Array.prototype.reduce=function(r){"use strict";
	if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");
	if("function"!=typeof r)throw new TypeError(r+" is not a function");
	var e,t=Object(this),n=t.length>>>0,o=0;if(2==arguments.length)e=arguments[1];
	else{for(;n>o&&!(o in t);)o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");
	e=t[o++]}for(;n>o;o++)o in t&&(e=r(e,t[o],o,t));return e});
//: @end-support-module

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

	let parameter = raze( arguments );

	array = doubt( parameter[ 0 ] ).ARRAY? parameter[ 0 ] :
		doubt( this ).ARRAY? this : [ ];

	//: Clone the array so that we will not destroy it.
	//: Deep level references will not be supported.
	array = [ ].concat( array );

	method = protype( parameter[ 0 ], FUNCTION )? parameter[ 0 ] :
		protype( parameter[ 1 ], FUNCTION )? parameter[ 1 ] :
		function reduce( previous, current, index, array ){
			if( index == ( array.length - 1 ) ){
				array.pop( );

				return array;
			}

			return current;
		};

	value = truly( value )? value : array[ 0 ];

	value = array.reduce( method, value );

	if( !doubt( value ).ARRAY ){ value = [ value ]; }

	harden( "decrease", decrease.bind( value ), value );

	return value;
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = decrease;
}
