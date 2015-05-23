'use strict';
module.exports = function (string, len) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string to use');
	}

	return string.substring(0, len) + '…';
};
