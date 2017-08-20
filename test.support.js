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



//: @client:
var decrease = require("./decrease.support.js");
//: @end-client





//: @client:

describe("decrease", function () {

	describe("`decrease( [ 1, 2, 3, 4, 5 ] )`", function () {
		it("should be equal to [ 1, 2, 3, 4 ]", function () {
			assert.deepEqual(decrease([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
		});
	});

	describe("`decrease( [ null, 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2 ]", function () {
			assert.deepEqual(decrease([null, 1, 2, 3]), [1, 2]);
		});
	});

	describe("`decrease( [ 1, 2, NaN, 3 ] )`", function () {
		it("should be equal to [ 1, 2 ]", function () {
			assert.deepEqual(decrease([1, 2, NaN, 3]), [1, 2]);
		});
	});

	describe("`decrease with method parameter`", function () {

		var test = decrease([1, 2, 3], function sum(previous, current) {
			return previous + current;
		});

		it("should be equal to [ 7 ]", function () {
			assert.deepEqual(test, [7]);
		});

	});

	describe("`decrease with method and value parameter`", function () {

		var test2 = decrease([1, 2, 3], function sum(previous, current) {
			return previous + current;
		}, 0);

		it("should be equal to [ 6 ]", function () {
			assert.deepEqual(test2, [6]);
		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVjcmVhc2UiLCJkZXNjcmliZSIsIml0IiwiZGVlcEVxdWFsIiwiTmFOIiwidGVzdCIsInN1bSIsInByZXZpb3VzIiwiY3VycmVudCIsInRlc3QyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUyx1QkFBVCxDQUFqQjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxVQUFWLEVBQXNCLFlBQU87O0FBRTVCQSxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksbUNBQUosRUFBeUMsWUFBTztBQUMvQ0osVUFBT0ssU0FBUCxDQUFrQkgsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVYsQ0FBbEIsRUFBaUQsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWpEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxTQUFQLENBQWtCSCxTQUFVLENBQUUsSUFBRixFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFWLENBQWxCLEVBQWlELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBakQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLFNBQVAsQ0FBa0JILFNBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRSSxHQUFSLEVBQWEsQ0FBYixDQUFWLENBQWxCLEVBQWdELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBaEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsVUFBVSxrQ0FBVixFQUE4QyxZQUFPOztBQUVwRCxNQUFJSSxPQUFPTCxTQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVYsRUFBdUIsU0FBU00sR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxPQUF4QixFQUFpQztBQUNsRSxVQUFPRCxXQUFXQyxPQUFsQjtBQUNBLEdBRlUsQ0FBWDs7QUFJQU4sS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxTQUFQLENBQWtCRSxJQUFsQixFQUF3QixDQUFFLENBQUYsQ0FBeEI7QUFDQSxHQUZEOztBQUlBLEVBVkQ7O0FBWUFKLFVBQVUsNENBQVYsRUFBd0QsWUFBTzs7QUFFOUQsTUFBSVEsUUFBUVQsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFWLEVBQXVCLFNBQVNNLEdBQVQsQ0FBY0MsUUFBZCxFQUF3QkMsT0FBeEIsRUFBaUM7QUFDbkUsVUFBT0QsV0FBV0MsT0FBbEI7QUFDQSxHQUZXLEVBRVQsQ0FGUyxDQUFaOztBQUlBTixLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9LLFNBQVAsQ0FBa0JNLEtBQWxCLEVBQXlCLENBQUUsQ0FBRixDQUF6QjtBQUNBLEdBRkQ7O0FBSUEsRUFWRDs7QUFZQSxDQTVDRDs7QUE4Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRlY3JlYXNlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRlY3JlYXNlL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWNyZWFzZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImRlY3JlYXNlXCI6IFwiZGVjcmVhc2VcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgZGVjcmVhc2UgPSByZXF1aXJlKCBcIi4vZGVjcmVhc2Uuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwiZGVjcmVhc2VcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlKCBbIDEsIDIsIDMsIDQsIDUgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMywgNCBdXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlY3JlYXNlKCBbIDEsIDIsIDMsIDQsIDUgXSApLCBbIDEsIDIsIDMsIDQgXSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlKCBbIG51bGwsIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiBdXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlY3JlYXNlKCBbIG51bGwsIDEsIDIsIDMgXSApLCBbIDEsIDIgXSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlKCBbIDEsIDIsIE5hTiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyIF1cIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZGVjcmVhc2UoIFsgMSwgMiwgTmFOLCAzIF0gKSwgWyAxLCAyIF0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSB3aXRoIG1ldGhvZCBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0bGV0IHRlc3QgPSBkZWNyZWFzZSggWyAxLCAyLCAzIF0sIGZ1bmN0aW9uIHN1bSggcHJldmlvdXMsIGN1cnJlbnQgKXtcclxuXHRcdFx0cmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyA3IF1cIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyA3IF0gKTtcclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2Ugd2l0aCBtZXRob2QgYW5kIHZhbHVlIHBhcmFtZXRlcmBcIiwgKCApID0+IHtcclxuXHJcblx0XHRsZXQgdGVzdDIgPSBkZWNyZWFzZSggWyAxLCAyLCAzIF0sIGZ1bmN0aW9uIHN1bSggcHJldmlvdXMsIGN1cnJlbnQgKXtcclxuXHRcdFx0cmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcclxuXHRcdH0sIDAgKTtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyA2IF1cIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdDIsIFsgNiBdICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
