import test from 'ava';
import ellipsis from './';

test('should cut off a string and add an ellipsis', t => {
	t.is(ellipsis('unicorn', 1), 'u…');
	t.is(ellipsis('unicorn', 3), 'uni…');
	t.is(ellipsis('unicorn', 7), 'unicorn…');
	t.is(ellipsis('unicorn', 100), 'unicorn…');

	t.end();
});

test('The length should default to taking the whole string', t => {
	t.is(ellipsis('unicorn'), 'unicorn…');
	t.end();
});

test('should throw on nonsense input', t => {
	[123, [], null].forEach(input => {
		t.throws(() => {
			ellipsis(input, 30);
		});
	});

	t.end();
});
