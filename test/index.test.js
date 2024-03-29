/* globals suite, setup, test, teardown */

var chai = require('chai');
var src = require('../src');

var assert = chai.assert;
var Check = src.Check;

var QTY_OF_ASSERTS = 46;

suite('Check', function () {
    test('undefined function is defined', function () {
        assert.isFunction(Check.undefined);
    });

    test('undefined with undefined returns true', function () {
        assert.isTrue(Check.undefined(undefined));
    });

    test('undefined with null returns false', function () {
        assert.isFalse(Check.undefined(null));
    });

    test('null function is defined', function () {
        assert.isFunction(Check.null);
    });

    test('null with null returns true', function () {
        assert.isTrue(Check.null(null));
    });

    test('null with undefined returns false', function () {
        assert.isFalse(Check.null(undefined));
    });

    test('assigned function is defined', function () {
        assert.isFunction(Check.assigned);
    });

    test('assigned with null returns false', function () {
        assert.isFalse(Check.assigned(null));
    });

    test('assigned with undefined returns false', function () {
        assert.isFalse(Check.assigned(undefined));
    });

    test('assigned with object returns true', function () {
        assert.isTrue(Check.assigned({}));
    });

    test('assigned with false returns true', function () {
        assert.isTrue(Check.assigned(false));
    });

    test('primitive function is defined', function () {
        assert.isFunction(Check.primitive);
    });

    test('primitive with undefined returns true', function () {
        assert.isTrue(Check.primitive(undefined));
    });

    test('primitive with null returns true', function () {
        assert.isTrue(Check.primitive(null));
    });

    test('primitive with false returns true', function () {
        assert.isTrue(Check.primitive(false));
    });

    test('primitive with true returns true', function () {
        assert.isTrue(Check.primitive(true));
    });

    test('primitive with empty string returns true', function () {
        assert.isTrue(Check.primitive(''));
    });

    test('primitive with zero returns true', function () {
        assert.isTrue(Check.primitive(0));
    });

    if (typeof Symbol !== 'undefined') {
        test('primitive with symbol returns true', function () {
            assert.isTrue(Check.primitive(Symbol()));
        });
    }

    test('primitive with object returns false', function () {
        assert.isFalse(Check.primitive({}));
    });

    test('primitive with array returns false', function () {
        assert.isFalse(Check.primitive([]));
    });

    test('primitive with function returns false', function () {
        assert.isFalse(Check.primitive(function () {}));
    });

    test('infinity function is defined', function () {
        assert.isFunction(Check.infinity);
    });

    test('infinity with positive infinity returns true', function () {
        assert.isTrue(Check.infinity(Number.POSITIVE_INFINITY));
    });

    test('infinity with negative infinity returns true', function () {
        assert.isTrue(Check.infinity(Number.NEGATIVE_INFINITY));
    });

    test('infinity with number returns false', function () {
        assert.isFalse(Check.infinity(1));
    });

    test('number function is defined', function () {
        assert.isFunction(Check.number);
    });

    test('number with number returns true', function () {
        assert.isTrue(Check.number(1));
    });

    test('number with positive infinity returns false', function () {
        assert.isFalse(Check.number(Number.POSITIVE_INFINITY));
    });

    test('number with negative infinity returns false', function () {
        assert.isFalse(Check.number(Number.NEGATIVE_INFINITY));
    });

    test('number with infinity returns false', function () {
        assert.isFalse(Check.number(Number.Infinity));
    });

    test('number with NaN returns false', function () {
        assert.isFalse(Check.number(NaN));
    });

    test('number with string returns false', function () {
        assert.isFalse(Check.number('1'));
    });

    test('integer function is defined', function () {
        assert.isFunction(Check.integer);
    });

    test('integer with integer returns true', function () {
        assert.isTrue(Check.integer(-1));
    });

    test('integer with floating point number returns false', function () {
        assert.isFalse(Check.integer(0.1));
    });

    test('integer with infinity returns false', function () {
        assert.isFalse(Check.integer(Infinity));
    });

    test('integer with string returns false', function () {
        assert.isFalse(Check.integer('1'));
    });

    test('float function is defined', function () {
        assert.isFunction(Check.float);
    });

    test('float with floating point number returns true', function () {
        assert.isTrue(Check.float(-1.5));
    });

    test('float with integer returns false', function () {
        assert.isFalse(Check.float(1));
    });

    test('float with infinity returns false', function () {
        assert.isFalse(Check.float(Infinity));
    });

    test('float with string returns false', function () {
        assert.isFalse(Check.float('1.5'));
    });

    test('even function is defined', function () {
        assert.isFunction(Check.even);
    });

    test('even with even number returns true', function () {
        assert.isTrue(Check.even(2));
    });

    test('even with odd number returns false', function () {
        assert.isFalse(Check.even(3));
    });

    test('even with floating point number returns false', function () {
        assert.isFalse(Check.even(2.4));
    });

    test('even with string returns false', function () {
        assert.isFalse(Check.even('2'));
    });

    test('odd function is defined', function () {
        assert.isFunction(Check.odd);
    });

    test('odd with odd number returns true', function () {
        assert.isTrue(Check.odd(-1));
    });

    test('odd with even number returns false', function () {
        assert.isFalse(Check.odd(-2));
    });

    test('odd with floating point number returns false', function () {
        assert.isFalse(Check.odd(5.5));
    });

    test('odd with string returns false', function () {
        assert.isFalse(Check.odd('-1'));
    });

    test('greater function is defined', function () {
        assert.isFunction(Check.greater);
    });

    test('greater with lesser number returns false', function () {
        assert.isFalse(Check.greater(0, 1));
    });

    test('greater with greater number returns true', function () {
        assert.isTrue(Check.greater(1 / 2, 1 / 4));
    });

    test('greater works with negative numbers', function () {
        assert.isFalse(Check.greater(-2, -1));
    });

    test('greater with positive infinity returns false', function () {
        assert.isFalse(Check.greater(Number.POSITIVE_INFINITY, 0));
    });

    test('greater with NaN returns false', function () {
        assert.isFalse(Check.greater(NaN, -1));
    });

    test('greater with string returns false', function () {
        assert.isFalse(Check.greater('1', 0));
    });

    test('less function is defined', function () {
        assert.isFunction(Check.less);
    });

    test('less with lesser number returns true', function () {
        assert.isTrue(Check.less(1 / 8, 1 / 4));
    });

    test('less with greater number returns false', function () {
        assert.isFalse(Check.less(1, 0));
    });

    test('less works with negative numbers', function () {
        assert.isTrue(Check.less(-2, -1));
    });

    test('less with negative infinity returns false', function () {
        assert.isFalse(Check.less(Number.NEGATIVE_INFINITY, 0));
    });

    test('less with NaN returns false', function () {
        assert.isFalse(Check.less(NaN, 1));
    });

    test('less with string returns false', function () {
        assert.isFalse(Check.less('-1', 0));
    });

    test('between function is defined', function () {
        assert.isFunction(Check.between);
    });

    test('between with boundary value returns false', function () {
        assert.isFalse(Check.between(1, 0, 1));
    });

    test('between with in-between value returns true', function () {
        assert.isTrue(Check.between(1, 0, 2));
    });

    test('between works with fractions', function () {
        assert.isTrue(Check.between(1 / 2, 1 / 4, 1));
    });

    test('between works with negative numbers', function () {
        assert.isTrue(Check.between(-2, -3, -1));
    });

    test('greaterOrEqual function is defined', function () {
        assert.isFunction(Check.greaterOrEqual);
    });

    test('greaterOrEqual with lesser number returns false', function () {
        assert.isFalse(Check.greaterOrEqual(0, 1));
    });

    test('greaterOrEqual with equal number returns true', function () {
        assert.isTrue(Check.greaterOrEqual(1, 1));
    });

    test('greaterOrEqual works with negative numbers', function () {
        assert.isFalse(Check.greaterOrEqual(-1, 0));
    });

    test('greaterOrEqual with positive infinity returns false', function () {
        assert.isFalse(Check.greaterOrEqual(Number.POSITIVE_INFINITY, 0));
    });

    test('greaterOrEqual with NaN returns false', function () {
        assert.isFalse(Check.greaterOrEqual(NaN, -1));
    });

    test('greaterOrEqual with string returns false', function () {
        assert.isFalse(Check.greaterOrEqual('1', 1));
    });

    test('lessOrEqual function is defined', function () {
        assert.isFunction(Check.lessOrEqual);
    });

    test('lessOrEqual with 1, 0 returns false', function () {
        assert.isFalse(Check.lessOrEqual(1, 0));
    });

    test('lessOrEqual with 1, 1 returns true', function () {
        assert.isTrue(Check.lessOrEqual(1, 1));
    });

    test('lessOrEqual works with negative numbers', function () {
        assert.isTrue(Check.lessOrEqual(-2, -2));
    });

    test('lessOrEqual with negative infinity returns false', function () {
        assert.isFalse(Check.lessOrEqual(Number.NEGATIVE_INFINITY, 0));
    });

    test('lessOrEqual with NaN returns false', function () {
        assert.isFalse(Check.lessOrEqual(NaN, 1));
    });

    test('lessOrEqual with string returns false', function () {
        assert.isFalse(Check.lessOrEqual('-1', -1));
    });

    test('inRange function is defined', function () {
        assert.isFunction(Check.inRange);
    });

    test('inRange with out-of-range number returns false', function () {
        assert.isFalse(Check.inRange(2, 0, 1));
    });

    test('inRange with upper-bound number returns true', function () {
        assert.isTrue(Check.inRange(1, 0, 1));
    });

    test('inRange with lower-bound number returns true', function () {
        assert.isTrue(Check.inRange(0, 0, 1));
    });

    test('inRange with unordered bounds returns true', function () {
        assert.isTrue(Check.inRange(-1, 0, -1));
    });

    test('positive function is defined', function () {
        assert.isFunction(Check.positive);
    });

    test('positive with positive integer returns true', function () {
        assert.isTrue(Check.positive(1));
    });

    test('positive with negative integer returns false', function () {
        assert.isFalse(Check.positive(-1));
    });

    test('positive with positive fraction returns true', function () {
        assert.isTrue(Check.positive(1 / 2));
    });

    test('positive with positive infinity returns false', function () {
        assert.isFalse(Check.positive(Number.POSITIVE_INFINITY));
    });

    test('positive with NaN returns false', function () {
        assert.isFalse(Check.positive(NaN));
    });

    test('positive with string returns false', function () {
        assert.isFalse(Check.positive('1'));
    });

    test('negative function is defined', function () {
        assert.isFunction(Check.negative);
    });

    test('negative with positive integer returns false', function () {
        assert.isFalse(Check.negative(1));
    });

    test('negative with negative integer returns true', function () {
        assert.isTrue(Check.negative(-1));
    });

    test('negative with negative fraction returns true', function () {
        assert.isTrue(Check.negative(-1 / 2));
    });

    test('negative with negative infinity returns false', function () {
        assert.isFalse(Check.negative(Number.NEGATIVE_INFINITY));
    });

    test('negative with NaN returns false', function () {
        assert.isFalse(Check.negative(NaN));
    });

    test('negative with string returns false', function () {
        assert.isFalse(Check.negative('-1'));
    });

    test('string function is defined', function () {
        assert.isFunction(Check.string);
    });

    test('string with empty string returns true', function () {
        assert.isTrue(Check.string(''));
    });

    test('string with coercible object returns false', function () {
        assert.isFalse(
            Check.string({
                toString: function () {
                    return '';
                }
            })
        );
    });

    test('emptyString function is defined', function () {
        assert.isFunction(Check.emptyString);
    });

    test('emptyString with empty string returns true', function () {
        assert.isTrue(Check.emptyString(''));
    });

    test('emptyString with non-empty string returns false', function () {
        assert.isFalse(Check.emptyString(' '));
    });

    test('emptyString with coercible object returns false', function () {
        assert.isFalse(
            Check.emptyString({
                toString: function () {
                    return '';
                }
            })
        );
    });

    test('nonEmptyString function is defined', function () {
        assert.isFunction(Check.nonEmptyString);
    });

    test('nonEmptyString with non-empty string returns true', function () {
        assert.isTrue(Check.nonEmptyString(' '));
    });

    test('nonEmptyString with empty string returns false', function () {
        assert.isFalse(Check.nonEmptyString(''));
    });

    test('nonEmptyString with coercible object returns false', function () {
        assert.isFalse(
            Check.nonEmptyString({
                toString: function () {
                    return 'foo';
                }
            })
        );
    });

    test('match function is defined', function () {
        assert.isFunction(Check.match);
    });

    test('match with match returns true', function () {
        assert.isTrue(Check.match('foo', /^FOO$/i));
    });

    test('match with no match returns false', function () {
        assert.isFalse(Check.match('foo', /^foO$/));
    });

    test('match with coercible object returns false', function () {
        assert.isFalse(
            Check.match(
                {
                    toString: function () {
                        return 'foo';
                    }
                },
                /^foo$/
            )
        );
    });

    test('boolean function is defined', function () {
        assert.isFunction(Check.boolean);
    });

    test('boolean with true returns true', function () {
        assert.isTrue(Check.boolean(true));
    });

    test('boolean with false returns true', function () {
        assert.isTrue(Check.boolean(false));
    });

    test('boolean with one returns false', function () {
        assert.isFalse(Check.boolean(1));
    });

    test('boolean with undefined returns false', function () {
        assert.isFalse(Check.boolean());
    });

    test('boolean with null returns false', function () {
        assert.isFalse(Check.boolean(null));
    });

    test('object function is defined', function () {
        assert.isFunction(Check.object);
    });

    test('object with object returns true', function () {
        assert.isTrue(Check.object({}));
    });

    test('object with null returns false', function () {
        assert.isFalse(Check.object(null));
    });

    test('object with array returns false', function () {
        assert.isFalse(Check.object([]));
    });

    test('emptyObject function is defined', function () {
        assert.isFunction(Check.emptyObject);
    });

    test('emptyObject with empty object returns true', function () {
        assert.isTrue(Check.emptyObject({}));
    });

    test('emptyObject with empty array returns false', function () {
        assert.isFalse(Check.emptyObject([]));
    });

    test('emptyObject with null returns false', function () {
        assert.isFalse(Check.emptyObject(null));
    });

    test('emptyObject with non-empty object returns false', function () {
        assert.isFalse(Check.emptyObject({ foo: 'bar' }));
    });

    test('nonEmptyObject function is defined', function () {
        assert.isFunction(Check.nonEmptyObject);
    });

    test('nonEmptyObject with empty object returns false', function () {
        assert.isFalse(Check.nonEmptyObject({}));
    });

    test('nonEmptyObject with empty array returns false', function () {
        assert.isFalse(Check.nonEmptyObject([]));
    });

    test('nonEmptyObject with null returns false', function () {
        assert.isFalse(Check.nonEmptyObject(null));
    });

    test('nonEmptyObject with non-empty objet returns true', function () {
        assert.isTrue(Check.nonEmptyObject({ foo: 'bar' }));
    });

    test('thenable function is defined', function () {
        assert.isFunction(Check.thenable);
    });

    test('thenable with valid instance returns true', function () {
        assert.isTrue(Check.thenable(Promise.resolve()));
    });

    test('thenable with invalid instance returns false', function () {
        assert.isFalse(Check.thenable({}));
    });

    test('thenable with null value returns false', function () {
        assert.isFalse(Check.thenable(null));
    });

    test('inheritance function is defined', function () {
        assert.isFunction(Check.inheritance);
    });

    test('inheritance with invalid instance returns false', function () {
        assert.isFalse(Check.inheritance(new Error(), Array));
    });

    test('inheritance with derived instance returns true', function () {
        var MyError = function () {};

        MyError.prototype = Object.create(Error.prototype, {
            constructor: { value: MyError }
        });
        assert.isTrue(Check.inheritance(MyError, Error));
    });

    test('inheritance with null instance returns false', function () {
        assert.isFalse(Check.inheritance(null, Object));
    });

    test('inheritance with null prototype returns false', function () {
        assert.isFalse(Check.inheritance(null, null));
    });

    test('instanceStrict function is defined', function () {
        assert.isFunction(Check.instanceStrict);
    });

    test('instanceStrict with valid instance returns true', function () {
        assert.isTrue(Check.instanceStrict(new Error(), Error));
    });

    test('instanceStrict with invalid instance returns false', function () {
        assert.isFalse(Check.instanceStrict(new Error(), Array));
    });

    test('instanceStrict with derived instance returns true', function () {
        assert.isTrue(Check.instanceStrict(new Error(), Object));
    });

    test('instanceStrict with null instance returns false', function () {
        assert.isFalse(Check.instanceStrict(null, Object));
    });

    test('instanceStrict with null prototype returns false', function () {
        assert.isFalse(Check.instanceStrict(null, null));
    });

    test('instance function is defined', function () {
        assert.isFunction(Check.instance);
    });

    test('instance with valid instance returns true', function () {
        assert.isTrue(Check.instance([], Array));
    });

    test('instance with invalid instance returns false', function () {
        assert.isFalse(Check.instance({}, Array));
    });

    test('instance with derived instance returns true', function () {
        assert.isTrue(Check.instance([], Object));
    });

    suite('mock constructor.name:', function () {
        var object;

        setup(function () {
            object = {
                constructor: {
                    name: 'Array'
                }
            };
        });

        teardown(function () {
            Object.prototype.toString = toString;
        });

        test('instanceStrict with matching prototype returns false', function () {
            assert.isFalse(Check.instanceStrict(object, Array));
        });

        test('instance with matching prototype returns true', function () {
            assert.isTrue(Check.instance(object, Array));
        });

        test('instance with non-matching prototype returns false', function () {
            assert.isFalse(Check.instance(object, Error));
        });
    });

    test('like function is defined', function () {
        assert.isFunction(Check.like);
    });

    test('like with null as argument returns false', function () {
        assert.isFalse(Check.like(null, {}));
    });

    test('like with undefined as argument returns false', function () {
        assert.isFalse(Check.like(undefined, {}));
    });

    test('like with null as second argument returns false', function () {
        assert.isFalse(Check.like({}, null));
    });

    test('like with undefined as second argument returns false', function () {
        assert.isFalse(Check.like({}, undefined));
    });

    test('like with null as both arguments returns true', function () {
        assert.isTrue(Check.like(null, null));
    });

    test('like with undefined as both arguments returns true', function () {
        assert.isTrue(Check.like(undefined, undefined));
    });

    test('like with two empty object arguments returns true', function () {
        assert.isTrue(Check.like({}, {}));
    });

    test('like with different named properties returns false', function () {
        assert.isFalse(Check.like({ foo: {}, bar: {} }, { foo: {}, baz: {} }));
    });

    test('like with same named properties returns true', function () {
        assert.isTrue(
            Check.like(
                { foo: function () {}, bar: {} },
                { foo: function () {}, bar: {} }
            )
        );
    });

    test('like with differently typed properties returns false', function () {
        assert.isFalse(
            Check.like(
                { foo: function () {}, bar: {} },
                { foo: function () {}, bar: function () {} }
            )
        );
    });

    test('like with different nested objects returns false', function () {
        assert.isFalse(
            Check.like(
                { foo: { bar: { qux: 'string' }, baz: 23 } },
                { foo: { bar: { qux: 42 }, baz: 66 } }
            )
        );
    });

    test('array function is defined', function () {
        assert.isFunction(Check.array);
    });

    test('array with array returns true', function () {
        assert.isTrue(Check.array([]));
    });

    test('array with string returns false', function () {
        assert.isFalse(Check.array(''));
    });

    test('array with object returns false', function () {
        assert.isFalse(Check.array({}));
    });

    test('array with arguments object returns false', function () {
        assert.isFalse(Check.array(arguments));
    });

    test('emptyArray function is defined', function () {
        assert.isFunction(Check.emptyArray);
    });

    test('emptyArray with empty array returns true', function () {
        assert.isTrue(Check.emptyArray([]));
    });

    test('emptyArray with non-empty array returns false', function () {
        assert.isFalse(Check.emptyArray(['foo']));
    });

    test('emptyArray with empty object returns false', function () {
        assert.isFalse(Check.emptyArray({}));
    });

    test('nonEmptyArray function is defined', function () {
        assert.isFunction(Check.nonEmptyArray);
    });

    test('nonEmptyArray with empty array returns false', function () {
        assert.isFalse(Check.nonEmptyArray([]));
    });

    test('nonEmptyArray with non-empty array returns true', function () {
        assert.isTrue(Check.nonEmptyArray(['foo']));
    });

    test('nonEmptyArray with empty object returns false', function () {
        assert.isFalse(Check.nonEmptyArray({}));
    });

    test('arrayLike function is defined', function () {
        assert.isFunction(Check.arrayLike);
    });

    test('arrayLike with array returns true', function () {
        assert.isTrue(Check.arrayLike([]));
    });

    test('arrayLike with string returns true', function () {
        assert.isTrue(Check.arrayLike(''));
    });

    test('arrayLike with object returns false', function () {
        assert.isFalse(Check.arrayLike({}));
    });

    test('arrayLike with arguments object returns true', function () {
        assert.isTrue(Check.arrayLike(arguments));
    });

    if (typeof Map !== 'undefined') {
        test('arrayLike with Map returns false', function () {
            assert.isFalse(Check.arrayLike(new Map()));
        });
    }

    test('iterable function is defined', function () {
        assert.isFunction(Check.iterable);
    });

    test('iterable with array returns true', function () {
        assert.isTrue(Check.iterable([]));
    });

    test('iterable with string returns true', function () {
        assert.isTrue(Check.iterable(''));
    });

    test('iterable with object returns false', function () {
        assert.isFalse(Check.iterable({}));
    });

    if (typeof Set !== 'undefined') {
        test('iterable with Set returns true', function () {
            assert.isTrue(Check.iterable(new Set()));
        });
    }

    test('contains function is defined', function () {
        assert.isFunction(Check.contains);
    });

    test('contains with matching value in object returns true', function () {
        assert.isTrue(Check.contains({ first: 'foo', second: 'bar' }, 'bar'));
    });

    test('contains with non-matching value in object returns false', function () {
        assert.isFalse(Check.contains({ baz: 'foo', qux: 'bar' }, 'baz'));
    });

    test('contains with matching value in array returns true', function () {
        assert.isTrue(Check.contains(['foo', 'bar'], 'bar'));
    });

    test('contains with non-matching value in array returns false', function () {
        assert.isFalse(Check.contains(['foo', 'bar'], 'baz'));
    });

    if (typeof Set !== 'undefined') {
        test('contains with matching value in set returns true', function () {
            assert.isTrue(Check.contains(new Set(['foo', 'bar']), 'bar'));
        });

        test('contains with non-matching value in set returns false', function () {
            assert.isFalse(Check.contains(new Set(['foo', 'bar']), 'baz'));
        });
    }

    if (typeof Map !== 'undefined') {
        test('contains with matching value in map returns true', function () {
            assert.isTrue(
                Check.contains(
                    new Map([
                        ['first', 'foo'],
                        ['second', 'bar']
                    ]),
                    'bar'
                )
            );
        });

        test('contains with non-matching value in map returns false', function () {
            assert.isFalse(
                Check.contains(
                    new Map([
                        ['baz', 'foo'],
                        ['qux', 'bar']
                    ]),
                    'baz'
                )
            );
        });
    }

    test('contains with matching value in string returns true', function () {
        assert.isTrue(Check.contains('foo', 'oo'));
    });

    test('contains with non-matching value in string returns false', function () {
        assert.isFalse(Check.contains('foo', 'of'));
    });

    test('contains with coercible object returns false', function () {
        assert.isFalse(
            Check.contains(
                {
                    toString: function () {
                        return 'foo';
                    }
                },
                'oo'
            )
        );
    });

    test('contains with null returns false', function () {
        assert.isFalse(Check.contains(null, 'foo'));
    });

    test('in function is defined', function () {
        assert.isFunction(Check.in);
    });

    test('in with matching value in object returns true', function () {
        assert.isTrue(Check.in('bar', { first: 'foo', second: 'bar' }));
    });

    test('in with non-matching value in object returns false', function () {
        assert.isFalse(Check.in('baz', { baz: 'foo', qux: 'bar' }));
    });

    test('in with matching value in array returns true', function () {
        assert.isTrue(Check.in('bar', ['foo', 'bar']));
    });

    test('in with non-matching value in array returns false', function () {
        assert.isFalse(Check.in('baz', ['foo', 'bar']));
    });

    if (typeof Set !== 'undefined') {
        test('in with matching value in set returns true', function () {
            assert.isTrue(Check.in('bar', new Set(['foo', 'bar'])));
        });

        test('in with non-matching value in set returns false', function () {
            assert.isFalse(Check.in('baz', new Set(['foo', 'bar'])));
        });
    }

    if (typeof Map !== 'undefined') {
        test('in with matching value in map returns true', function () {
            assert.isTrue(
                Check.in(
                    'bar',
                    new Map([
                        ['first', 'foo'],
                        ['second', 'bar']
                    ])
                )
            );
        });

        test('in with non-matching value in map returns false', function () {
            assert.isFalse(
                Check.in(
                    'baz',
                    new Map([
                        ['baz', 'foo'],
                        ['qux', 'bar']
                    ])
                )
            );
        });
    }

    test('in with matching value in string returns true', function () {
        assert.isTrue(Check.in('oo', 'foo'));
    });

    test('in with non-matching value in string returns false', function () {
        assert.isFalse(Check.in('of', 'foo'));
    });

    test('in with null returns false', function () {
        assert.isFalse(Check.in('foo', null));
    });

    test('containsKey function is defined', function () {
        assert.isFunction(Check.containsKey);
    });

    test('containsKey with matching value in object returns true', function () {
        assert.isTrue(Check.containsKey({ first: '', second: '' }, 'second'));
    });

    test('containsKey with non-matching value in object returns false', function () {
        assert.isFalse(Check.containsKey({ baz: 'foo', qux: '' }, 'foo'));
    });

    test('containsKey with matching value in array returns true', function () {
        assert.isTrue(Check.containsKey(['foo', 'bar'], 1));
    });

    test('containsKey with non-matching value in array returns false', function () {
        assert.isFalse(Check.containsKey(['foo', 'bar'], 2));
    });

    if (typeof Set !== 'undefined') {
        test('containsKey with set returns false', function () {
            assert.isFalse(Check.containsKey(new Set(['foo', 'bar']), 'foo'));
        });
    }

    if (typeof Map !== 'undefined') {
        test('containsKey with matching value in map returns true', function () {
            assert.isTrue(
                Check.containsKey(
                    new Map([
                        ['first', 'foo'],
                        ['second', 'bar']
                    ]),
                    'second'
                )
            );
        });

        test('containsKey with non-matching value in map returns false', function () {
            assert.isFalse(
                Check.containsKey(
                    new Map([
                        ['baz', 'foo'],
                        ['qux', 'bar']
                    ]),
                    'foo'
                )
            );
        });
    }

    test('containsKey with matching value in string returns true', function () {
        assert.isTrue(Check.containsKey('foo', 2));
    });

    test('containsKey with non-matching value in string returns false', function () {
        assert.isFalse(Check.containsKey('foo', 3));
    });

    test('containsKey with coercible object returns false', function () {
        assert.isFalse(
            Check.containsKey(
                {
                    toString: function () {
                        return 'foo';
                    }
                },
                2
            )
        );
    });

    test('containsKey with null returns false', function () {
        assert.isFalse(Check.containsKey(null, 'foo'));
    });

    test('keyIn function is defined', function () {
        assert.isFunction(Check.keyIn);
    });

    test('keyIn with matching value in object returns true', function () {
        assert.isTrue(Check.keyIn('second', { first: '', second: undefined }));
    });

    test('keyIn with non-matching value in object returns false', function () {
        assert.isFalse(Check.keyIn('foo', { baz: 'foo', qux: '' }));
    });

    test('keyIn with matching value in array returns true', function () {
        assert.isTrue(Check.keyIn(1, ['foo', 'bar']));
    });

    test('keyIn with non-matching value in array returns false', function () {
        assert.isFalse(Check.keyIn(2, ['foo', 'bar']));
    });

    if (typeof Set !== 'undefined') {
        test('keyIn with set returns false', function () {
            assert.isFalse(Check.keyIn('foo', new Set(['foo', 'bar'])));
        });
    }

    if (typeof Map !== 'undefined') {
        test('keyIn with matching value in map returns true', function () {
            assert.isTrue(
                Check.keyIn(
                    'second',
                    new Map([
                        ['first', 'foo'],
                        ['second', 'bar']
                    ])
                )
            );
        });

        test('keyIn with non-matching value in map returns false', function () {
            assert.isFalse(
                Check.keyIn(
                    'foo',
                    new Map([
                        ['baz', 'foo'],
                        ['qux', 'bar']
                    ])
                )
            );
        });
    }

    test('keyIn with matching value in string returns true', function () {
        assert.isTrue(Check.keyIn(2, 'foo'));
    });

    test('keyIn with non-matching value in string returns false', function () {
        assert.isFalse(Check.keyIn(3, 'foo'));
    });

    test('keyIn with null returns false', function () {
        assert.isFalse(Check.keyIn('foo', null));
    });

    test('hasLength function is defined', function () {
        assert.isFunction(Check.hasLength);
    });

    test('hasLength with zero on empty array returns true', function () {
        assert.isTrue(Check.hasLength([], 0));
    });

    test('hasLength with zero on empty string returns true', function () {
        assert.isTrue(Check.hasLength('', 0));
    });

    test('hasLength with zero on empty object returns false', function () {
        assert.isFalse(Check.hasLength({}, 0));
    });

    test('hasLength with matching length on array returns true', function () {
        assert.isTrue(Check.hasLength(['foo', 'bar'], 2));
    });

    test('hasLength with contrasting length on array returns false', function () {
        assert.isFalse(Check.hasLength(['foo', 'bar', 'baz'], 2));
    });

    test('hasLength with matching length on string returns true', function () {
        assert.isTrue(Check.hasLength('foo', 3));
    });

    test('hasLength with contrasting length on string returns false', function () {
        assert.isFalse(Check.hasLength('foobar', 3));
    });

    test('hasLength with matching length on object returns true', function () {
        assert.isTrue(Check.hasLength({ length: 1 }, 1));
    });

    test('hasLength with contrasting length on object returns false', function () {
        assert.isFalse(Check.hasLength({ length: 2 }, 1));
    });

    test('date function is defined', function () {
        assert.isFunction(Check.date);
    });

    test('date with date returns true', function () {
        assert.isTrue(Check.date(new Date()));
    });

    test('date with invalid date returns false', function () {
        assert.isFalse(Check.date(new Date('foo')));
    });

    test('date with object returns false', function () {
        assert.isFalse(Check.date({}));
    });

    test('function function is defined', function () {
        assert.isFunction(Check.function);
    });

    test('function with function returns true', function () {
        assert.isTrue(Check.function(function () {}));
    });

    test('function with object returns false', function () {
        assert.isFalse(Check.function({}));
    });

    test('map function is defined', function () {
        assert.isFunction(Check.map);
    });

    test('map with arrays does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map([], []);
        });
    });

    test('map with objects does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map({}, {});
        });
    });

    test('map with array and object does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map([], {});
        });
    });

    test('map with object and array does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map({}, []);
        });
    });

    test('map with one predicate does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map(['', '', ''], Check.string);
        });
    });

    test('map with insufficient data does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map([''], [Check.string, Check.string]);
        });
    });

    test('map with insufficient predicates does not throw', function () {
        assert.doesNotThrow(function () {
            Check.map(['', '', ''], [Check.string, Check.string]);
        });
    });

    test('map with array returns the correct results', function () {
        var result = Check.map(
            ['', 0, '', 0, 0],
            [Check.string, Check.string, Check.number, Check.number]
        );

        assert.lengthOf(result, 4);
        assert.isTrue(result[0]);
        assert.isFalse(result[1]);
        assert.isFalse(result[2]);
        assert.isTrue(result[3]);
    });

    test('map with object returns the correct results', function () {
        var result = Check.map(
            { foo: '', bar: 0, baz: { qux: 0, wibble: 'blee' } },
            {
                foo: Check.string,
                bar: Check.string,
                baz: { qux: Check.number }
            }
        );

        assert.lengthOf(Object.keys(result), 3);
        assert.isTrue(result.foo);
        assert.isFalse(result.bar);
        assert.isObject(result.baz);
        assert.lengthOf(Object.keys(result.baz), 1);
        assert.isTrue(result.baz.qux);
    });

    test('map with assertion does not throw with valid data', function () {
        assert.doesNotThrow(function () {
            Check.map(['foo'], Check.assert.string);
        });
        assert.doesNotThrow(function () {
            Check.map({ foo: 'bar' }, { foo: Check.assert.string });
        });
    });

    test('map with assertion throws with invalid data', function () {
        assert.throws(function () {
            Check.map(['foo', 0], Check.assert.string);
        });
        assert.throws(function () {
            Check.map({ foo: 'foo', bar: 0 }, Check.assert.string);
        });
    });

    test('map returns the correct results with maybe modifier', function () {
        var result = Check.map(
            { foo: null, baz: { qux: '' } },
            {
                foo: Check.maybe.string,
                bar: Check.maybe.string,
                baz: { qux: Check.maybe.string }
            }
        );

        assert.lengthOf(Object.keys(result), 3);
        assert.isTrue(result.foo);
        assert.isTrue(result.bar);
        assert.isObject(result.baz);
        assert.lengthOf(Object.keys(result.baz), 1);
        assert.isTrue(result.baz.qux);
    });

    test('map works with a single predicate', function () {
        var result = Check.map({ foo: {}, bar: { baz: 'qux' } }, Check.object);

        assert.lengthOf(Object.keys(result), 2);
        assert.isTrue(result.foo);
        assert.isTrue(result.bar);
    });

    test('map works with undefined data and maybe', function () {
        var result = Check.map({}, { foo: { bar: Check.maybe.string } });

        assert.lengthOf(Object.keys(result), 1);
        assert.isObject(result.foo);
        assert.lengthOf(Object.keys(result.foo), 1);
        assert.isTrue(result.foo.bar);
    });

    test('map works with undefined data and undefined', function () {
        var result = Check.map({}, { foo: { bar: Check.undefined } });

        assert.lengthOf(Object.keys(result), 1);
        assert.isObject(result.foo);
        assert.lengthOf(Object.keys(result.foo), 1);
        assert.isFalse(result.foo.bar);
    });

    test('map works with undefined data and not.assigned', function () {
        var result = Check.map({}, { foo: { bar: Check.not.assigned } });

        assert.lengthOf(Object.keys(result), 1);
        assert.isObject(result.foo);
        assert.lengthOf(Object.keys(result.foo), 1);
        assert.isFalse(result.foo.bar);
    });

    test('all function is defined', function () {
        assert.isFunction(Check.all);
    });

    test('all with invalid data throws', function () {
        assert.throws(function () {
            Check.all('foo');
        });
    });

    test('all with object data does not throw', function () {
        assert.doesNotThrow(function () {
            Check.all({ foo: true });
        });
    });

    test('all with array data does not throw', function () {
        assert.doesNotThrow(function () {
            Check.all([true]);
        });
    });

    test('all returns true when data is all true', function () {
        assert.isTrue(
            Check.all({ foo: true, bar: true, baz: true, qux: true })
        );
        assert.isTrue(Check.all([true, true, true, true]));
        assert.isTrue(Check.all({ foo: { bar: { baz: { qux: true } } } }));
    });

    test('all returns false when some data is not true', function () {
        assert.isFalse(
            Check.all({ foo: true, bar: true, baz: true, qux: false })
        );
        assert.isFalse(Check.all([true, true, false, true]));
        assert.isFalse(Check.all({ foo: { bar: { baz: false }, qux: true } }));
    });

    test('any function is defined', function () {
        assert.isFunction(Check.any);
    });

    test('any with invalid data throws', function () {
        assert.throws(function () {
            Check.any('foo');
        });
    });

    test('any with object data does not throw', function () {
        assert.doesNotThrow(function () {
            Check.any({ foo: true });
        });
    });

    test('any with array data does not throw', function () {
        assert.doesNotThrow(function () {
            Check.any([true]);
        });
    });

    test('any returns true when some data is true', function () {
        assert.isTrue(Check.any({ foo: false, bar: true }));
        assert.isTrue(Check.any([false, true]));
        assert.isTrue(Check.any({ foo: { bar: true } }));
    });

    test('any returns false when all data is not true', function () {
        assert.isFalse(Check.any({ foo: false, bar: false }));
        assert.isFalse(Check.any([false, false]));
        assert.isFalse(Check.any({ foo: { bar: false } }));
    });

    test('assert modifier is defined', function () {
        assert.isFunction(Check.assert);
    });

    test('assert modifier is applied to predicates', function () {
        assert.isFunction(Check.assert.like);
        assert.isFunction(Check.assert.instance);
        assert.isFunction(Check.assert.emptyObject);
        assert.isFunction(Check.assert.nonEmptyObject);
        assert.isFunction(Check.assert.object);
        assert.isFunction(Check.assert.null);
        assert.isFunction(Check.assert.undefined);
        assert.isFunction(Check.assert.assigned);
        assert.isFunction(Check.assert.primitive);
        assert.isFunction(Check.assert.hasLength);
        assert.isFunction(Check.assert.contains);
        assert.isFunction(Check.assert.in);
        assert.isFunction(Check.assert.containsKey);
        assert.isFunction(Check.assert.keyIn);
        assert.isFunction(Check.assert.emptyArray);
        assert.isFunction(Check.assert.nonEmptyArray);
        assert.isFunction(Check.assert.array);
        assert.isFunction(Check.assert.arrayBuffer);
        assert.isFunction(Check.assert.arrayBufferView);
        assert.isFunction(Check.assert.arrayLike);
        assert.isFunction(Check.assert.iterable);
        assert.isFunction(Check.assert.date);
        assert.isFunction(Check.assert.function);
        assert.isFunction(Check.assert.match);
        assert.isFunction(Check.assert.nonEmptyString);
        assert.isFunction(Check.assert.string);
        assert.isFunction(Check.assert.odd);
        assert.isFunction(Check.assert.even);
        assert.isFunction(Check.assert.between);
        assert.isFunction(Check.assert.greater);
        assert.isFunction(Check.assert.less);
        assert.isFunction(Check.assert.positive);
        assert.isFunction(Check.assert.negative);
        assert.isFunction(Check.assert.integer);
        assert.isFunction(Check.assert.number);
        assert.isFunction(Check.assert.boolean);
    });

    test('assert modifier is not applied to batch operations', function () {
        assert.isUndefined(Check.assert.map);
        assert.isUndefined(Check.assert.all);
        assert.isUndefined(Check.assert.any);
    });

    test('assert modifier is not applied to itself', function () {
        assert.isUndefined(Check.assert.assert);
    });

    test('assert modifier is applied to not', function () {
        assert.isObject(Check.assert.not);
        assert.lengthOf(Object.keys(Check.assert.not), QTY_OF_ASSERTS);
    });

    test('assert modifier is applied to maybe', function () {
        assert.isObject(Check.assert.maybe);
        assert.lengthOf(Object.keys(Check.assert.maybe), QTY_OF_ASSERTS);
    });

    test('assert modifier has correct number of keys', function () {
        assert.lengthOf(Object.keys(Check.assert), QTY_OF_ASSERTS + 2);
    });

    test('assert modifier throws when value is wrong', function () {
        assert.throws(function () {
            Check.assert.even(1);
        });
    });

    test('assert modifier does not throw when value is correct', function () {
        assert.doesNotThrow(function () {
            Check.assert.even(2);
        });
    });

    test('assert modifier with multi-argument predicate throws when value is wrong', function () {
        assert.throws(function () {
            Check.assert.match(' ', /^\w+$/);
        });
    });

    test('assert modifier with multi-argument predicate does not throw when value is correct', function () {
        assert.doesNotThrow(function () {
            Check.assert.match(' ', /^\s+$/);
        });
    });

    test('assert modifier throws TypeError instance', function () {
        try {
            Check.assert.even(1);
        } catch (error) {
            assert.instanceOf(error, TypeError);
        }
    });

    test('assert modifier sets default message on error', function () {
        try {
            Check.assert.even(1);
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected 1 to be even number'
            );
        }
    });

    test('assert modifer sets message on error', function () {
        try {
            Check.assert.even(1, 'foo bar');
        } catch (error) {
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier prohibits empty error messages', function () {
        try {
            Check.assert.even(1, '');
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected 1 to be even number'
            );
        }
    });

    test('assert modifer sets custom error types', function () {
        try {
            Check.assert.even(1, 'foo bar', SyntaxError);
        } catch (error) {
            assert.instanceOf(error, SyntaxError);
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifer with multi-argument predicate sets message on error', function () {
        try {
            Check.assert.match('', /^\w+$/, 'foo bar');
        } catch (error) {
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier with multi-argument predicate prohibits empty error messages', function () {
        try {
            Check.assert.match('', /^\w+$/, '');
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected "" to match /^\\w+$/'
            );
        }
    });

    test('assert modifer with multi-argument predicate sets custom error types', function () {
        try {
            Check.assert.match('', /^\w+$/, 'foo bar', SyntaxError);
        } catch (error) {
            assert.instanceOf(error, SyntaxError);
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert throws errors with the correct messages', function () {
        assert.throws(function () {
            Check.assert.undefined(null);
        }, 'assert failed: expected null to be undefined');
        assert.throws(function () {
            Check.assert.null();
        }, 'assert failed: expected undefined to be null');
        assert.throws(function () {
            Check.assert.assigned(null);
        }, 'assert failed: expected null to be assigned');
        assert.throws(function () {
            Check.assert.primitive(TypeError());
        }, 'assert failed: expected TypeError to be primitive type');
        assert.throws(function () {
            Check.assert.infinity(-1);
        }, 'assert failed: expected -1 to be infinity');
        assert.throws(function () {
            Check.assert.number('');
        }, 'assert failed: expected "" to be Number');
        assert.throws(function () {
            Check.assert.integer(1.1);
        }, 'assert failed: expected 1.1 to be integer');
        assert.throws(function () {
            Check.assert.float(1);
        }, 'assert failed: expected 1 to be non-integer number');
        assert.throws(function () {
            Check.assert.even(1);
        }, 'assert failed: expected 1 to be even number');
        assert.throws(function () {
            Check.assert.odd(2);
        }, 'assert failed: expected 2 to be odd number');
        assert.throws(function () {
            Check.assert.greater(1, 1);
        }, 'assert failed: expected 1 to be greater than 1');
        assert.throws(function () {
            Check.assert.less(1, 1);
        }, 'assert failed: expected 1 to be less than 1');
        assert.throws(function () {
            Check.assert.between(1, 1, 2);
        }, 'assert failed: expected 1 to be between 1 and 2');
        assert.throws(function () {
            Check.assert.greaterOrEqual(1, 2);
        }, 'assert failed: expected 1 to be greater than or equal to 2');
        assert.throws(function () {
            Check.assert.lessOrEqual(2, 1);
        }, 'assert failed: expected 2 to be less than or equal to 1');
        assert.throws(function () {
            Check.assert.inRange(1, 2, 3);
        }, 'assert failed: expected 1 to be in the range 2 to 3');
        assert.throws(function () {
            Check.assert.positive(0);
        }, 'assert failed: expected 0 to be positive number');
        assert.throws(function () {
            Check.assert.negative(0);
        }, 'assert failed: expected 0 to be negative number');
        assert.throws(function () {
            Check.assert.string({});
        }, 'assert failed: expected Object to be String');
        assert.throws(function () {
            Check.assert.emptyString('"f\\o/o"');
        }, 'assert failed: expected "\\"f\\\\o/o\\"" to be empty string');
        assert.throws(function () {
            Check.assert.nonEmptyString({});
        }, 'assert failed: expected Object to be non-empty string');
        assert.throws(function () {
            Check.assert.match('foo', /"b\\a\/r"/);
        }, 'assert failed: expected "foo" to match /"b\\\\a\\/r"/');
        assert.throws(function () {
            Check.assert.boolean(0);
        }, 'assert failed: expected 0 to be Boolean');
        assert.throws(function () {
            Check.assert.object([]);
        }, 'assert failed: expected Array to be Object');
        assert.throws(function () {
            Check.assert.emptyObject({ foo: 'bar' });
        }, 'assert failed: expected Object to be empty object');
        assert.throws(function () {
            Check.assert.nonEmptyObject({});
        }, 'assert failed: expected Object to be non-empty object');
        assert.throws(function () {
            Check.assert.instanceStrict('foo', String);
        }, 'assert failed: expected "foo" to be instanceof String');
        assert.throws(function () {
            Check.assert.instance('', Date);
        }, 'assert failed: expected "" to be Date');
        assert.throws(function () {
            Check.assert.like({ a: 5 }, { b: 2 });
        }, 'assert failed: expected Object to be like Object');
        assert.throws(function () {
            Check.assert.array({});
        }, 'assert failed: expected Object to be Array');
        assert.throws(function () {
            Check.assert.emptyArray(['foo']);
        }, 'assert failed: expected Array to be empty array');
        assert.throws(function () {
            Check.assert.nonEmptyArray([]);
        }, 'assert failed: expected Array to be non-empty array');
        assert.throws(function () {
            Check.assert.arrayLike({});
        }, 'assert failed: expected Object to be array-like');
        assert.throws(function () {
            Check.assert.iterable({});
        }, 'assert failed: expected Object to be iterable');
        assert.throws(function () {
            Check.assert.contains([], 'foo');
        }, 'assert failed: expected Array to contain "foo"');
        assert.throws(function () {
            Check.assert.in('foo', []);
        }, 'assert failed: expected "foo" to be in Array');
        assert.throws(function () {
            Check.assert.containsKey([], 0);
        }, 'assert failed: expected Array to contain key 0');
        assert.throws(function () {
            Check.assert.keyIn(0, []);
        }, 'assert failed: expected 0 to be key in Array');
        assert.throws(function () {
            Check.assert.hasLength([], 1);
        }, 'assert failed: expected Array to have length 1');
        assert.throws(function () {
            Check.assert.date({});
        }, 'assert failed: expected Object to be valid Date');
        assert.throws(function () {
            Check.assert.function({});
        }, 'assert failed: expected Object to be Function');
        assert.throws(function () {
            Check.assert.throws(function () {});
        }, 'assert failed: expected Function to throw');
        assert.throws(function () {
            Check.assert.arrayBuffer({});
        }, 'assert failed: expected Object to be ArrayBuffer');
        assert.throws(function () {
            Check.assert.arrayBufferView({});
        }, 'assert failed: expected Object to be ArrayBufferView');
    });

    test('assert modifier runs standalone', function () {
        assert.doesNotThrow(function () {
            Check.assert(true);
        });

        assert.throws(function () {
            Check.assert(false);
        });

        assert.doesNotThrow(function () {
            Check.assert(' ');
        });

        assert.throws(function () {
            Check.assert('');
        });

        assert.doesNotThrow(function () {
            Check.assert(-1);
        });

        assert.throws(function () {
            Check.assert(0);
        });

        assert.throws(function () {
            Check.assert(NaN);
        });

        assert.throws(function () {
            Check.assert(null);
        });

        assert.throws(function () {
            Check.assert(undefined);
        });

        try {
            Check.assert(false);
        } catch (error) {
            assert.instanceOf(error, Error);
            assert.equal(error.message, 'assert failed');
        }

        try {
            Check.assert(false, 'foo');
        } catch (error) {
            assert.instanceOf(error, Error);
            assert.equal(error.message, 'foo');
        }

        try {
            Check.assert(false, 'bar', SyntaxError);
        } catch (error) {
            assert.instanceOf(error, SyntaxError);
            assert.equal(error.message, 'bar');
        }
    });

    test('assert modifier returns value when value is correct', function () {
        assert.equal(Check.assert.nonEmptyString('foo'), 'foo');
        assert.equal(Check.assert('bar'), 'bar');
        assert.equal(Check.assert.not.emptyString('baz'), 'baz');
        assert.equal(Check.assert.maybe.nonEmptyString('qux'), 'qux');
        assert.deepEqual(Check.assert.array.of.nonEmptyString(['foo', 'bar']), [
            'foo',
            'bar'
        ]);
    });

    test('assert modifier throws for multi-argument predicates', function () {
        assert.throws(function () {
            Check.assert.between(1, 2, 1);
        });
    });

    test('assert modifier does not throw for multi-argument predicates', function () {
        assert.doesNotThrow(function () {
            Check.assert.between(1, 2, 0);
        });
    });

    test('not modifier is defined', function () {
        assert.isFunction(Check.not);
    });

    test('not modifier is not applied to itself', function () {
        assert.isUndefined(Check.not.not);
    });

    test('not modifier is not applied to maybe', function () {
        assert.isUndefined(Check.not.maybe);
    });

    test('not modifier is not applied to assert', function () {
        assert.isUndefined(Check.not.assert);
    });

    test('not modifier has correct number of keys', function () {
        assert.lengthOf(Object.keys(Check.not), QTY_OF_ASSERTS);
    });

    test('not modifier returns true when predicate returns false', function () {
        assert.isTrue(Check.not.object(undefined));
    });

    test('not modifier returns false when predicate returns true', function () {
        assert.isFalse(Check.not.nonEmptyString('1'));
    });

    test('not modifier runs standalone', function () {
        assert.isFalse(Check.not(true));
        assert.isTrue(Check.not(false));
    });

    test('not modifier returns true for multi-argument predicates', function () {
        assert.isTrue(Check.not.between(1, 2, 1));
    });

    test('not modifier returns false for multi-argument predicates', function () {
        assert.isFalse(Check.not.between(1, 2, 0));
    });

    test('maybe modifier is defined', function () {
        assert.isFunction(Check.maybe);
    });

    test('maybe modifier is not applied to itself', function () {
        assert.isUndefined(Check.maybe.maybe);
    });

    test('maybe modifier is not applied to not', function () {
        assert.isUndefined(Check.maybe.not);
    });

    test('maybe modifier is not applied to assert', function () {
        assert.isUndefined(Check.maybe.assert);
    });

    test('maybe modifier has correct number of keys', function () {
        assert.lengthOf(Object.keys(Check.maybe), QTY_OF_ASSERTS);
    });

    test('maybe modifier returns true when value is undefined', function () {
        assert.isTrue(Check.maybe.object(undefined));
    });

    test('maybe modifier returns true when value is null', function () {
        assert.isTrue(Check.maybe.object(null));
    });

    test('maybe modifier returns predicate result on value', function () {
        assert.isFalse(Check.maybe.odd(2));
        assert.isTrue(Check.maybe.odd(1));
    });

    test('maybe modifier with falsey values evaluates predicate', function () {
        assert.isFalse(Check.maybe.positive(0));
    });

    test('maybe modifier runs standalone', function () {
        assert.isTrue(Check.maybe(null));
        assert.isTrue(Check.maybe(undefined));
        assert.isFalse(Check.maybe(false));
    });

    test('maybe modifier shortcuts for multi-argument predicates', function () {
        assert.isTrue(Check.maybe.instance(null, Error));
    });

    test('assert modifier with not throws when value is correct', function () {
        assert.throws(function () {
            Check.assert.not.between(1, 2, 0);
        });
    });

    test('assert modifier with not does not throw when value is wrong', function () {
        assert.doesNotThrow(function () {
            Check.assert.not.between(1, 2, 1);
        });
    });

    test('assert modifier with not throws TypeError instance', function () {
        try {
            Check.assert.not.odd(1);
        } catch (error) {
            assert.instanceOf(error, TypeError);
        }
    });

    test('assert modifier with not sets default message on error', function () {
        try {
            Check.assert.not.odd(1);
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected 1 not to be odd number'
            );
        }
    });

    test('assert modifer with not sets message on error', function () {
        try {
            Check.assert.not.odd(1, 'foo bar');
        } catch (error) {
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier with not prohibits empty error messages', function () {
        try {
            Check.assert.not.odd(1, '');
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected 1 not to be odd number'
            );
        }
    });

    test('assert modifer with not sets custom error types', function () {
        try {
            Check.assert.not.odd(1, 'foo bar', SyntaxError);
        } catch (error) {
            assert.instanceOf(error, SyntaxError);
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier with not and multi-argument predicate sets default message on error', function () {
        try {
            Check.assert.not.match('   ', /^\s*$/);
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected "   " not to match /^\\s*$/'
            );
        }
    });

    test('assert modifer with not and multi-argument predicate sets message on error', function () {
        try {
            Check.assert.not.match('   ', /^\s*$/, 'foo bar');
        } catch (error) {
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier with not and multi-argument predicate prohibits empty error messages', function () {
        try {
            Check.assert.not.match('   ', /^\s*$/, '');
        } catch (error) {
            assert.strictEqual(
                error.message,
                'assert failed: expected "   " not to match /^\\s*$/'
            );
        }
    });

    test('assert modifer with not and multi-argument predicate sets custom error types', function () {
        try {
            Check.assert.not.match('   ', /^\s*$/, 'foo bar', SyntaxError);
        } catch (error) {
            assert.instanceOf(error, SyntaxError);
            assert.strictEqual(error.message, 'foo bar');
        }
    });

    test('assert modifier with maybe does not throw when value is correct', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.between(1, 2, 0);
        });
    });

    test('assert modifier with maybe does not throw when value is null', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.between(null, 2, 1);
        });
    });

    test('assert modifier with maybe throws when value is wrong', function () {
        assert.throws(function () {
            Check.assert.maybe.between(1, 2, 1);
        });
    });

    test('assert modifer with maybe sets message on error', function () {
        try {
            Check.assert.maybe.between(1, 2, 3, 'wibble');
        } catch (error) {
            assert.strictEqual(error.message, 'wibble');
        }
    });

    test('assert modifer with maybe sets custom error types', function () {
        try {
            Check.assert.maybe.between(1, 2, 3, 'blee', RangeError);
        } catch (error) {
            assert.instanceOf(error, RangeError);
            assert.strictEqual(error.message, 'blee');
        }
    });

    test('array.of modifier is defined', function () {
        assert.isObject(Check.array.of);
    });

    test('array.of has predicates defined', function () {
        assert.lengthOf(Object.keys(Check.array.of), QTY_OF_ASSERTS);
        assert.isFunction(Check.array.of.undefined);
        assert.isFunction(Check.array.of.null);
        assert.isFunction(Check.array.of.assigned);
        assert.isFunction(Check.array.of.primitive);
        assert.isFunction(Check.array.of.infinity);
        assert.isFunction(Check.array.of.number);
        assert.isFunction(Check.array.of.integer);
        assert.isFunction(Check.array.of.even);
        assert.isFunction(Check.array.of.odd);
        assert.isFunction(Check.array.of.greater);
        assert.isFunction(Check.array.of.less);
        assert.isFunction(Check.array.of.between);
        assert.isFunction(Check.array.of.greaterOrEqual);
        assert.isFunction(Check.array.of.lessOrEqual);
        assert.isFunction(Check.array.of.inRange);
        assert.isFunction(Check.array.of.positive);
        assert.isFunction(Check.array.of.negative);
        assert.isFunction(Check.array.of.string);
        assert.isFunction(Check.array.of.emptyString);
        assert.isFunction(Check.array.of.nonEmptyString);
        assert.isFunction(Check.array.of.match);
        assert.isFunction(Check.array.of.boolean);
        assert.isFunction(Check.array.of.object);
        assert.isFunction(Check.array.of.emptyObject);
        assert.isFunction(Check.array.of.nonEmptyObject);
        assert.isFunction(Check.array.of.instanceStrict);
        assert.isFunction(Check.array.of.instance);
        assert.isFunction(Check.array.of.like);
        assert.isFunction(Check.array.of.array);
        assert.isFunction(Check.array.of.emptyArray);
        assert.isFunction(Check.array.of.nonEmptyArray);
        assert.isFunction(Check.array.of.arrayLike);
        assert.isFunction(Check.array.of.iterable);
        assert.isFunction(Check.array.of.contains);
        assert.isFunction(Check.array.of.in);
        assert.isFunction(Check.array.of.containsKey);
        assert.isFunction(Check.array.of.keyIn);
        assert.isFunction(Check.array.of.hasLength);
        assert.isFunction(Check.array.of.date);
        assert.isFunction(Check.array.of.function);
    });

    test('array.of returns false when predicate values are not defined', function () {
        assert.isTrue(Check.array.of.undefined(new Array(3)));
    });

    test('array.of returns false when predicate values are undefined', function () {
        assert.isTrue(Check.array.of.undefined([, , , ,]));
    });

    test('array.of returns false when predicate is false for one item', function () {
        assert.isFalse(Check.array.of.undefined([, , null]));
    });

    test('array.of returns false when predicate is true for all items', function () {
        assert.isTrue(Check.array.of.null([null, null, null]));
    });

    test('array.of returns false when predicate is false for an item', function () {
        assert.isFalse(Check.array.of.nonEmptyString(['bar', , , 'baz']));
    });

    test('array.of returns false when predicate values are undefined', function () {
        assert.isFalse(Check.array.of.nonEmptyString([, , , ,]));
    });

    test('array.of returns true when predicate is empty', function () {
        assert.isTrue(Check.array.of.nonEmptyString([]));
    });

    test('array.of returns true when predicate is true for all items', function () {
        assert.isTrue(Check.array.of.nonEmptyString(['foo', 'bar', 'baz']));
    });

    test('array.of returns false when predicate is false for one item', function () {
        assert.isFalse(Check.array.of.positive([1, 0, 2]));
    });

    test('array.of returns false when predicate values are undefined', function () {
        assert.isFalse(Check.array.of.positive([, , , ,]));
    });

    test('array.of returns true when predicate is empty', function () {
        assert.isTrue(Check.array.of.positive([]));
    });

    test('array.of returns true for multi-argument predicates', function () {
        assert.isTrue(Check.array.of.between([1, 0, -1], 2, -2));
    });

    test('array.of returns false for multi-argument predicates', function () {
        assert.isFalse(Check.array.of.greater([1, 2, 3], 4));
    });

    test('assert.array.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.array.of.instance([new Error(), new Error()], Error);
        });
    });

    test('assert.array.of throws', function () {
        assert.throws(function () {
            Check.assert.array.of.instance([new Error(), {}], Error);
        });
    });

    test('assert modifer with of sets message on error', function () {
        try {
            Check.assert.array.of.between([2.5, 3], 2, 3, 'wibble');
        } catch (error) {
            assert.strictEqual(error.message, 'wibble');
        }
    });

    test('assert modifer with of sets custom error types', function () {
        try {
            Check.assert.array.of.between([2.5, 3], 2, 3, 'blee', RangeError);
        } catch (error) {
            assert.instanceOf(error, RangeError);
            assert.strictEqual(error.message, 'blee');
        }
    });

    test('assert modifer with maybe and of sets custom error types', function () {
        try {
            Check.assert.maybe.array.of.between(
                [2.5, 3],
                2,
                3,
                'wibble',
                RangeError
            );
        } catch (error) {
            assert.instanceOf(error, RangeError);
            assert.strictEqual(error.message, 'wibble');
        }
    });

    test('maybe.array.of returns true with null array', function () {
        assert.isTrue(Check.maybe.array.of.instance(null, Error));
    });

    test('maybe.array.of returns true with null values', function () {
        assert.isTrue(
            Check.maybe.array.of.instance([new Error(), null], Error)
        );
    });

    test('maybe.array.of returns false', function () {
        assert.isFalse(Check.maybe.array.of.instance([new Error(), {}], Error));
    });

    test('not.array.of returns true', function () {
        assert.isTrue(Check.not.array.of.instance([new Error(), null], Error));
    });

    test('not.array.of returns false', function () {
        assert.isFalse(Check.not.array.of.instance([new Error()], Error));
    });

    test('assert.maybe.array.of does not throw with null array', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.array.of.instance(null, Error);
        });
    });

    test('assert.maybe.array.of does not throw with null values', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.array.of.instance([new Error(), null], Error);
        });
    });

    test('assert.maybe.array.of throws', function () {
        assert.throws(function () {
            Check.assert.maybe.array.of.instance([new Error(), {}], Error);
        });
    });

    test('assert.not.array.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.not.array.of.instance([{}], Error);
        });
    });

    test('assert.not.array.of throws', function () {
        assert.throws(function () {
            Check.assert.not.array.of.instance(
                [new Error(), new Error()],
                Error
            );
        });
    });

    test('assert.array.of throws with empty array', function () {
        assert.doesNotThrow(function () {
            Check.assert.array.of.instance([], Error);
        });
    });

    test('array.of returns false for array-like objects', function () {
        assert.isFalse(
            Check.array.of.nonEmptyString({ 1: 'foo', 2: 'bar', length: 2 })
        );
    });

    if (typeof Set !== 'undefined') {
        test('array.of returns false for iterables', function () {
            assert.isFalse(
                Check.array.of.nonEmptyString(new Set(['foo', 'bar']))
            );
        });
    }

    test('array.of returns false for objects', function () {
        assert.isFalse(
            Check.array.of.nonEmptyString({ foo: 'bar', baz: 'qux' })
        );
    });

    test('arrayLike.of modifier is defined', function () {
        assert.isObject(Check.arrayLike.of);
    });

    test('arrayLike.of has predicates defined', function () {
        assert.lengthOf(Object.keys(Check.arrayLike.of), QTY_OF_ASSERTS);
    });

    test('arrayLike.of returns true when predicate is true for all items', function () {
        assert.isTrue(
            Check.arrayLike.of.nonEmptyString({
                0: 'foo',
                1: 'bar',
                length: 2
            })
        );
    });

    test('arrayLike.of returns false when predicate is false for one item', function () {
        assert.isFalse(
            Check.arrayLike.of.nonEmptyString({
                0: 'foo',
                1: '',
                length: 2
            })
        );
    });

    test('arrayLike.of returns true for multi-argument predicates', function () {
        assert.isTrue(
            Check.arrayLike.of.between({ 0: 1, 1: 0, length: 2 }, 2, -1)
        );
    });

    test('arrayLike.of returns false for multi-argument predicates', function () {
        assert.isFalse(
            Check.arrayLike.of.greater({ 0: 1, 1: 2, length: 2 }, 2)
        );
    });

    test('assert.arrayLike.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.arrayLike.of.instance(
                { 0: new Error(), 1: new Error(), length: 2 },
                Error
            );
        });
    });

    test('assert.arrayLike.of throws', function () {
        assert.throws(function () {
            Check.assert.arrayLike.of.instance(
                { 0: new Error(), 1: {}, length: 2 },
                Error
            );
        });
    });

    test('maybe.arrayLike.of returns true with null array-like', function () {
        assert.isTrue(Check.maybe.arrayLike.of.instance(null, Error));
    });

    test('maybe.arrayLike.of returns true with null values', function () {
        assert.isTrue(
            Check.maybe.arrayLike.of.instance(
                { 0: new Error(), 1: null, length: 2 },
                Error
            )
        );
    });

    test('maybe.arrayLike.of returns false', function () {
        assert.isFalse(
            Check.maybe.arrayLike.of.instance(
                { 0: new Error(), 1: {}, length: 2 },
                Error
            )
        );
    });

    test('not.arrayLike.of returns true', function () {
        assert.isTrue(
            Check.not.arrayLike.of.instance(
                { 0: new Error(), 1: null, length: 2 },
                Error
            )
        );
    });

    test('not.arrayLike.of returns false', function () {
        assert.isFalse(
            Check.not.arrayLike.of.instance(
                { 0: new Error(), length: 1 },
                Error
            )
        );
    });

    test('assert.maybe.arrayLike.of does not throw with null array-like', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.arrayLike.of.instance(null, Error);
        });
    });

    test('assert.maybe.arrayLike.of does not throw with null values', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.arrayLike.of.instance(
                { 0: new Error(), 1: null, length: 2 },
                Error
            );
        });
    });

    test('assert.maybe.arrayLike.of throws', function () {
        assert.throws(function () {
            Check.assert.maybe.arrayLike.of.instance(
                { 0: new Error(), 1: {}, length: 2 },
                Error
            );
        });
    });

    test('assert.not.arrayLike.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.not.arrayLike.of.instance({ 0: {}, length: 1 }, Error);
        });
    });

    test('assert.not.arrayLike.of throws', function () {
        assert.throws(function () {
            Check.assert.not.arrayLike.of.instance(
                { 0: new Error(), 1: new Error(), length: 2 },
                Error
            );
        });
    });

    test('arrayLike.of returns true for arrays', function () {
        assert.isTrue(Check.arrayLike.of.nonEmptyString(['foo', 'bar']));
    });

    if (typeof Set !== 'undefined') {
        test('arrayLike.of returns false for iterables', function () {
            assert.isFalse(
                Check.arrayLike.of.nonEmptyString(new Set(['foo', 'bar']))
            );
        });
    }

    test('arrayLike.of returns false for objects', function () {
        assert.isFalse(
            Check.arrayLike.of.nonEmptyString({ foo: 'bar', baz: 'qux' })
        );
    });

    test('iterable.of modifier is defined', function () {
        assert.isObject(Check.iterable.of);
    });

    test('iterable.of has predicates defined', function () {
        assert.lengthOf(Object.keys(Check.iterable.of), QTY_OF_ASSERTS);
    });

    if (typeof Set !== 'undefined') {
        test('iterable.of returns true when predicate is true for all items', function () {
            assert.isTrue(
                Check.iterable.of.nonEmptyString(new Set(['foo', 'bar']))
            );
        });

        test('iterable.of returns false when predicate is false for one item', function () {
            assert.isFalse(
                Check.iterable.of.nonEmptyString(new Set(['foo', '']))
            );
        });

        test('iterable.of returns true for multi-argument predicates', function () {
            assert.isTrue(
                Check.iterable.of.between(
                    new Map([
                        ['foo', 1],
                        ['bar', 0]
                    ]),
                    2,
                    -1
                )
            );
        });

        test('iterable.of returns false for multi-argument predicates', function () {
            assert.isFalse(
                Check.iterable.of.less(
                    new Map([
                        ['foo', 1],
                        ['bar', 2]
                    ]),
                    2
                )
            );
        });

        test('assert.iterable.of does not throw', function () {
            assert.doesNotThrow(function () {
                Check.assert.iterable.of.instance(
                    new Set([new Error(), new Error()]),
                    Error
                );
            });
        });

        test('assert.iterable.of throws', function () {
            assert.throws(function () {
                Check.assert.iterable.of.instance(
                    new Set([new Error(), {}]),
                    Error
                );
            });
        });

        test('maybe.iterable.of returns true with null iterable', function () {
            assert.isTrue(Check.maybe.iterable.of.instance(null, Error));
        });

        test('maybe.iterable.of returns true with null values', function () {
            assert.isTrue(
                Check.maybe.iterable.of.instance(
                    new Set([new Error(), null]),
                    Error
                )
            );
        });

        test('maybe.iterable.of returns false', function () {
            assert.isFalse(
                Check.maybe.iterable.of.instance(
                    new Set([new Error(), {}]),
                    Error
                )
            );
        });

        test('not.iterable.of returns true', function () {
            assert.isTrue(
                Check.not.iterable.of.instance(
                    new Set([new Error(), null]),
                    Error
                )
            );
        });

        test('not.iterable.of returns false', function () {
            assert.isFalse(
                Check.not.iterable.of.instance(new Set([new Error()]), Error)
            );
        });

        test('assert.maybe.iterable.of does not throw with null iterable', function () {
            assert.doesNotThrow(function () {
                Check.assert.maybe.iterable.of.instance(null, Error);
            });
        });

        test('assert.maybe.iterable.of does not throw with null values', function () {
            assert.doesNotThrow(function () {
                Check.assert.maybe.iterable.of.instance(
                    new Set([new Error(), null]),
                    Error
                );
            });
        });

        test('assert.maybe.iterable.of throws', function () {
            assert.throws(function () {
                Check.assert.maybe.iterable.of.instance(
                    new Set([new Error(), {}]),
                    Error
                );
            });
        });

        test('assert.not.iterable.of does not throw', function () {
            assert.doesNotThrow(function () {
                Check.assert.not.iterable.of.instance(
                    new Set([new Error(), {}]),
                    Error
                );
            });
        });

        test('assert.not.iterable.of throws', function () {
            assert.throws(function () {
                Check.assert.not.iterable.of.instance(
                    new Set([new Error(), new Error()]),
                    Error
                );
            });
        });

        test('iterable.of returns true for arrays', function () {
            assert.isTrue(Check.iterable.of.nonEmptyString(['foo', 'bar']));
        });

        test('iterable.of returns false for array-like objects', function () {
            assert.isFalse(
                Check.iterable.of.nonEmptyString({
                    0: 'foo',
                    1: 'bar',
                    length: 2
                })
            );
        });

        test('iterable.of returns false for objects', function () {
            assert.isFalse(
                Check.iterable.of.nonEmptyString({ foo: 'bar', baz: 'qux' })
            );
        });
    }

    test('object.of modifier is defined', function () {
        assert.isObject(Check.object.of);
    });

    test('object.of has predicates defined', function () {
        assert.lengthOf(Object.keys(Check.object.of), QTY_OF_ASSERTS);
    });

    test('object.of returns true when predicate is true for all items', function () {
        assert.isTrue(
            Check.object.of.nonEmptyString({ foo: 'bar', baz: 'qux' })
        );
    });

    test('object.of returns false when predicate is false for one item', function () {
        assert.isFalse(Check.object.of.nonEmptyString({ foo: 'bar', baz: '' }));
    });

    test('object.of returns true for multi-argument predicates', function () {
        assert.isTrue(Check.object.of.between({ foo: 1, bar: 0 }, 2, -1));
    });

    test('object.of returns false for multi-argument predicates', function () {
        assert.isFalse(Check.object.of.greater({ foo: 1, bar: 2 }, 2));
    });

    test('assert.object.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.object.of.instance(
                { foo: new Error(), bar: new Error() },
                Error
            );
        });
    });

    test('assert.object.of throws', function () {
        assert.throws(function () {
            Check.assert.object.of.instance(
                { foo: new Error(), bar: {} },
                Error
            );
        });
    });

    test('maybe.object.of returns true with null object', function () {
        assert.isTrue(Check.maybe.object.of.instance(null, Error));
    });

    test('maybe.object.of returns true with null values', function () {
        assert.isTrue(
            Check.maybe.object.of.instance(
                { foo: new Error(), bar: null },
                Error
            )
        );
    });

    test('maybe.object.of returns false', function () {
        assert.isFalse(
            Check.maybe.object.of.instance({ foo: new Error(), bar: {} }, Error)
        );
    });

    test('not.object.of returns true', function () {
        assert.isTrue(
            Check.not.object.of.instance({ foo: new Error(), bar: null }, Error)
        );
    });

    test('not.object.of returns false', function () {
        assert.isFalse(
            Check.not.object.of.instance({ foo: new Error() }, Error)
        );
    });

    test('assert.maybe.object.of does not throw with null object', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.object.of.instance(null, Error);
        });
    });

    test('assert.maybe.object.of does not throw with null values', function () {
        assert.doesNotThrow(function () {
            Check.assert.maybe.object.of.instance(
                { foo: new Error(), bar: null },
                Error
            );
        });
    });

    test('assert.maybe.object.of throws', function () {
        assert.throws(function () {
            Check.assert.maybe.object.of.instance(
                { foo: new Error(), bar: {} },
                Error
            );
        });
    });

    test('assert.not.object.of does not throw', function () {
        assert.doesNotThrow(function () {
            Check.assert.not.object.of.instance({ foo: {} }, Error);
        });
    });

    test('assert.not.object.of throws', function () {
        assert.throws(function () {
            Check.assert.not.object.of.instance(
                { foo: new Error(), bar: new Error() },
                Error
            );
        });
    });

    test('object.of returns false for arrays', function () {
        assert.isFalse(Check.object.of.nonEmptyString(['foo', 'bar']));
    });

    test('object.of returns false for array-likes', function () {
        assert.isFalse(
            Check.object.of.nonEmptyString({
                0: 'foo',
                1: 'bar',
                length: 2
            })
        );
    });

    if (typeof Set !== 'undefined') {
        test('object.of returns false for iterables', function () {
            assert.isFalse(
                Check.object.of.nonEmptyString(new Set(['foo', 'bar']))
            );
        });
    }

    test('throws with non function returns false', function () {
        assert.isFalse(Check.throws({}));
    });

    test('throws with throwing function returns true', function () {
        assert.isTrue(
            Check.throws(function () {
                throw new Error();
            })
        );
    });

    test('throws with non-throwing function returns false', function () {
        assert.isFalse(Check.throws(function () {}));
    });

    test('arrayBuffer function is defined', function () {
        assert.isFunction(Check.arrayBuffer);
    });

    test('arrayBuffer with arrayBuffer returns true', function () {
        assert.isTrue(Check.arrayBuffer(new ArrayBuffer()));
    });

    test('arrayBuffer with string returns false', function () {
        assert.isFalse(Check.arrayBuffer(''));
    });

    test('arrayBuffer with ArrayBufferView returns false', function () {
        assert.isFalse(Check.arrayBuffer(new Int32Array()));
    });

    test('arrayBuffer with array returns false', function () {
        assert.isFalse(Check.arrayBuffer([]));
    });

    test('arrayBufferView function is defined', function () {
        assert.isFunction(Check.arrayBufferView);
    });

    test('arrayBufferView with arrayBuffer returns true', function () {
        assert.isTrue(Check.arrayBufferView(new Int32Array()));
    });

    test('arrayBufferView with string returns false', function () {
        assert.isFalse(Check.arrayBufferView(''));
    });

    test('arrayBufferView with ArrayBufferView returns false', function () {
        assert.isFalse(Check.arrayBufferView(new ArrayBuffer()));
    });

    test('arrayBufferView with array returns false', function () {
        assert.isFalse(Check.arrayBufferView([]));
    });
});
