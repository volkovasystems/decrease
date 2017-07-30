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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVjcmVhc2UiLCJkZXNjcmliZSIsIml0IiwiZGVlcEVxdWFsIiwiTmFOIiwidGVzdCIsInN1bSIsInByZXZpb3VzIiwiY3VycmVudCIsInRlc3QyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUyx1QkFBVCxDQUFqQjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxVQUFWLEVBQXNCLFlBQU87O0FBRTVCQSxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksbUNBQUosRUFBeUMsWUFBTztBQUMvQ0osVUFBT0ssU0FBUCxDQUFrQkgsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVYsQ0FBbEIsRUFBaUQsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWpEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxTQUFQLENBQWtCSCxTQUFVLENBQUUsSUFBRixFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFWLENBQWxCLEVBQWlELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBakQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLFNBQVAsQ0FBa0JILFNBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRSSxHQUFSLEVBQWEsQ0FBYixDQUFWLENBQWxCLEVBQWdELENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBaEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsVUFBVSxrQ0FBVixFQUE4QyxZQUFPOztBQUVwRCxNQUFJSSxPQUFPTCxTQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVYsRUFBdUIsU0FBU00sR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxPQUF4QixFQUFpQztBQUNsRSxVQUFPRCxXQUFXQyxPQUFsQjtBQUNBLEdBRlUsQ0FBWDs7QUFJQU4sS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxTQUFQLENBQWtCRSxJQUFsQixFQUF3QixDQUFFLENBQUYsQ0FBeEI7QUFDQSxHQUZEOztBQUlBLEVBVkQ7O0FBWUFKLFVBQVUsNENBQVYsRUFBd0QsWUFBTzs7QUFFOUQsTUFBSVEsUUFBUVQsU0FBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFWLEVBQXVCLFNBQVNNLEdBQVQsQ0FBY0MsUUFBZCxFQUF3QkMsT0FBeEIsRUFBaUM7QUFDbkUsVUFBT0QsV0FBV0MsT0FBbEI7QUFDQSxHQUZXLEVBRVQsQ0FGUyxDQUFaOztBQUlBTixLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9LLFNBQVAsQ0FBa0JNLEtBQWxCLEVBQXlCLENBQUUsQ0FBRixDQUF6QjtBQUNBLEdBRkQ7O0FBSUEsRUFWRDs7QUFZQSxDQTVDRDs7QUE4Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZWNyZWFzZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGVjcmVhc2UvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlY3JlYXNlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJkZWNyZWFzZVwiOiBcImRlY3JlYXNlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBkZWNyZWFzZSA9IHJlcXVpcmUoIFwiLi9kZWNyZWFzZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJkZWNyZWFzZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyAxLCAyLCAzLCA0LCA1IF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCA0IF1cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlY3JlYXNlKCBbIDEsIDIsIDMsIDQsIDUgXSApLCBbIDEsIDIsIDMsIDQgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyBudWxsLCAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyIF1cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlY3JlYXNlKCBbIG51bGwsIDEsIDIsIDMgXSApLCBbIDEsIDIgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZWNyZWFzZSggWyAxLCAyLCBOYU4sIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIgXVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZGVjcmVhc2UoIFsgMSwgMiwgTmFOLCAzIF0gKSwgWyAxLCAyIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVjcmVhc2Ugd2l0aCBtZXRob2QgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXG5cdFx0bGV0IHRlc3QgPSBkZWNyZWFzZSggWyAxLCAyLCAzIF0sIGZ1bmN0aW9uIHN1bSggcHJldmlvdXMsIGN1cnJlbnQgKXtcblx0XHRcdHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgNyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0ZXN0LCBbIDcgXSApO1xuXHRcdH0gKTtcblxuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlY3JlYXNlIHdpdGggbWV0aG9kIGFuZCB2YWx1ZSBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cblx0XHRsZXQgdGVzdDIgPSBkZWNyZWFzZSggWyAxLCAyLCAzIF0sIGZ1bmN0aW9uIHN1bSggcHJldmlvdXMsIGN1cnJlbnQgKXtcblx0XHRcdHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG5cdFx0fSwgMCApO1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgNiBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0ZXN0MiwgWyA2IF0gKTtcblx0XHR9ICk7XG5cblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
