'use strict';
var assert = require('assert');
var ellipsis = require('./');

it('should cut off a string and add an ellipsis', function () {
	assert.equal(ellipsis('unicorn', 1), 'u…');
	assert.equal(ellipsis('unicorn', 3), 'uni…');
	assert.equal(ellipsis('unicorn', 7), 'unicorn…');
	assert.equal(ellipsis('unicorn', 100), 'unicorn…');
});

it('The length should default to taking the whole string', function () {
	assert.equal(ellipsis('unicorn'), 'unicorn…');
});

it('should throw on nonsense input', function () {
	[function () {}, 123, [], null].forEach(function (input) {
		assert.throws(function () {
			ellipsis(input, 30);
		});
	});
});
