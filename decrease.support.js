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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY3JlYXNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiZmFsenkiLCJyYXplIiwidHJ1bHkiLCJkZWNyZWFzZSIsImFycmF5IiwibWV0aG9kIiwidmFsdWUiLCJBU19BUlJBWSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudCIsImluZGV4IiwibGVuZ3RoIiwicG9wIiwiQVJSQVkiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxXQUFXLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDekQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJTixNQUFPSSxLQUFQLEtBQWtCLENBQUNOLE1BQU9NLEtBQVAsRUFBY0csUUFBZCxDQUF2QixFQUFpRDtBQUNoREgsVUFBUSxFQUFSOztBQUVBLEVBSEQsTUFHSztBQUNKQSxVQUFRSCxLQUFNRyxLQUFOLENBQVI7QUFDQTs7QUFFRCxLQUFJSixNQUFPSyxNQUFQLEtBQW1CLE9BQU9BLE1BQVAsSUFBaUIsVUFBeEMsRUFBb0Q7QUFDbkRBLFdBQVMsU0FBU0csTUFBVCxDQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLEVBQXVDQyxLQUF2QyxFQUE4Q1AsS0FBOUMsRUFBcUQ7QUFDN0QsT0FBSU8sU0FBV1AsTUFBTVEsTUFBTixHQUFlLENBQTlCLEVBQW1DO0FBQ2xDUixVQUFNUyxHQUFOOztBQUVBLFdBQU9ULEtBQVA7QUFDQTs7QUFFRCxVQUFPTSxPQUFQO0FBQ0EsR0FSRDtBQVNBOztBQUVELEtBQUlWLE1BQU9NLEtBQVAsQ0FBSixFQUFvQjtBQUNuQkEsVUFBUUYsTUFBTyxDQUFQLENBQVI7QUFDQTs7QUFFREUsU0FBUUYsTUFBTUksTUFBTixDQUFjSCxNQUFkLEVBQXNCQyxLQUF0QixDQUFSOztBQUVBLEtBQUksQ0FBQ1IsTUFBT1EsS0FBUCxFQUFjUSxLQUFkLENBQUwsRUFBNEI7QUFDM0JSLFVBQVEsQ0FBRUEsS0FBRixDQUFSO0FBQ0E7O0FBRUQsUUFBT0EsTUFBTVMsTUFBTixDQUFjYixLQUFkLENBQVA7QUFDQSxDQXpDRDs7QUEyQ0FjLE9BQU9DLE9BQVAsR0FBaUJkLFFBQWpCIiwiZmlsZSI6ImRlY3JlYXNlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVjcmVhc2VcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZGVjcmVhc2UvZGVjcmVhc2UuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZGVjcmVhc2UuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZWNyZWFzZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWNyZWFzZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGVjcmVhc2UtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRSZWR1Y2UgdGhlIGFycmF5LlxyXG5cclxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3IGFycmF5IGZpbGxlZCB3aXRoIHRydXRoeSB2YWx1ZXMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXHJcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IGRlY3JlYXNlID0gZnVuY3Rpb24gZGVjcmVhc2UoIGFycmF5LCBtZXRob2QsIHZhbHVlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBBcnJheSxcclxuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggYXJyYXkgKSB8fCAhZG91YnQoIGFycmF5LCBBU19BUlJBWSApICl7XHJcblx0XHRhcnJheSA9IFsgXTtcclxuXHJcblx0fWVsc2V7XHJcblx0XHRhcnJheSA9IHJhemUoIGFycmF5ICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIG1ldGhvZCApIHx8IHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XHJcblx0XHRtZXRob2QgPSBmdW5jdGlvbiByZWR1Y2UoIGFjY3VtdWxhdG9yLCBjdXJyZW50LCBpbmRleCwgYXJyYXkgKXtcclxuXHRcdFx0aWYoIGluZGV4ID09ICggYXJyYXkubGVuZ3RoIC0gMSApICl7XHJcblx0XHRcdFx0YXJyYXkucG9wKCApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gYXJyYXk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggdmFsdWUgKSApe1xyXG5cdFx0dmFsdWUgPSBhcnJheVsgMCBdO1xyXG5cdH1cclxuXHJcblx0dmFsdWUgPSBhcnJheS5yZWR1Y2UoIG1ldGhvZCwgdmFsdWUgKTtcclxuXHJcblx0aWYoICFkb3VidCggdmFsdWUsIEFSUkFZICkgKXtcclxuXHRcdHZhbHVlID0gWyB2YWx1ZSBdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlLmZpbHRlciggdHJ1bHkgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVjcmVhc2U7XHJcbiJdfQ==
//# sourceMappingURL=decrease.support.js.map
