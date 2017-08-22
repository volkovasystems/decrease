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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/decrease.git",
              			"test": "decrease-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Reduce the array.
              
              		This will always return a new array filled with truthy values.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");
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

	if (falzy(method) || typeof method != "function") {
		method = function reduce(accumulator, current, index, array) {
			if (index == array.length - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY3JlYXNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiZmFsenkiLCJyYXplIiwidHJ1bHkiLCJkZWNyZWFzZSIsImFycmF5IiwibWV0aG9kIiwidmFsdWUiLCJBU19BUlJBWSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudCIsImluZGV4IiwibGVuZ3RoIiwicG9wIiwiQVJSQVkiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxXQUFXLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDekQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJTixNQUFPSSxLQUFQLEtBQWtCLENBQUNOLE1BQU9NLEtBQVAsRUFBY0csUUFBZCxDQUF2QixFQUFpRDtBQUNoREgsVUFBUSxFQUFSOztBQUVBLEVBSEQsTUFHSztBQUNKQSxVQUFRSCxLQUFNRyxLQUFOLENBQVI7QUFDQTs7QUFFRCxLQUFJSixNQUFPSyxNQUFQLEtBQW1CLE9BQU9BLE1BQVAsSUFBaUIsVUFBeEMsRUFBb0Q7QUFDbkRBLFdBQVMsU0FBU0csTUFBVCxDQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLEVBQXVDQyxLQUF2QyxFQUE4Q1AsS0FBOUMsRUFBcUQ7QUFDN0QsT0FBSU8sU0FBV1AsTUFBTVEsTUFBTixHQUFlLENBQTlCLEVBQW1DO0FBQ2xDUixVQUFNUyxHQUFOOztBQUVBLFdBQU9ULEtBQVA7QUFDQTs7QUFFRCxVQUFPTSxPQUFQO0FBQ0EsR0FSRDtBQVNBOztBQUVELEtBQUlWLE1BQU9NLEtBQVAsQ0FBSixFQUFvQjtBQUNuQkEsVUFBUUYsTUFBTyxDQUFQLENBQVI7QUFDQTs7QUFFREUsU0FBUUYsTUFBTUksTUFBTixDQUFjSCxNQUFkLEVBQXNCQyxLQUF0QixDQUFSOztBQUVBLEtBQUksQ0FBQ1IsTUFBT1EsS0FBUCxFQUFjUSxLQUFkLENBQUwsRUFBNEI7QUFDM0JSLFVBQVEsQ0FBRUEsS0FBRixDQUFSO0FBQ0E7O0FBRUQsUUFBT0EsTUFBTVMsTUFBTixDQUFjYixLQUFkLENBQVA7QUFDQSxDQXpDRDs7QUEyQ0FjLE9BQU9DLE9BQVAsR0FBaUJkLFFBQWpCIiwiZmlsZSI6ImRlY3JlYXNlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlY3JlYXNlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZWNyZWFzZS9kZWNyZWFzZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGVjcmVhc2UuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlY3JlYXNlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGVjcmVhc2UtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRSZWR1Y2UgdGhlIGFycmF5LlxuXG5cdFx0VGhpcyB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXcgYXJyYXkgZmlsbGVkIHdpdGggdHJ1dGh5IHZhbHVlcy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuY29uc3QgZGVjcmVhc2UgPSBmdW5jdGlvbiBkZWNyZWFzZSggYXJyYXksIG1ldGhvZCwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBBcnJheSxcblx0XHRcdFx0XCJtZXRob2RcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGFycmF5ICkgfHwgIWRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKSApe1xuXHRcdGFycmF5ID0gWyBdO1xuXG5cdH1lbHNle1xuXHRcdGFycmF5ID0gcmF6ZSggYXJyYXkgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggbWV0aG9kICkgfHwgdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRtZXRob2QgPSBmdW5jdGlvbiByZWR1Y2UoIGFjY3VtdWxhdG9yLCBjdXJyZW50LCBpbmRleCwgYXJyYXkgKXtcblx0XHRcdGlmKCBpbmRleCA9PSAoIGFycmF5Lmxlbmd0aCAtIDEgKSApe1xuXHRcdFx0XHRhcnJheS5wb3AoICk7XG5cblx0XHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9XG5cblx0aWYoIGZhbHp5KCB2YWx1ZSApICl7XG5cdFx0dmFsdWUgPSBhcnJheVsgMCBdO1xuXHR9XG5cblx0dmFsdWUgPSBhcnJheS5yZWR1Y2UoIG1ldGhvZCwgdmFsdWUgKTtcblxuXHRpZiggIWRvdWJ0KCB2YWx1ZSwgQVJSQVkgKSApe1xuXHRcdHZhbHVlID0gWyB2YWx1ZSBdO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLmZpbHRlciggdHJ1bHkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjcmVhc2U7XG4iXX0=
//# sourceMappingURL=decrease.support.js.map
