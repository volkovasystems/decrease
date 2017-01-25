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
			"doubt": "doubt",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"truly": "truly"
		}
	@end-include
*/

var doubt = require("doubt");
var harden = require("harden");
var protype = require("protype");
var raze = require("raze");
var truly = require("truly");

//: @support-module:
//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Array.prototype.reduce || (Array.prototype.reduce = function (r) {
	"use strict";

	if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
	if ("function" != typeof r) throw new TypeError(r + " is not a function");
	var e,
	    t = Object(this),
	    n = t.length >>> 0,
	    o = 0;if (2 == arguments.length) e = arguments[1];else {
		for (; n > o && !(o in t);) {
			o++;
		}if (o >= n) throw new TypeError("Reduce of empty array with no initial value");
		e = t[o++];
	}for (; n > o; o++) {
		o in t && (e = r(e, t[o], o, t));
	}return e;
});
//: @end-support-module

var decrease = function decrease(array, method, value) {
	/*;
 	@meta-configuration:
 		{
 			"array:required": "[*]",
 			"method:optional": "function",
 			"value:optional": "*"
 		}
 	@end-meta-configuration
 */

	var parameter = raze(arguments);

	array = doubt(parameter[0]).ARRAY ? parameter[0] : doubt(this).ARRAY ? this : [];

	/*;
 	@note:
 		Clone the array so that we will not destroy it.
 		Deep level references will not be supported.
 	@end-note
 */
	array = [].concat(array);

	method = protype(parameter[0], FUNCTION) ? parameter[0] : protype(parameter[1], FUNCTION) ? parameter[1] : function reduce(previous, current, index, array) {
		if (index == array.length - 1) {
			array.pop();

			return array;
		}

		return current;
	};

	value = truly(value) ? value : array[0];

	value = array.reduce(method, value);

	if (!doubt(value).ARRAY) {
		value = [value];
	}

	harden("decrease", decrease.bind(value), value);

	return value;
};

module.exports = decrease;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY3JlYXNlLmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwidHJ1bHkiLCJBcnJheSIsInByb3RvdHlwZSIsInJlZHVjZSIsInIiLCJUeXBlRXJyb3IiLCJlIiwidCIsIk9iamVjdCIsIm4iLCJsZW5ndGgiLCJvIiwiYXJndW1lbnRzIiwiZGVjcmVhc2UiLCJhcnJheSIsIm1ldGhvZCIsInZhbHVlIiwicGFyYW1ldGVyIiwiQVJSQVkiLCJjb25jYXQiLCJGVU5DVElPTiIsInByZXZpb3VzIiwiY3VycmVudCIsImluZGV4IiwicG9wIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQTtBQUNDO0FBQ0FLLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLEtBQXlCRixNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixHQUF1QixVQUFTQyxDQUFULEVBQVc7QUFBQzs7QUFDNUQsS0FBRyxRQUFNLElBQVQsRUFBYyxNQUFNLElBQUlDLFNBQUosQ0FBYyxvREFBZCxDQUFOO0FBQ2QsS0FBRyxjQUFZLE9BQU9ELENBQXRCLEVBQXdCLE1BQU0sSUFBSUMsU0FBSixDQUFjRCxJQUFFLG9CQUFoQixDQUFOO0FBQ3hCLEtBQUlFLENBQUo7QUFBQSxLQUFNQyxJQUFFQyxPQUFPLElBQVAsQ0FBUjtBQUFBLEtBQXFCQyxJQUFFRixFQUFFRyxNQUFGLEtBQVcsQ0FBbEM7QUFBQSxLQUFvQ0MsSUFBRSxDQUF0QyxDQUF3QyxJQUFHLEtBQUdDLFVBQVVGLE1BQWhCLEVBQXVCSixJQUFFTSxVQUFVLENBQVYsQ0FBRixDQUF2QixLQUNwQztBQUFDLFNBQUtILElBQUVFLENBQUYsSUFBSyxFQUFFQSxLQUFLSixDQUFQLENBQVY7QUFBcUJJO0FBQXJCLEdBQXlCLElBQUdBLEtBQUdGLENBQU4sRUFBUSxNQUFNLElBQUlKLFNBQUosQ0FBYyw2Q0FBZCxDQUFOO0FBQ3RDQyxNQUFFQyxFQUFFSSxHQUFGLENBQUY7QUFBUyxTQUFLRixJQUFFRSxDQUFQLEVBQVNBLEdBQVQ7QUFBYUEsT0FBS0osQ0FBTCxLQUFTRCxJQUFFRixFQUFFRSxDQUFGLEVBQUlDLEVBQUVJLENBQUYsQ0FBSixFQUFTQSxDQUFULEVBQVdKLENBQVgsQ0FBWDtBQUFiLEVBQXVDLE9BQU9ELENBQVA7QUFBUyxDQUx6RDtBQU1EOztBQUVBLElBQU1PLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUN6RDs7Ozs7Ozs7OztBQVVBLEtBQUlDLFlBQVlsQixLQUFNYSxTQUFOLENBQWhCOztBQUVBRSxTQUFRbkIsTUFBT3NCLFVBQVcsQ0FBWCxDQUFQLEVBQXdCQyxLQUF4QixHQUErQkQsVUFBVyxDQUFYLENBQS9CLEdBQ1B0QixNQUFPLElBQVAsRUFBY3VCLEtBQWQsR0FBcUIsSUFBckIsR0FBNEIsRUFEN0I7O0FBR0E7Ozs7OztBQU1BSixTQUFRLEdBQUlLLE1BQUosQ0FBWUwsS0FBWixDQUFSOztBQUVBQyxVQUFTakIsUUFBU21CLFVBQVcsQ0FBWCxDQUFULEVBQXlCRyxRQUF6QixJQUFxQ0gsVUFBVyxDQUFYLENBQXJDLEdBQ1JuQixRQUFTbUIsVUFBVyxDQUFYLENBQVQsRUFBeUJHLFFBQXpCLElBQXFDSCxVQUFXLENBQVgsQ0FBckMsR0FDQSxTQUFTZCxNQUFULENBQWlCa0IsUUFBakIsRUFBMkJDLE9BQTNCLEVBQW9DQyxLQUFwQyxFQUEyQ1QsS0FBM0MsRUFBa0Q7QUFDakQsTUFBSVMsU0FBV1QsTUFBTUosTUFBTixHQUFlLENBQTlCLEVBQW1DO0FBQ2xDSSxTQUFNVSxHQUFOOztBQUVBLFVBQU9WLEtBQVA7QUFDQTs7QUFFRCxTQUFPUSxPQUFQO0FBQ0EsRUFWRjs7QUFZQU4sU0FBUWhCLE1BQU9nQixLQUFQLElBQWdCQSxLQUFoQixHQUF3QkYsTUFBTyxDQUFQLENBQWhDOztBQUVBRSxTQUFRRixNQUFNWCxNQUFOLENBQWNZLE1BQWQsRUFBc0JDLEtBQXRCLENBQVI7O0FBRUEsS0FBSSxDQUFDckIsTUFBT3FCLEtBQVAsRUFBZUUsS0FBcEIsRUFBMkI7QUFBRUYsVUFBUSxDQUFFQSxLQUFGLENBQVI7QUFBb0I7O0FBRWpEbkIsUUFBUSxVQUFSLEVBQW9CZ0IsU0FBU1ksSUFBVCxDQUFlVCxLQUFmLENBQXBCLEVBQTRDQSxLQUE1Qzs7QUFFQSxRQUFPQSxLQUFQO0FBQ0EsQ0E3Q0Q7O0FBK0NBVSxPQUFPQyxPQUFQLEdBQWlCZCxRQUFqQiIsImZpbGUiOiJkZWNyZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwicGF0aFwiOiBcImRlY3JlYXNlL2RlY3JlYXNlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkZWNyZWFzZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZWNyZWFzZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlY3JlYXNlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGVjcmVhc2UtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRSZWR1Y2UgdGhlIGFycmF5LiBUaGlzIHdpbGwgYWx3YXlzIHJldHVybiBhbiBhcnJheS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuLy86IEBzdXBwb3J0LW1vZHVsZTpcblx0Ly86IEByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZVxuXHRBcnJheS5wcm90b3R5cGUucmVkdWNlfHwoQXJyYXkucHJvdG90eXBlLnJlZHVjZT1mdW5jdGlvbihyKXtcInVzZSBzdHJpY3RcIjtcblx0aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWRcIik7XG5cdGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihyK1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXHR2YXIgZSx0PU9iamVjdCh0aGlzKSxuPXQubGVuZ3RoPj4+MCxvPTA7aWYoMj09YXJndW1lbnRzLmxlbmd0aCllPWFyZ3VtZW50c1sxXTtcblx0ZWxzZXtmb3IoO24+byYmIShvIGluIHQpOylvKys7aWYobz49bil0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtcblx0ZT10W28rK119Zm9yKDtuPm87bysrKW8gaW4gdCYmKGU9cihlLHRbb10sbyx0KSk7cmV0dXJuIGV9KTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbmNvbnN0IGRlY3JlYXNlID0gZnVuY3Rpb24gZGVjcmVhc2UoIGFycmF5LCBtZXRob2QsIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogXCJbKl1cIixcblx0XHRcdFx0XCJtZXRob2Q6b3B0aW9uYWxcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcInZhbHVlOm9wdGlvbmFsXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0YXJyYXkgPSBkb3VidCggcGFyYW1ldGVyWyAwIF0gKS5BUlJBWT8gcGFyYW1ldGVyWyAwIF0gOlxuXHRcdGRvdWJ0KCB0aGlzICkuQVJSQVk/IHRoaXMgOiBbIF07XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRDbG9uZSB0aGUgYXJyYXkgc28gdGhhdCB3ZSB3aWxsIG5vdCBkZXN0cm95IGl0LlxuXHRcdFx0RGVlcCBsZXZlbCByZWZlcmVuY2VzIHdpbGwgbm90IGJlIHN1cHBvcnRlZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0YXJyYXkgPSBbIF0uY29uY2F0KCBhcnJheSApO1xuXG5cdG1ldGhvZCA9IHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBGVU5DVElPTiApPyBwYXJhbWV0ZXJbIDAgXSA6XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyWyAxIF0sIEZVTkNUSU9OICk/IHBhcmFtZXRlclsgMSBdIDpcblx0XHRmdW5jdGlvbiByZWR1Y2UoIHByZXZpb3VzLCBjdXJyZW50LCBpbmRleCwgYXJyYXkgKXtcblx0XHRcdGlmKCBpbmRleCA9PSAoIGFycmF5Lmxlbmd0aCAtIDEgKSApe1xuXHRcdFx0XHRhcnJheS5wb3AoICk7XG5cblx0XHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXG5cdHZhbHVlID0gdHJ1bHkoIHZhbHVlICk/IHZhbHVlIDogYXJyYXlbIDAgXTtcblxuXHR2YWx1ZSA9IGFycmF5LnJlZHVjZSggbWV0aG9kLCB2YWx1ZSApO1xuXG5cdGlmKCAhZG91YnQoIHZhbHVlICkuQVJSQVkgKXsgdmFsdWUgPSBbIHZhbHVlIF07IH1cblxuXHRoYXJkZW4oIFwiZGVjcmVhc2VcIiwgZGVjcmVhc2UuYmluZCggdmFsdWUgKSwgdmFsdWUgKTtcblxuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY3JlYXNlO1xuIl19
