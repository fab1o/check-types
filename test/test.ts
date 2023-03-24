/**
 *
 * Test file for verifying the index.d.ts type declarations
 *
 */

import { Check } from '../src';

Check.map({ val: 1, val2: 2 }, { val: Check.number, val2: Check.string });

Check.even(3);

Check.not.even(3);

Check.maybe.even(2);

Check.assert.like({ foo: 'bar' }, { baz: 'qux' });

Check.assert(false, 'msg', Error);

Check.assert.not.like({ foo: 'bar' }, { baz: 'qux' });

Check.assert.maybe.like(undefined, { foo: 'bar' });

Check.assert(1);

Check.assert(1, 'Something went wrong');

Check.assert(1, 'Something went wrong', Error);

Check.apply(['foo', 'bar', ''], Check.nonEmptyString);

Check.any(Check.apply([1, 2, 3, ''], Check.string));

Check.any(
    Check.map({ foo: 0, bar: '' }, { foo: Check.number, bar: Check.string })
);

Check.all(
    Check.map({ foo: 0, bar: '' }, { foo: Check.number, bar: Check.string })
);

Check.all(Check.apply([1, 2, 3, ''], Check.string));

Check.keyIn(1, '1');

Check.object(null);

Check.instanceStrict(1, Number);

Check.assigned(undefined);

Check.greaterOrEqual(1, 2);

// value to look for, then data
Check.in('aaa', { a: 'aaa' });
Check.keyIn('a', { a: 'aaa' });

// data, then value to look for
Check.contains({ a: 'aaa' }, 'aaa');
Check.containsKey({ a: 'aaa' }, 'a');

Check.in(1, { a: 1 });
Check.keyIn(1, { 1: 'aaa' });

Check.contains({ a: 1 }, 1);
Check.containsKey({ 1: 'aaa' }, 1);

Check.in('b', ['a', 'b']);
Check.keyIn(0, ['a', 'b']);

Check.contains(['a', 'b'], 'b');
Check.containsKey(['a', 'b'], 0);

Check.in('b', 'ab');
Check.keyIn(0, 'ab');

Check.contains('ab', 'b');
Check.containsKey('ab', 0);

Check.keyIn(0, 'ab');

Check.contains('ab', 'b');
Check.containsKey('ab', 0);

Check.infinity(1);

Check.emptyString('');

Check.not.string('a');

Check.hasLength([], 2);

Check.nan(0);

const promise = new Promise(() => {});

Check.thenable(promise);

Check.iterable([]);

let someArrayOfStrings = ['a', 'b', 'c'];
if (Check.nonEmptyArray(someArrayOfStrings)) {
    console.log(someArrayOfStrings.includes('a'));
}

if (!Check.emptyArray(someArrayOfStrings)) {
    console.log(someArrayOfStrings.includes('a'));
}
