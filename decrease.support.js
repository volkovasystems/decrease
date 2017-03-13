"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "decrease",
              			"path": "decrease/decrease.js",
              			"file": "decrease.js",
              			"module": "decrease",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
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
              			"arkount": "arkount",
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"protype": "protype",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var arkount = require("arkount");
var doubt = require("doubt");
var falzy = require("falzy");
var protype = require("protype");
var raze = require("raze");
var truly = require("truly");

var decrease = function decrease(array, method, value) {
	/*;
                                                        	@meta-configuration:
                                                        		{
                                                        			"array:required": Array,
                                                        			"method": "function",
                                                        			"value": "*"
                                                        		}
                                                        	@end-meta-configuration
                                                        */

	if (falzy(array) || !doubt(array, AS_ARRAY)) {
		array = [];

	} else {
		array = raze(array);
	}

	if (falzy(method) || !protype(method, FUNCTION)) {
		method = function reduce(previous, current, index, array) {
			if (index == arkount(array) - 1) {
				array.pop();

				return array;
			}

			return current;
		};
	}

	if (falzy(value)) {
		value = array[0];
	}

	value = array.reduce(method, value);

	if (!doubt(value, ARRAY)) {
		value = [value];
	}

	return value.filter(truly);
};

module.exports = decrease;

//# sourceMappingURL=decrease.support.js.map