'use strict';
var test = require('ava');
var ellipsis = require('./');

test('should cut off a string and add an ellipsis', function (t) {
	t.is(ellipsis('unicorn', 1), 'u…');
	t.is(ellipsis('unicorn', 3), 'uni…');
	t.is(ellipsis('unicorn', 7), 'unicorn…');
	t.is(ellipsis('unicorn', 100), 'unicorn…');

	t.end();
});

test('The length should default to taking the whole string', function (t) {
	t.is(ellipsis('unicorn'), 'unicorn…');
	t.end();
});

test('should throw on nonsense input', function (t) {
	[function () {}, 123, [], null].forEach(function (input) {
		t.throws(function () {
			ellipsis(input, 30);
		});
	});

	t.end();
});
