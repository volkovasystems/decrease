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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("decrease", function () {

	var testBridge = path.resolve(__dirname, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`decrease( [ 1, 2, 3, 4, 5 ] )`", function () {
		it("should be equal to [ 1, 2, 3, 4 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return decrease([1, 2, 3, 4, 5]);}).

			value;

			assert.deepEqual(result, [1, 2, 3, 4]);
		});
	});

	describe("`decrease( [ null, 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				return decrease([null, 1, 2, 3]);
			}).

			value;

			assert.deepEqual(result, [1, 2]);

		});
	});

	describe("`decrease( [ 1, 2, NaN, 3 ] )`", function () {
		it("should be equal to [ 1, 2 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				return decrease([1, 2, NaN, 3]);
			}).

			value;

			assert.deepEqual(result, [1, 2]);

		});
	});

	describe("`decrease with method parameter`", function () {
		it("should be equal to [ 7 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test = decrease([1, 2, 3], function sum(previous, current) {
					return previous + current;
				});

				return test;
			}).

			value;

			assert.deepEqual(result, [7]);

		});
	});

	describe("`decrease with method and value parameter`", function () {

		it("should be equal to [ 6 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test = decrease([1, 2, 3], function sum(previous, current) {
					return previous + current;
				}, 0);

				return test;
			}).

			value;

			assert.deepEqual(result, [6]);

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJkZWNyZWFzZSIsInZhbHVlIiwiZGVlcEVxdWFsIiwiTmFOIiwidGVzdCIsInN1bSIsInByZXZpb3VzIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsVUFBVixFQUFzQixZQUFPOztBQUU1QixLQUFNQyxhQUFhRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsYUFBeEIsQ0FBbkI7QUFDQSxLQUFNQyxZQUFZLFlBQVlILFVBQTlCOztBQUVBRCxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRLLEtBQUksbUNBQUosRUFBeUMsWUFBTzs7QUFFL0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixlQUFXLENBQUUsT0FBT0MsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVYsQ0FBUCxDQUFzQyxDQUZ2Qzs7QUFJWEMsUUFKRjs7QUFNQWQsVUFBT2UsU0FBUCxDQUFrQk4sTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQTFCO0FBQ0EsR0FURDtBQVVBLEVBWEQ7O0FBYUFOLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREssS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsV0FBT0MsU0FBVSxDQUFFLElBQUYsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBVixDQUFQO0FBQ0EsSUFMVzs7QUFPWEMsUUFQRjs7QUFTQWQsVUFBT2UsU0FBUCxDQUFrQk4sTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUExQjs7QUFFQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREssS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsV0FBT0MsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVFHLEdBQVIsRUFBYSxDQUFiLENBQVYsQ0FBUDtBQUNBLElBTFc7O0FBT1hGLFFBUEY7O0FBU0FkLFVBQU9lLFNBQVAsQ0FBa0JOLE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBMUI7O0FBRUEsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERLLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixlQUFXOztBQUVWLFFBQUlLLE9BQU9KLFNBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVixFQUF1QixTQUFTSyxHQUFULENBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQ2xFLFlBQU9ELFdBQVdDLE9BQWxCO0FBQ0EsS0FGVSxDQUFYOztBQUlBLFdBQU9ILElBQVA7QUFDQSxJQVRXOztBQVdYSCxRQVhGOztBQWFBZCxVQUFPZSxTQUFQLENBQWtCTixNQUFsQixFQUEwQixDQUFFLENBQUYsQ0FBMUI7O0FBRUEsR0FqQkQ7QUFrQkEsRUFuQkQ7O0FBcUJBTixVQUFVLDRDQUFWLEVBQXdELFlBQU87O0FBRTlESyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekI7O0FBRVosZUFBVzs7QUFFVixRQUFJSyxPQUFPSixTQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVYsRUFBdUIsU0FBU0ssR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxPQUF4QixFQUFpQztBQUNsRSxZQUFPRCxXQUFXQyxPQUFsQjtBQUNBLEtBRlUsRUFFUixDQUZRLENBQVg7O0FBSUEsV0FBT0gsSUFBUDtBQUNBLElBVFc7O0FBV1hILFFBWEY7O0FBYUFkLFVBQU9lLFNBQVAsQ0FBa0JOLE1BQWxCLEVBQTBCLENBQUUsQ0FBRixDQUExQjs7QUFFQSxHQWpCRDs7QUFtQkEsRUFyQkQ7O0FBdUJBLENBaEdEOztBQWtHQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwicGF0aFwiOiBcImRlY3JlYXNlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWNyZWFzZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZGVjcmVhc2VcIjogXCJkZWNyZWFzZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImRlY3JlYXNlXCIsICggKSA9PiB7XG5cblx0Y29uc3QgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIik7XG5cdGNvbnN0IGJyaWRnZVVSTCA9IFwiZmlsZTovL1wiICsgdGVzdEJyaWRnZTtcblxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2UoIFsgMSwgMiwgMywgNCwgNSBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMywgNCBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIGRlY3JlYXNlKCBbIDEsIDIsIDMsIDQsIDUgXSApIH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyBudWxsLCAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0cmV0dXJuIGRlY3JlYXNlKCBbIG51bGwsIDEsIDIsIDMgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAxLCAyIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyAxLCAyLCBOYU4sIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRyZXR1cm4gZGVjcmVhc2UoIFsgMSwgMiwgTmFOLCAzIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgMSwgMiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2Ugd2l0aCBtZXRob2QgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDcgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IGRlY3JlYXNlKCBbIDEsIDIsIDMgXSwgZnVuY3Rpb24gc3VtKCBwcmV2aW91cywgY3VycmVudCApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgNyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2Ugd2l0aCBtZXRob2QgYW5kIHZhbHVlIHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDYgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IGRlY3JlYXNlKCBbIDEsIDIsIDMgXSwgZnVuY3Rpb24gc3VtKCBwcmV2aW91cywgY3VycmVudCApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcblx0XHRcdFx0XHR9LCAwICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgNiBdICk7XG5cdFx0XHRcblx0XHR9ICk7XG5cblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
