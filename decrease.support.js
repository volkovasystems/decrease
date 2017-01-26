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

	array = doubt(parameter[0], ARRAY) ? parameter[0] : doubt(this, ARRAY) ? this : [];

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

	if (!doubt(value, ARRAY)) {
		value = [value];
	}

	harden("decrease", decrease.bind(value), value);

	return value;
};

module.exports = decrease;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY3JlYXNlLmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwidHJ1bHkiLCJBcnJheSIsInByb3RvdHlwZSIsInJlZHVjZSIsInIiLCJUeXBlRXJyb3IiLCJlIiwidCIsIk9iamVjdCIsIm4iLCJsZW5ndGgiLCJvIiwiYXJndW1lbnRzIiwiZGVjcmVhc2UiLCJhcnJheSIsIm1ldGhvZCIsInZhbHVlIiwicGFyYW1ldGVyIiwiQVJSQVkiLCJjb25jYXQiLCJGVU5DVElPTiIsInByZXZpb3VzIiwiY3VycmVudCIsImluZGV4IiwicG9wIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQTtBQUNDO0FBQ0FLLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLEtBQXlCRixNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixHQUF1QixVQUFTQyxDQUFULEVBQVc7QUFBQzs7QUFDNUQsS0FBRyxRQUFNLElBQVQsRUFBYyxNQUFNLElBQUlDLFNBQUosQ0FBYyxvREFBZCxDQUFOO0FBQ2QsS0FBRyxjQUFZLE9BQU9ELENBQXRCLEVBQXdCLE1BQU0sSUFBSUMsU0FBSixDQUFjRCxJQUFFLG9CQUFoQixDQUFOO0FBQ3hCLEtBQUlFLENBQUo7QUFBQSxLQUFNQyxJQUFFQyxPQUFPLElBQVAsQ0FBUjtBQUFBLEtBQXFCQyxJQUFFRixFQUFFRyxNQUFGLEtBQVcsQ0FBbEM7QUFBQSxLQUFvQ0MsSUFBRSxDQUF0QyxDQUF3QyxJQUFHLEtBQUdDLFVBQVVGLE1BQWhCLEVBQXVCSixJQUFFTSxVQUFVLENBQVYsQ0FBRixDQUF2QixLQUNwQztBQUFDLFNBQUtILElBQUVFLENBQUYsSUFBSyxFQUFFQSxLQUFLSixDQUFQLENBQVY7QUFBcUJJO0FBQXJCLEdBQXlCLElBQUdBLEtBQUdGLENBQU4sRUFBUSxNQUFNLElBQUlKLFNBQUosQ0FBYyw2Q0FBZCxDQUFOO0FBQ3RDQyxNQUFFQyxFQUFFSSxHQUFGLENBQUY7QUFBUyxTQUFLRixJQUFFRSxDQUFQLEVBQVNBLEdBQVQ7QUFBYUEsT0FBS0osQ0FBTCxLQUFTRCxJQUFFRixFQUFFRSxDQUFGLEVBQUlDLEVBQUVJLENBQUYsQ0FBSixFQUFTQSxDQUFULEVBQVdKLENBQVgsQ0FBWDtBQUFiLEVBQXVDLE9BQU9ELENBQVA7QUFBUyxDQUx6RDtBQU1EOztBQUVBLElBQU1PLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUN6RDs7Ozs7Ozs7OztBQVVBLEtBQUlDLFlBQVlsQixLQUFNYSxTQUFOLENBQWhCOztBQUVBRSxTQUFRbkIsTUFBT3NCLFVBQVcsQ0FBWCxDQUFQLEVBQXVCQyxLQUF2QixJQUFnQ0QsVUFBVyxDQUFYLENBQWhDLEdBQ1B0QixNQUFPLElBQVAsRUFBYXVCLEtBQWIsSUFBc0IsSUFBdEIsR0FBNkIsRUFEOUI7O0FBR0E7Ozs7OztBQU1BSixTQUFRLEdBQUlLLE1BQUosQ0FBWUwsS0FBWixDQUFSOztBQUVBQyxVQUFTakIsUUFBU21CLFVBQVcsQ0FBWCxDQUFULEVBQXlCRyxRQUF6QixJQUFxQ0gsVUFBVyxDQUFYLENBQXJDLEdBQ1JuQixRQUFTbUIsVUFBVyxDQUFYLENBQVQsRUFBeUJHLFFBQXpCLElBQXFDSCxVQUFXLENBQVgsQ0FBckMsR0FDQSxTQUFTZCxNQUFULENBQWlCa0IsUUFBakIsRUFBMkJDLE9BQTNCLEVBQW9DQyxLQUFwQyxFQUEyQ1QsS0FBM0MsRUFBa0Q7QUFDakQsTUFBSVMsU0FBV1QsTUFBTUosTUFBTixHQUFlLENBQTlCLEVBQW1DO0FBQ2xDSSxTQUFNVSxHQUFOOztBQUVBLFVBQU9WLEtBQVA7QUFDQTs7QUFFRCxTQUFPUSxPQUFQO0FBQ0EsRUFWRjs7QUFZQU4sU0FBUWhCLE1BQU9nQixLQUFQLElBQWdCQSxLQUFoQixHQUF3QkYsTUFBTyxDQUFQLENBQWhDOztBQUVBRSxTQUFRRixNQUFNWCxNQUFOLENBQWNZLE1BQWQsRUFBc0JDLEtBQXRCLENBQVI7O0FBRUEsS0FBSSxDQUFDckIsTUFBT3FCLEtBQVAsRUFBY0UsS0FBZCxDQUFMLEVBQTRCO0FBQUVGLFVBQVEsQ0FBRUEsS0FBRixDQUFSO0FBQW9COztBQUVsRG5CLFFBQVEsVUFBUixFQUFvQmdCLFNBQVNZLElBQVQsQ0FBZVQsS0FBZixDQUFwQixFQUE0Q0EsS0FBNUM7O0FBRUEsUUFBT0EsS0FBUDtBQUNBLENBN0NEOztBQStDQVUsT0FBT0MsT0FBUCxHQUFpQmQsUUFBakIiLCJmaWxlIjoiZGVjcmVhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlY3JlYXNlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZWNyZWFzZS9kZWNyZWFzZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGVjcmVhc2UuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWNyZWFzZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImRlY3JlYXNlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmVkdWNlIHRoZSBhcnJheS4gVGhpcyB3aWxsIGFsd2F5cyByZXR1cm4gYW4gYXJyYXkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2Vcblx0QXJyYXkucHJvdG90eXBlLnJlZHVjZXx8KEFycmF5LnByb3RvdHlwZS5yZWR1Y2U9ZnVuY3Rpb24ocil7XCJ1c2Ugc3RyaWN0XCI7XG5cdGlmKG51bGw9PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHRpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IocitcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0dmFyIGUsdD1PYmplY3QodGhpcyksbj10Lmxlbmd0aD4+PjAsbz0wO2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpZT1hcmd1bWVudHNbMV07XG5cdGVsc2V7Zm9yKDtuPm8mJiEobyBpbiB0KTspbysrO2lmKG8+PW4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIik7XG5cdGU9dFtvKytdfWZvcig7bj5vO28rKylvIGluIHQmJihlPXIoZSx0W29dLG8sdCkpO3JldHVybiBlfSk7XG4vLzogQGVuZC1zdXBwb3J0LW1vZHVsZVxuXG5jb25zdCBkZWNyZWFzZSA9IGZ1bmN0aW9uIGRlY3JlYXNlKCBhcnJheSwgbWV0aG9kLCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCIsXG5cdFx0XHRcdFwibWV0aG9kOm9wdGlvbmFsXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJ2YWx1ZTpvcHRpb25hbFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGFycmF5ID0gZG91YnQoIHBhcmFtZXRlclsgMCBdLCBBUlJBWSApPyBwYXJhbWV0ZXJbIDAgXSA6XG5cdFx0ZG91YnQoIHRoaXMsIEFSUkFZICk/IHRoaXMgOiBbIF07XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRDbG9uZSB0aGUgYXJyYXkgc28gdGhhdCB3ZSB3aWxsIG5vdCBkZXN0cm95IGl0LlxuXHRcdFx0RGVlcCBsZXZlbCByZWZlcmVuY2VzIHdpbGwgbm90IGJlIHN1cHBvcnRlZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0YXJyYXkgPSBbIF0uY29uY2F0KCBhcnJheSApO1xuXG5cdG1ldGhvZCA9IHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBGVU5DVElPTiApPyBwYXJhbWV0ZXJbIDAgXSA6XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyWyAxIF0sIEZVTkNUSU9OICk/IHBhcmFtZXRlclsgMSBdIDpcblx0XHRmdW5jdGlvbiByZWR1Y2UoIHByZXZpb3VzLCBjdXJyZW50LCBpbmRleCwgYXJyYXkgKXtcblx0XHRcdGlmKCBpbmRleCA9PSAoIGFycmF5Lmxlbmd0aCAtIDEgKSApe1xuXHRcdFx0XHRhcnJheS5wb3AoICk7XG5cblx0XHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXG5cdHZhbHVlID0gdHJ1bHkoIHZhbHVlICk/IHZhbHVlIDogYXJyYXlbIDAgXTtcblxuXHR2YWx1ZSA9IGFycmF5LnJlZHVjZSggbWV0aG9kLCB2YWx1ZSApO1xuXG5cdGlmKCAhZG91YnQoIHZhbHVlLCBBUlJBWSApICl7IHZhbHVlID0gWyB2YWx1ZSBdOyB9XG5cblx0aGFyZGVuKCBcImRlY3JlYXNlXCIsIGRlY3JlYXNlLmJpbmQoIHZhbHVlICksIHZhbHVlICk7XG5cblx0cmV0dXJuIHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNyZWFzZTtcbiJdfQ==
