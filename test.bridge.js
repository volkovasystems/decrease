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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJkZWNyZWFzZSIsInZhbHVlIiwiZGVlcEVxdWFsIiwiTmFOIiwidGVzdCIsInN1bSIsInByZXZpb3VzIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsVUFBVixFQUFzQixZQUFPOztBQUU1QixLQUFNQyxhQUFhRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsYUFBeEIsQ0FBbkI7QUFDQSxLQUFNQyxZQUFZLFlBQVlILFVBQTlCOztBQUVBRCxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRLLEtBQUksbUNBQUosRUFBeUMsWUFBTzs7QUFFL0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixlQUFXLENBQUUsT0FBT0MsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVYsQ0FBUCxDQUFzQyxDQUZ2Qzs7QUFJWEMsUUFKRjs7QUFNQWQsVUFBT2UsU0FBUCxDQUFrQk4sTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQTFCO0FBQ0EsR0FURDtBQVVBLEVBWEQ7O0FBYUFOLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREssS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsV0FBT0MsU0FBVSxDQUFFLElBQUYsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBVixDQUFQO0FBQ0EsSUFMVzs7QUFPWEMsUUFQRjs7QUFTQWQsVUFBT2UsU0FBUCxDQUFrQk4sTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUExQjs7QUFFQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREssS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsV0FBT0MsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVFHLEdBQVIsRUFBYSxDQUFiLENBQVYsQ0FBUDtBQUNBLElBTFc7O0FBT1hGLFFBUEY7O0FBU0FkLFVBQU9lLFNBQVAsQ0FBa0JOLE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBMUI7O0FBRUEsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERLLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixlQUFXOztBQUVWLFFBQUlLLE9BQU9KLFNBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVixFQUF1QixTQUFTSyxHQUFULENBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQ2xFLFlBQU9ELFdBQVdDLE9BQWxCO0FBQ0EsS0FGVSxDQUFYOztBQUlBLFdBQU9ILElBQVA7QUFDQSxJQVRXOztBQVdYSCxRQVhGOztBQWFBZCxVQUFPZSxTQUFQLENBQWtCTixNQUFsQixFQUEwQixDQUFFLENBQUYsQ0FBMUI7O0FBRUEsR0FqQkQ7QUFrQkEsRUFuQkQ7O0FBcUJBTixVQUFVLDRDQUFWLEVBQXdELFlBQU87O0FBRTlESyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekI7O0FBRVosZUFBVzs7QUFFVixRQUFJSyxPQUFPSixTQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVYsRUFBdUIsU0FBU0ssR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxPQUF4QixFQUFpQztBQUNsRSxZQUFPRCxXQUFXQyxPQUFsQjtBQUNBLEtBRlUsRUFFUixDQUZRLENBQVg7O0FBSUEsV0FBT0gsSUFBUDtBQUNBLElBVFc7O0FBV1hILFFBWEY7O0FBYUFkLFVBQU9lLFNBQVAsQ0FBa0JOLE1BQWxCLEVBQTBCLENBQUUsQ0FBRixDQUExQjs7QUFFQSxHQWpCRDs7QUFtQkEsRUFyQkQ7O0FBdUJBLENBaEdEOztBQWtHQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZWNyZWFzZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkZWNyZWFzZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGVjcmVhc2UuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJkZWNyZWFzZVwiOiBcImRlY3JlYXNlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwiZGVjcmVhc2VcIiwgKCApID0+IHtcclxuXHJcblx0Y29uc3QgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIik7XHJcblx0Y29uc3QgYnJpZGdlVVJMID0gXCJmaWxlOi8vXCIgKyB0ZXN0QnJpZGdlO1xyXG5cclxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2UoIFsgMSwgMiwgMywgNCwgNSBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCA0IF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7IHJldHVybiBkZWNyZWFzZSggWyAxLCAyLCAzLCA0LCA1IF0gKSB9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQgXSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlKCBbIG51bGwsIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBkZWNyZWFzZSggWyBudWxsLCAxLCAyLCAzIF0gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyAxLCAyLCBOYU4sIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBkZWNyZWFzZSggWyAxLCAyLCBOYU4sIDMgXSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgMSwgMiBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlIHdpdGggbWV0aG9kIHBhcmFtZXRlcmBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDcgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGVzdCA9IGRlY3JlYXNlKCBbIDEsIDIsIDMgXSwgZnVuY3Rpb24gc3VtKCBwcmV2aW91cywgY3VycmVudCApe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50O1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgNyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlIHdpdGggbWV0aG9kIGFuZCB2YWx1ZSBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgNiBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cclxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gZGVjcmVhc2UoIFsgMSwgMiwgMyBdLCBmdW5jdGlvbiBzdW0oIHByZXZpb3VzLCBjdXJyZW50ICl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XHJcblx0XHRcdFx0XHR9LCAwICk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyA2IF0gKTtcclxuXHRcdFx0XHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
